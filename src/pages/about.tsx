import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import Layout from '../components/Layout'
import Game from "../components/TwoTruthsAndALie/Game";

import * as styles from './about.module.css';



export default function About() {
  return (
    <Layout>
        <article>
          <section className={styles.pictureTextContent}>
            <div className={styles.leftColumn}>
              <StaticImage
                className={styles.picture}
                src="..\images\career.jpg"
                alt="head shot"
                placeholder="blurred"
                loading="eager"
                layout="fixed"
                width={300}
                />
            </div>
            <div className={styles.rightColumn}>
              <h3>Career</h3>
              <p>
                I'm a software engineer, with experience in full stack web app
                development. I have most recently
                worked in the internationalization and localization space,
                building systems for machine translation, linguistic review, and
                project management.
              </p>

              <p>
                Looking forward, two areas I would like to work in are Climate
                Tech and Cybersecurity. These are both fields that I personally
                find interesting, and I am eager to make contributions to them
                in my career.
              </p>
            </div>
          </section>
          <section className={styles.pictureTextContent}>
            <div className={styles.leftColumn}>
              <h3>Music</h3>
              <p>
                I play the tabla, a percussion instrument originating from the
                Indian subcontinent. I have been learning this instrument since
                the age of 10 from a number of wonderful teachers, and am
                currently studying under the tutelage of&nbsp;
                <a 
                    href="https://banerjeeabhijit.com/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Pt. Abhijit Banerjee
                </a>
                .
              </p>
              <p>
                I enjoy practicing and performing with other Hindustani
                classical musicians, and I have also started teaching tabla
                classes recently.
              </p>
            </div>
            <div className={styles.rightColumn}>
              <StaticImage
                className={styles.pictureRight}
                src="..\images\music.jpeg"
                alt="head shot"
                placeholder="blurred"
                loading="eager"
                layout="fixed"
                width={300}
                />
            </div>
            
          </section>
          <section className={styles.pictureTextContent}>
            <div className={styles.leftColumn}>
              <StaticImage
                className={styles.picture}
                src="..\images\hiking.jpg"
                alt="head shot"
                placeholder="blurred"
                loading="eager"
                layout="fixed"
                width={300}
                />
            </div>
            <div className={styles.rightColumn}>
              <h3>Hobbies</h3>
              <p>
                I love spending time in the outdoors, going and walks
                and hikes whenever possible. The photo on the left is from
                a hike on the {}
                <a 
                    href="https://www.nps.gov/yose/planyourvisit/mirrorlaketrail.htm"
                    target="_blank"
                    rel="noreferrer"
                    >
                    mirror lake trail
                </a> {}
                during a trip my girlfriend
                and I took to {}
                <a 
                    href="https://www.nps.gov/yose/index.htm"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Yosemite National Park
                </a>!
              </p>
              <p>
                I also enjoy reading and gaming in my free time. In general,
                I enjoy fantasy and sci-fi adventures. Some of my favorite
                books are the Eragon series, and Enders Game.
              </p>
            </div>
          </section>
        </article>
    </Layout>
  );
}
