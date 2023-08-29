import * as React from 'react'
import Layout from '../components/layout.js'

const AboutPage = () => {
  return (
    <Layout pageTitle="Abouot Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About page</title>

export default AboutPage