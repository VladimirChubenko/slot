import React from 'react'
import {connect} from 'react-redux'
import {spin, changeRate} from '../store/actions/actions'
import {Info} from '../components/info'
import {Rate} from '../components/rate'

function Panel({lastWin, rate, balance, disabled, spin, changeRate}) {
  return (
    <div className="Panel">
      <div className="Info">
        <Info name="Last WIN" value={lastWin}/>
        <Rate rate={rate} changeRate={changeRate}/>
        <Info name="Balance" value={balance}/>
      </div>
      <button 
        className="btn" 
        onClick={() => spin(rate, balance)}
        disabled={disabled ? true : false}
      >SPIN</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    lastWin: state.panel.lastWin,
    rate: state.panel.rate,
    balance: state.panel.balance,
    disabled: state.panel.rotating.third
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    spin: (rate, balance) => dispatch(spin(rate, balance)),
    changeRate: num => dispatch(changeRate(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
