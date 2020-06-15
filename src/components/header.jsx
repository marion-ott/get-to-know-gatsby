import React from 'react'
import { Link } from 'gatsby'

export default function Header({ text }) {
  return (
    <div>
      <h1>{text}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about-css-modules">About CSS modules</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
