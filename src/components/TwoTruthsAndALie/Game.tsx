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
  const [state, setState] = useState<State>(State.New);
  /* The unique ids will be used to make sure that the Cards are re-rendered
     whenever the data is refreshed, but not throughout the game. The
     re-rendering will trigger the appropriate animation. */
  const [uniqueIds, setUniqueIds] = useState<string[]>([]);

  useEffect(() => {
    setFacts(getRandomFacts(data.allFactsYaml.nodes));
    generateUniqueCardIds();
  }, [data]);

  function resetGame() {
    setState(State.New);
    setFacts(getRandomFacts(data.allFactsYaml.nodes));
    generateUniqueCardIds();
  }

  function generateUniqueCardIds() {
    setUniqueIds(facts.map(fact => fact.id.concat(Date.now().toString())));
  }

  function selectTruth() {
    if (state == State.New) {
      setState(State.InProgress);
    } else {
      setState(State.Lost);
    }
    
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
            selectLie={() => setState(State.Won)}
            selectTruth={selectTruth}
            showExplanation={state == State.Won || state == State.Lost}/>
        ))}
      </div>
    </>
  );

  function Header() {
    switch(state) {
      case State.New:
        return (<h2>Select the card you think contains the lie</h2>);
      case State.InProgress:
        return (<h2>Incorrect! Select another card to try again</h2>);
      case State.Lost:
        return (<h2>Better luck next time! Reset the game to play again</h2>);
      case State.Won:
        return (<h2>You got it! Reset the game to play again</h2>);
      default:
        return (<h2>Reset the game to play again</h2>);
    }
  }
}

/* Given a list of facts, return a list of 2 random truths and 1 random lie.*/
function getRandomFacts(facts: Queries.FactsYaml[]): Queries.FactsYaml[] {
  const truths = facts.filter(fact => fact.truth);
  const lies = facts.filter(fact => !fact.truth);

  const lie_idx = Math.floor(Math.random() * lies.length);
  const first_truth_idx = Math.floor(Math.random() * truths.length);
  var second_truth_idx = Math.floor(Math.random() * truths.length);

  // Make sure the second truth is different from the first one.
  while (second_truth_idx == first_truth_idx) {
    second_truth_idx = Math.floor(Math.random() * truths.length);
  }

  // Construct the array of selected facts, shuffle its order, and return.
  const ret = [lies[lie_idx], truths[first_truth_idx], truths[second_truth_idx]];
  shuffleArray(ret);
  return ret;
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
