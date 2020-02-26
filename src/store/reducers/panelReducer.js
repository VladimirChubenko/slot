import {CHANGE_RATE, CHANGE_BALANCE, CHANGE_LAST_PRIZE} from '../actions/actionsTypes'

const initialState = {
  lastWin: 0,
  balance: 10000,
  rate: 10
}

export default function panelReducer(state = initialState, action) {

  switch(action.type) {
    case CHANGE_RATE:
      return {
        ...state,
        rate: state.rate + action.payload
      }
    case CHANGE_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case CHANGE_LAST_PRIZE:
      return {
        ...state,
        lastWin: action.payload
      }
    default: 
      return state 
  }
}