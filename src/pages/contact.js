import React from 'react'
import { Link } from 'gatsby'
import Layout from './../components/layout'
import Header from '../components/header'

export default function Contact() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </Layout>
  )
}
