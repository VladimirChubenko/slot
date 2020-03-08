import React from 'react'

function Enter(props) {
  return (
    <div className="Enter">
      <div 
        className="button"
        onClick={props.start}
      >START</div>
    </div>
  )
}

export default Enter;