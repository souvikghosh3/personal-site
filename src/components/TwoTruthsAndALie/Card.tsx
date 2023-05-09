import React, { useState, useEffect } from 'react'
import * as styles from './Card.module.css';

interface CardProps{
  fact: Queries.FactsYaml;
  selectLie: () => void;
  selectTruth: () => void;
  showExplanation: boolean;
}

export default function Card({ fact, selectLie, selectTruth, showExplanation }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => 
  {
    console.log("\n\nSetting flipped to: " + showExplanation.toString());
    console.log("For: " + fact.fact);
    setFlipped(showExplanation);
  }
  , [showExplanation]);

  function selectCard() {
    setFlipped(true);
    fact.truth ? selectTruth() : selectLie();
  }

  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <p className={styles.fact}>{fact.fact}</p>
            {flipped
              ? <div className={styles.explanation}>
                  <h3>{fact.truth ? "It's true:" : "It's a lie:"}</h3>
                  <p>{fact.explanation}</p>
                </div>
              : <button
                  onClick={selectCard}
                  className={styles.button}>
                    Select
                </button>
            }
        </div>
    </div>
  );
}
