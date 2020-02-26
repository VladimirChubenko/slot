import React from 'react'

export function Info(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.value}</h5>
    </div>
  )
}
