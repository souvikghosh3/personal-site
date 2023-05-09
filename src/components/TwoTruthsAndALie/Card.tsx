import React from 'react'
import * as styles from './Card.module.css';

interface CardProps{
  fact: Queries.FactsYaml;
  selectLie: () => void;
  showExplanation: boolean;
}

export default function Card({ fact, selectLie, showExplanation }: CardProps) {
  return (
    <div className={showExplanation? styles.flippedCard: styles.card}>
        <div className={styles.container}>
            <p className={styles.fact}>{fact.fact}</p>
            {showExplanation
              ? 
                <>
                  <h3>{fact.truth ? "truth" : "lie"}</h3>
                  <p>{fact.explanation}</p>
                </>
              :
              <button
                onClick={selectLie}
                className={styles.button}>
                  This is the lie!
              </button>
            }
        </div>
    </div>
  );
}
