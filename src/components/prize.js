import React, {useEffect} from 'react'
import CountUp from 'react-countup'
import {connect} from 'react-redux'
import {hideModalPrize, stopBonusSound} from '../store/actions/actions'

export function Prize({stop, prize, stopSound}) {

  useEffect(() => {
    setTimeout(() => {
      stop()
    }, 5000)
  }, [stop])

  return (
    <div className="Prize">
      <h1>
        <CountUp 
          end={prize} 
          onEnd={stopSound}
        />
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
    stopSound: () => dispatch(stopBonusSound())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prize);