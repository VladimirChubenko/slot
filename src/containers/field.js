import React from 'react'
import {connect} from 'react-redux'
import {Slot} from '../components/slot'

function Field(props) {
  return (
    <div className="field">
      <Slot slot={props.slots.first} />
      <Slot slot={props.slots.second} />
      <Slot slot={props.slots.third} />
      <Slot slot={props.slots.fourth} />
      <Slot slot={props.slots.fifth} />
      <Slot slot={props.slots.sixth} />
      <Slot slot={props.slots.seventh} />
      <Slot slot={props.slots.eighth} />
      <Slot slot={props.slots.ninth} />
  </div>
  )
}


function mapStateToProps(state) {
  return {
    slots: state.field.slots
  }
}

export default connect(mapStateToProps)(Field);