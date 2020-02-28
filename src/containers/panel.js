import React from 'react'
import {connect} from 'react-redux'
import {spin, changeRate} from '../store/actions/actions'
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
      <button className="btn" onClick={() => props.spin(props.rate, props.balance)}>SPIN</button>
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
    spin: (rate, balance) => dispatch(spin(rate, balance)),
    changeRate: (num) => dispatch(changeRate(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
