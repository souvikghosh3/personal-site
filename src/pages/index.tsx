import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'


import * as styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.pictureTextContent}>
        <div className={styles.message}>
          <p>Hello there!</p>
          <p>
            This page contains my resume and a bit more about me.
          </p>
          <p>
            If you'd like to find out some fun (but completely useless) facts
            about me, you can play <Link to="/game">two truths and a lie</Link>
            .
          </p>
          <p>
            You can find the source for this site on&nbsp;
            <a
              href={`https://github.com/souvikghosh3/personal-site`}
              target="_blank"
              rel="noreferrer">
              my GitHub
            </a>.
          </p>
          <p>
            Thanks for visiting!
          </p>
        </div>
        <StaticImage
          className={styles.picture}
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
