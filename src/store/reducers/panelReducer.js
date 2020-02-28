import {CHANGE_RATE, CHANGE_BALANCE, CHANGE_LAST_PRIZE, START_SPIN, STOP_SPIN_FIRST_COLUMN, STOP_SPIN_SECOND_COLUMN, STOP_SPIN_THIRD_COLUMN} from '../actions/actionsTypes'

const initialState = {
  lastWin: 0,
  balance: 10000,
  rate: 10,
  spin: {
    first: false,
    second: false,
    third: false,
  }
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
    case START_SPIN:
      return {
        ...state,
        spin: {
          first: true,
          second: true,
          third: true
        }
      }
    case STOP_SPIN_FIRST_COLUMN:
      return {
        ...state,
        spin: {
          ...state.spin,
          first: false
        }
      }    
    case STOP_SPIN_SECOND_COLUMN:
      return {
        ...state,
        spin: {
          ...state.spin,
          second: false
        }
      }    
    case STOP_SPIN_THIRD_COLUMN:
      return {
        ...state,
        spin: {
          ...state.spin,
          third: false
        }
      }
    default: 
      return state 
  }
}