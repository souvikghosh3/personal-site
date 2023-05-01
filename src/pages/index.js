import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section className="pictureTextContent">
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
          <p>Hi!</p>
          <p>
            This page contains my education and work experience, as well as some information
            about my personal interests.
          </p>
          <p>
            I post in my blog from time to time, so check that out if you're interested
            in my recent adventures.
          </p>
          <p>
            You can find the source for this site&nbsp;
            <a
              target="_blank"
              href={`https://github.com/souvikghosh3/personal-site`}
              rel="noreferrer">
              here
            </a>.
          </p>
          <p>
            Cheers!
          </p>
        </div>
      </section>
    </Layout>
  )
}
