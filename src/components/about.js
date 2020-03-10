import React from 'react'

function About() {
  return (
    <div className="about">
      <h1>About this APP</h1>
      <ul className="main">
        <li className="item"> React:
          <ul>
            <li>react-create-app</li>
            <li>react-sound</li>
            <li>react-transition-group</li>
          </ul>
        </li>
        <li className="item"> Redux:
          <ul>
            <li>react-redux</li>
            <li>redux-thunk</li>
          </ul>
        </li>
        <li className="item">Hooks (No class components)</li>
        <li className="item">SASS (SCSS)</li>
      </ul>
      <a
        href="https://www.linkedin.com/in/volodymyr--chubenko/"
        target="_blank"
        rel="noopener noreferrer"
      >&lt;VC&gt;</a>
    </div>
  )
}

export default About;