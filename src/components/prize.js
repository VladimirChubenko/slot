import React from 'react'
import CountUp from 'react-countup'
import {connect} from 'react-redux'
import {hideModalPrize} from '../store/actions/actions'

export function Prize(props) {

  function hide() {
    setTimeout(() => {
      props.stop()
    }, 5000)
  }

  hide() 

  return (
    <div className="Prize">
      <h1>
        <CountUp end={props.prize} />
      </h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    prize: state.panel.lastWin,
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    stop: () => dispatch(hideModalPrize()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prize);