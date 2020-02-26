import React from 'react'

export function Slot(props) { 
  const slotClasses = ['Slot', props.slot.value]

  if (props.slot.winner) {
    slotClasses.push('Win')
  }
  
  return (
    <div 
      className={slotClasses.join(' ')}
    >
      {props.slot.winner ? props.slot.value : null}
    </div>
  )
}