import React from 'react'
import {connect} from 'react-redux'
import {Slot} from '../components/slot'
import Prize from '../components/prize'

function Field(props) {
  return (
    <div className="field">
      {props.win ? <Prize /> : null }
      <Slot slot={props.slots.first} spin={props.spin.first}/>
      <Slot slot={props.slots.second} spin={props.spin.second}/>
      <Slot slot={props.slots.third} spin={props.spin.third}/>
      <Slot slot={props.slots.fourth} spin={props.spin.first}/>
      <Slot slot={props.slots.fifth} spin={props.spin.second}/>
      <Slot slot={props.slots.sixth} spin={props.spin.third}/>
      <Slot slot={props.slots.seventh} spin={props.spin.first}/>
      <Slot slot={props.slots.eighth} spin={props.spin.second}/>
      <Slot slot={props.slots.ninth} spin={props.spin.third}/>
  </div>
  )
}


function mapStateToProps(state) {
  return {
    slots: state.field.slots,
    spin: state.panel.spin,
    win: state.panel.win
  }
}

export default connect(mapStateToProps)(Field);