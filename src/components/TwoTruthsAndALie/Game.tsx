import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import * as styles from './Game.module.css';

export default function Game() {
  /* Represents the state of the game. Game is in progress if a truth is selected, and
     is finished once the lie is selected. */
  enum State {
    New,
    InProgress,
    Finished,
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
    setState(State.InProgress);
  }

  async function revealCards() {
    setState(State.Finished);
    // Delay for 1 second so user can see they picked the lie first.
    await new Promise(f => setTimeout(f, 1000));
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
        <h3>Two Truths and a Lie</h3>
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
      <div className={styles.footer}>
        {state == State.New ? <h1>Click on the card you think contains the lie</h1> : <></>}
        {state == State.InProgress ? <h1>Select another card to try again</h1> : <></>}
        {state == State.Finished ? <h1>You got it!</h1> : <></>}
      </div>
    </>
  );
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
