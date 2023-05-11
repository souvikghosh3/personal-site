import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import * as styles from './Game.module.css';

export default function Game() {
  /**
   * Represents the state of the game.
   * 
   * New:         No cards have been selected.
   * InProgress:  One truth has been selected.
   * Lost:        Both truths have been selected.
   * Won:         The lie has been selected.
   */ 
  enum State {
    New,
    InProgress,
    Lost,
    Won,
  }

  const data = useStaticQuery(graphql`
    query Facts {
      allFactsYaml {
        nodes {
          id
          fact
          truth
          explanation
        }
      }
    }
  `);

  const [facts, setFacts] = useState<Queries.FactsYaml[]>([]);
  const [showExplanations, setShowExplanations] = useState(false);
  const [state, setState] = useState<State>(State.New);
  /* The unique ids will be used to make sure that the Cards are re-rendered
     whenever the data is refreshed, but not throughout the game. The
     re-rendering will trigger the appropriate animation. */
  const [uniqueIds, setUniqueIds] = useState<string[]>([]);

  useEffect(() => setFacts(getRandomFacts(data.allFactsYaml.nodes)), [data]);

  function resetGame() {
    setState(State.New);
    setShowExplanations(false);
    setFacts(getRandomFacts(data.allFactsYaml.nodes));
  }

  function selectTruth() {
    if (state == State.New) {
      setState(State.InProgress);
    } else {
      setState(State.Lost);
      setShowExplanations(true);
    }
    
  }

  function revealCards() {
    setState(State.Won);
    setShowExplanations(true);
  }

  /* Given a list of facts, return a list of 2 random truths and 1 random lie.*/
  function getRandomFacts(facts: Queries.FactsYaml[]): Queries.FactsYaml[] {
    const truths = facts.filter(fact => fact.truth);
    const lies = facts.filter(fact => !fact.truth);

    var lie_idx = Math.floor(Math.random() * lies.length);
    var first_truth_idx = Math.floor(Math.random() * truths.length);
    var second_truth_idx = Math.floor(Math.random() * truths.length);

    // Make sure the second truth is different from the first one.
    while (second_truth_idx == first_truth_idx) {
      second_truth_idx = Math.floor(Math.random() * truths.length);
    }

    // Construct the array of selected facts, shuffle its order, and return.
    var ret = [lies[lie_idx], truths[first_truth_idx], truths[second_truth_idx]];
    shuffleArray(ret);

    setUniqueIds(ret.map(fact => fact.id.concat(Date.now().toString())));

    return ret;
  }

  return (
    <>
      <div className={styles.headerGrid}>
        <Header/>
        <button className={styles.button} onClick={resetGame}>Reset</button>
      </div>
      <div className={styles.cardGrid}>
        {facts.map((fact, index) => (
          <Card
            key={uniqueIds[index]}
            fact={fact}
            selectLie={revealCards}
            selectTruth={selectTruth}
            showExplanation={showExplanations}/>
        ))}
      </div>
    </>
  );

  function Header() {
    switch(state) {
      case State.New:
        return (<h1>Select the card you think contains the lie</h1>);
      case State.InProgress:
        return (<h1>Incorrect! Select another card to try again</h1>);
      case State.Lost:
        return (<h1>Better luck next time! Reset the game to play again</h1>);
      case State.Won:
        return (<h1>You got it! Reset the game to play again</h1>);
      default:
        return (<h1>Reset the game to play again</h1>);
    }
  }
}

/* Fisher-Yates algorithm for shuffling an array. */
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
