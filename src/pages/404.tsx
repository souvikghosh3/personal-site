import React from 'react'
import Layout from '../components/Layout'

/* Utilizes https://gatsby.dev/gatsby-head. */
export const Head = () => (
  <>
    <title>404 - Page not found</title>
    <meta
      name="description"
      content="Page not found - please navigate to the home page." />
  </>
);

export default function NotFoundPage() {
  return (
    <Layout>
      <article>
        <h2>Resource not found</h2>
        <p>
          Sorry, this resource was not found.
          Please navigate back to the home page.
        </p>
      </article>
    </Layout>
  );
}
