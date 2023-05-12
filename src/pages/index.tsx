import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import * as styles from './index.module.css';

/* Utilizes https://gatsby.dev/gatsby-head. */
export const Head = () => (
  <>
    <title>Souvik Ghosh</title>
    <meta name="description" content="Souvik Ghosh's personal website." />
  </>
);

export default function Home() {
  return (
    <Layout>
      <section className={styles.pictureTextContent}>
        <div className={styles.message}>
          <p>Hello there!</p>
          <p>
            This site contains my resume and a brief summary of my interests.
          </p>
          <p>
            If you&apos;d like to find out some fun (but completely useless)
            facts about me, you can play a {}
            <Link to="/game">two truths and a lie</Link> {}
            game that I&apos;ve put together.
          </p>
          <p>
            You can find me on {}
            <a
              href={`https://www.linkedin.com/in/souvikghosh3/`}
              target="_blank"
              rel="noreferrer">
              LinkedIn 
            </a> {}
            as well as {} 
            <a
              href={`https://github.com/souvikghosh3`}
              target="_blank"
              rel="noreferrer">
              GitHub 
            </a>
            , which contains the {}
            <a
              href={`https://github.com/souvikghosh3/personal-site`}
              target="_blank"
              rel="noreferrer">
              the source for this site
            </a>.
          </p>
          <p>
            Thanks for visiting!
          </p>
        </div>
        <StaticImage
          src="..\images\portrait_square.jpg"
          alt="portrait"
          placeholder="blurred"
          loading="eager"
          layout="fixed"
          width={250}
          height={250}
          />
      </section>
    </Layout>
  );
}
