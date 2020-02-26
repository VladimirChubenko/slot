import React from 'react'
import {connect} from 'react-redux'
import {spin, changeRate, resetWinnersBeforeSpin} from '../store/actions/actions'
import {Info} from '../components/info'
import {Rate} from '../components/rate'

function Panel(props) {
  return (
    <div className="Panel">
      <div className="Info">
        <Info name="Last WIN" value={props.lastWin}/>
        <Rate rate={props.rate} changeRate={props.changeRate}/>
        <Info name="Balance" value={props.balance}/>
      </div>
      <button className="btn" onClick={() => props.spin(props.allPossibilities, props.rate, props.balance)}>SPIN</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    allPossibilities: state.field.allPossibilities,
    lastWin: state.panel.lastWin,
    rate: state.panel.rate,
    balance: state.panel.balance
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    spin: (allPossibilities, rate, balance) => dispatch(spin(allPossibilities, rate, balance)),
    changeRate: (num) => dispatch(changeRate(num)),
    resetWinnersBeforeSpin: () => dispatch(resetWinnersBeforeSpin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
