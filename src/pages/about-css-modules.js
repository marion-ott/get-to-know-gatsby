import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Layout from './../components/layout'
import Container from '../components/container'
import css from './about-css-modules.module.css'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const User = props => (
  <UserWrapper>
    <img src={props.avatar} className={css.avatar} alt="" />
    <div className={css.description}>
      <h2 className={css.username}>{props.username}</h2>
      <p className={css.excerpt}>{props.excerpt}</p>
    </div>
  </UserWrapper>
)

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === 'purple' ? 'purple' : 'white')};
  }
`

export default function About() {
  return (
    <Layout>
      <GlobalStyle theme="purple" />
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Layout>
  )
}
