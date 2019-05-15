import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I'm a web developer.</p>
      <p>
        <Link to="/contact">Get In Touch</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
