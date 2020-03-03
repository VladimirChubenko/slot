import React from 'react'
import {connect} from 'react-redux'
import Spin from '../components/sound/spin'
import Stop from '../components/sound/stop'
import Bonus from '../components/sound/bonus'

function Sound(props) {
  return (
    <>
      {props.spin1 ? <Stop /> : null}
      {props.spin2 ? <Stop /> : null}
      {props.spin3 ? <Stop /> : null}
      {props.bonus ? <Bonus /> : null}
      {props.stopSpining ? <Spin /> : null}
    </>
  )
}

function mapStateToProps(state) {
  return {
    spin1: state.sound.stopFirstColumnSound,
    spin2: state.sound.stopSecondColumnSound,
    spin3: state.sound.stopThirdColumnSound,
    bonus: state.sound.bonusSound,
    stopSpining: state.panel.spin.third
  }
}

export default connect(mapStateToProps)(Sound);