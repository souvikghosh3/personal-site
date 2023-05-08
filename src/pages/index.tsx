import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"

import * as styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <article className={styles.pictureTextContent}>
        <StaticImage
          className={styles.leftColumn}
          src="..\images\portrait_square.jpg"
          alt="head shot"
          placeholder="blurred"
          loading="eager"
          layout="fixed"
          width={350}
          height={350}
          />
        <div className={styles.rightColumn}>
          <p>Hello there!</p>
          <p>
            This page contains my education and work experience, as well as some general
            information about me.
          </p>
          <p>
            You can find the source for this site&nbsp;
            <a
              href={`https://github.com/souvikghosh3/personal-site`}
              target="_blank"
              rel="noreferrer">
              here
            </a>.
          </p>
          <p>
            Cheers!
          </p>
        </div>
      </article>
    </Layout>
  )
}
