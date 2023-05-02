import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <article className="pictureTextContent">
        <StaticImage
            className="columnLeft"
            src="..\images\portrait_square.jpg"
            alt="head shot"
            placeholder="blurred"
            loading="eager"
            layout="fixed"
            width={350}
            height={350}
          />
        <div className="columnRight">
          <p>Hello there!</p>
          <p>
            This page contains my education and work experience, as well as some general
            information about me.
          </p>
          <p>
            I post in my blog from time to time, so you can check that out to follow
            my recent adventures.
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
