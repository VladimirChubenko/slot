import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import About from './about'

function Enter(props) {
  const [about, setAbout] = useState(false)

  return (
    <div className="Enter">
      <div 
        className="button"
        onClick={props.start}
      >START</div>
      <div
        className="button_about"
        onClick={() => setAbout(!about)}
      >ABOUT</div>
      <CSSTransition
        in={about}
        timeout={{
          enter: 750,
          exit: 350
        }}
        classNames="info"
      > 
        <About />
      </CSSTransition>
    </div>
  )
}

export default Enter;