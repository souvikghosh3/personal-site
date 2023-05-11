import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import Layout from '../components/Layout'

import * as styles from './about.module.css';



export default function About() {
  return (
    <Layout>
        <article>
          <section>
            <h2 className={styles.header}>Career</h2>
            <div className={styles.pictureTextContent}>
              <div className={styles.leftColumn}>
                <p className={styles.para}>
                  I'm a software engineer, with experience in full stack web app
                  development. I have most recently
                  worked in the internationalization and localization space,
                  building systems for machine translation, linguistic review, and
                  project management.
                </p>

                <p>
                  Looking forward, two areas I would like to work in are Climate
                  Tech and Cybersecurity. These are both fields that I am 
                  personally passionate about, and I am eager to make
                  contributions to them in my career.
                </p>
              </div>
              <div className={styles.rightColumn}>
                <StaticImage
                    className={styles.picture}
                    src="..\images\career.jpg"
                    alt="head shot"
                    placeholder="blurred"
                    loading="eager"
                    layout="fixed"
                    width={250}
                    />
                
              </div>
            </div>
          </section>
          <section>
            <h2 className={styles.header}>Music</h2>
            <div className={styles.pictureTextContent}>
              <div className={styles.leftColumn}>
                
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
                  className={styles.picture}
                  src="..\images\music.jpeg"
                  alt="head shot"
                  placeholder="blurred"
                  loading="eager"
                  layout="fixed"
                  width={250}
                  />
              </div>
            </div>
          </section>
          <section>
            <h2 className={styles.header}>Hobbies</h2>
            <div className={styles.pictureTextContent}>
              <div className={styles.leftColumn}>
                <p>
                    I enjoy spending time in the outdoors, going and walks
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
                    </a>.
                  </p>
                  <p>
                    I also enjoy reading and gaming in my free time. In general,
                    I enjoy fantasy and sci-fi adventures. Some of my favorite
                    books are <i>Ender's Game</i> by Orson Scott Card, and
                    the <i>Eragon</i> series by Christopher Paolini.
                  </p>
              </div>
              <div className={styles.rightColumn}>
                <StaticImage
                    className={styles.picture}
                    src="..\images\hiking.jpg"
                    alt="head shot"
                    placeholder="blurred"
                    loading="eager"
                    layout="fixed"
                    width={250}
                    />
              </div>
            </div>
          </section>
        </article>
    </Layout>
  );
}
