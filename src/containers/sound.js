import React from 'react'
import {connect} from 'react-redux'
import Spin from '../components/sound/spin'
import Stop from '../components/sound/stop'
import Bonus from '../components/sound/bonus'

function Sound({spin1, spin2, spin3, bonus, stopSpining}) {
  return (
    <>
      {spin1 ? <Stop /> : null}
      {spin2 ? <Stop /> : null}
      {spin3 ? <Stop /> : null}
      {bonus ? <Bonus /> : null}
      {stopSpining ? <Spin /> : null}
    </>
  )
}

function mapStateToProps(state) {
  return {
    spin1: state.sound.stopFirstColumnSound,
    spin2: state.sound.stopSecondColumnSound,
    spin3: state.sound.stopThirdColumnSound,
    bonus: state.sound.bonusSound,
    stopSpining: state.panel.rotating.third
  }
}

export default connect(mapStateToProps)(Sound);