import React from 'react'
import {Spin} from './spin'
import {CSSTransition} from 'react-transition-group'

export function Slot({slot, rotating}) { 
  const slotClasses = ['Slot', slot.value]

  if (slot.winner) {
    slotClasses.push('Win')
  }
  
  return (
    <CSSTransition
      in={rotating}
      timeout={250}
      classNames={'slot'}
      className={slotClasses.join(' ')}
    >
    {rotating
      ? <Spin />
      : <div> {slot.winner ? <h3>WIN</h3> : null} </div>
    }
    </CSSTransition>
  )
}