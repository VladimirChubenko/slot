import React from 'react'
import spin from '../assets/spin.gif'
import {CSSTransition} from 'react-transition-group'

export function Spin() {
  return (
    <CSSTransition>
      <div className="Spin">
        <img  src={spin} alt="spin"/>
      </div>
    </CSSTransition>
  )
} 