import React from 'react'
import Game from '../components/TwoTruthsAndALie/Game'
import Layout from '../components/Layout'

/* Utilizes https://gatsby.dev/gatsby-head. */
export const Head = () => (
  <>
    <title>Souvik Ghosh - Two Truths and a Lie</title>
    <meta
      name="description"
      content="Play Two Truths and a Lie to learn
               fun (but useless) facts about Souvik." />
  </>
);

export default function TwoTruthsAndALie() {
  return (
    <Layout>
      <Game />
    </Layout>
  )
}
