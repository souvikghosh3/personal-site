import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import * as styles from './Game.module.css';

/**
 * 
 * TODO:
 *  1. When a card is selected, flip it over to reveal whether it is a truth or
 *     a lie.
 *  2. If the selected card is the lie, reveal all other cards.
 *  3. If the selected card is a truth, prompt user to try another card.
 *  4. Show prompts as a heading underneath the fact cards
 *    a. On selecting a truth, "Select another card to try again!"
 *    b. On selecting the lie, "You got it!"
 *    c. Have the heading fade in, or animated to appear smoothly!
 * 
 */
export default function Game() {
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

  useEffect(() => setFacts(getRandomFacts(data.allFactsYaml.nodes)), [data]);

  function resetGame() {
    setShowExplanations(false);
    setFacts(getRandomFacts(data.allFactsYaml.nodes));
  }

  function selectLie() {
    setShowExplanations(true);
  }

  return (
    <>
      <div className={styles.headerGrid}>
        <h3>Two Truths and a Lie</h3>
        <button className={styles.button} onClick={resetGame}>Reset</button>
      </div>
      <div className={styles.cardGrid}>
        {facts.map((fact) => (
          <Card
            key={fact.id.concat(Date.now().toString())}
            fact={fact}
            selectLie={selectLie}
            showExplanation={showExplanations}/>
        ))}
      </div>
    </>
  );
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
