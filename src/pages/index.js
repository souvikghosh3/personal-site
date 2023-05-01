import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export default function Home() {
  return (
    <div>
      <p>Hi! I&apos;m Souvik.</p>
      <StaticImage
        src="..\images\portrait_square.jpg"
        alt="head shot"
        placeholder="blurred"
        loading="eager"
        layout="fixed"
        width={250}
        height={250}
      />
      <p>
        This page contains my resume, as well as more information about my hobbies.
        <br />(TODO: add resume and info about hobbies)
      </p>
      <p>
        If you're interested, you can also play Two truths and a Lie to uncover some fun
        facts about me!
        <br />(UNDER CONSTRUCTION)
      </p>
      <p>
        Here is the source for this site.
        <br />(TODO: add github repo link)
      </p>
      <p>
        Cheers!
      </p>
    </div>
  )
}
