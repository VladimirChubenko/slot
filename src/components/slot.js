import React from 'react'
import {Spin} from './spin'
import {CSSTransition} from 'react-transition-group'

export function Slot(props) { 
  const slotClasses = ['Slot', props.slot.value]

  if (props.slot.winner) {
    slotClasses.push('Win')
  }
  
  return (
    <CSSTransition
      in={props.spin}
      timeout={250}
      classNames={'slot'}
      className={slotClasses.join(' ')}
    >
    {props.spin
      ? <Spin />
      : <div> {props.slot.winner ? props.slot.value : null} </div>
    }
    </CSSTransition>
  )
}