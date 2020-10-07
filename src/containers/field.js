import React from 'react'
import {connect} from 'react-redux'
import {Slot} from '../components/slot'
import Prize from '../components/prize'

function Field({slots, rotating, win}) {
  return (
    <div className="field">
      {win ? <Prize /> : null }
      <Slot slot={slots.first} rotating={rotating.first}/>
      <Slot slot={slots.second} rotating={rotating.second}/>
      <Slot slot={slots.third} rotating={rotating.third}/>
      <Slot slot={slots.fourth} rotating={rotating.first}/>
      <Slot slot={slots.fifth} rotating={rotating.second}/>
      <Slot slot={slots.sixth} rotating={rotating.third}/>
      <Slot slot={slots.seventh} rotating={rotating.first}/>
      <Slot slot={slots.eighth} rotating={rotating.second}/>
      <Slot slot={slots.ninth} rotating={rotating.third}/>
  </div>
  )
}


function mapStateToProps(state) {
  return {
    slots: state.field.slots,
    rotating: state.panel.rotating,
    win: state.panel.win
  }
}

export default connect(mapStateToProps)(Field);