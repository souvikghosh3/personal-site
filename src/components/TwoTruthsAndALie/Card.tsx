import React, { useState, useEffect } from 'react'

import * as styles from './Card.module.css';

interface CardProps{
  fact: Queries.FactsYaml;
  selectLie: () => void;
  selectTruth: () => void;
  showExplanation: boolean;
}

export default function Card({ fact, selectLie, selectTruth, showExplanation }: CardProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setExpanded(showExplanation), [showExplanation]);

  function selectCard() {
    setExpanded(true);
    fact.truth ? selectTruth() : selectLie();
  }

  return (
    <button
      onClick={selectCard}
      disabled={expanded}
      className={expanded ? `${styles.card} ${styles.expanded}`
                          : `${styles.card}`}>
        <div className={styles.container}>
          <p className={styles.fact}>{fact.fact}</p>
          {expanded &&
            <div className={styles.explanation}>
              <h3>{fact.truth ? "It's true:" : "It's a lie:"}</h3>
              <p>{fact.explanation}</p>
            </div>
          }
        </div>
    </button>
  );
}
