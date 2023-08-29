import * as React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/icon.png"
        alt="gatsby icon"
      />
    </Layout>
  )
}

export const Head = () => <title>Home page</title>

export default IndexPage