import React from 'react'

export function Rate(props) {
  return (
    <div className="Rate">
      <button 
        className="rate-btn"
        onClick={() => props.rate > 10 ? props.changeRate(-5) : null}
      >-</button>
      <input 
        type="number"
        value={props.rate}
        readOnly 
      />
      <button 
        className="rate-btn"
        onClick={() => props.rate < 50 ? props.changeRate(5) : null}
      >+</button>
    </div>
  )
}

