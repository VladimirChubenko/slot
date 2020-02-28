import React from 'react'
import {Spin} from './spin'

export function Slot(props) { 
  const slotClasses = ['Slot', props.slot.value]

  if (props.slot.winner) {
    slotClasses.push('Win')
  }
  
  return (
    <>
    {props.spin
     ? <Spin />
     :  <div 
          className={slotClasses.join(' ')}
        >
          {props.slot.winner ? props.slot.value : null}
        </div>
    }
    </>
  )
}