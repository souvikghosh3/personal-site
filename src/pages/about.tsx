import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import * as styles from './about.module.css';

/* Utilizes https://gatsby.dev/gatsby-head. */
export const Head = () => (
  <>
    <title>Souvik Ghosh - About</title>
    <meta
			name="description"
			content="Information about Souvik's personal interets and hobbies." />
  </>
);

export default function About() {
  return (
    <Layout>
      <section>
        <h2>Career</h2>
        <div className={styles.pictureTextContent}>
          <div>
            <p>
              I&apos;m a software engineer, with experience in full stack web
							app development. I have most recently
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
          <div>
            <StaticImage
              className={styles.picture}
              src="../images/career.jpg"
              alt="portrait"
              placeholder="blurred"
              loading="eager"
              layout="fixed"
              width={250} />
          </div>
        </div>
      </section>
      <section>
        <h2>Music</h2>
        <div className={styles.pictureTextContent}>
          <div>
            <p>
              I play the tabla, a percussion instrument originating from the
              Indian subcontinent. I have been fortunate to learn this
							instrument from several brilliant teachers since I was ten
							years old. I am currently studying under the tutelage of {}
              <a 
								href="https://banerjeeabhijit.com/"
								target="_blank"
								rel="noreferrer">
									Pt. Abhijit Banerjee
              </a>
              .
            </p>
            <p>
              I enjoy practicing and performing with other Hindustani
              classical musicians, and I have also started teaching tabla
              classes recently. If you&apos;d like, you can check out {}
							<a 
								href="https://youtu.be/1yIW_rZPzSo?t=509"
								target="_blank"
								rel="noreferrer">
									this tabla solo
              </a> {}
							that I recorded in 2020.
            </p>
          </div>
          <div>
            <StaticImage
              className={styles.picture}
              src="../images/music.jpeg"
              alt="tabla"
              placeholder="blurred"
              loading="eager"
              layout="fixed"
              width={250} />
          </div>
        </div>
      </section>
      <section>
        <h2>Hobbies</h2>
        <div className={styles.pictureTextContent}>
          <div>
            <p>
              I enjoy spending time in the outdoors, going and walks
              and hikes whenever possible. The adjacent photo is from
              a hike on the {}
              <a 
								href="https://www.nps.gov/yose/planyourvisit/mirrorlaketrail.htm"
								target="_blank"
								rel="noreferrer">
                  mirror lake trail
              </a> {}
              during a trip my girlfriend
              and I took to {}
              <a 
								href="https://www.nps.gov/yose/index.htm"
								target="_blank"
								rel="noreferrer">
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
          <div>
            <StaticImage
              className={styles.picture}
              src="../images/hiking.jpg"
              alt="hiking"
              placeholder="blurred"
              loading="eager"
              layout="fixed"
              width={250} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
