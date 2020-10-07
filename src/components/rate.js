import React from 'react'

export function Rate({rate, changeRate}) {
  return (
    <div className="Rate">
      <button 
        className="rate-btn"
        onClick={() => rate > 10 ? changeRate(-5) : null}
      >-</button>
      <input 
        type="number"
        value={rate}
        readOnly 
      />
      <button 
        className="rate-btn"
        onClick={() => rate < 50 ? changeRate(5) : null}
      >+</button>
    </div>
  )
}

