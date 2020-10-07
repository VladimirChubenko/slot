import React from 'react'
import logo from '../assets/logo1.png'

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
        href="https://github.com/VladimirChubenko/slot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="Logo GitHub" style={{width: '32px', paddingRight: '15px'}}/>
      </a>
    </div>
  )
}

export default About;