import { UPD_FIELD, SET_WIN, RESET_WIN } from "../actions/actionsTypes";

const initialState = {
  allPossibilities: ['quil', 'gamora', 'rocket', 'groot', 'nebula', 'drax', 'mantis', 'yondu'],
  slots: {
    first: {value: 'quil', name: 'first', winner: false},
    second: {value: 'gamora', name: 'second', winner: false},
    third: {value: 'rocket', name: 'third', winner: false},
    fourth: {value: 'groot', name: 'fourth', winner: false},
    fifth: {value: 'nebula', name: 'fifth', winner: false},
    sixth: {value: 'drax', name: 'sixth', winner: false},
    seventh: {value: 'mantis', name: 'seventh', winner: false},
    eighth: {value: 'yondu', name: 'eighth', winner: false},
    ninth: {value: 'quil', name: 'ninth', winner: false}
  },
}

export default function fieldReducer(state = initialState, action) {
  switch(action.type) {
    case UPD_FIELD:
      return {
        ...state,
        slots: {
          first: {...state.slots.first, value: action.payload[0]},
          second: {...state.slots.second, value: action.payload[1]},
          third: {...state.slots.third, value: action.payload[2]},
          fourth: {...state.slots.fourth, value: action.payload[3]},
          fifth: {...state.slots.fifth, value: action.payload[4]},
          sixth: {...state.slots.sixth, value: action.payload[5]},
          seventh: {...state.slots.seventh, value: action.payload[6]},
          eighth: {...state.slots.eighth, value: action.payload[7]},
          ninth: {...state.slots.ninth, value: action.payload[8]}
        }
      }
    case SET_WIN: 
      return {
        ...state,
        slots: {
          ...state.slots,
          [action.payload[0]]: {...state.slots[action.payload[0]], winner: true},
          [action.payload[1]]: {...state.slots[action.payload[1]], winner: true},
          [action.payload[2]]: {...state.slots[action.payload[2]], winner: true}
        }
      }
    case RESET_WIN: 
      return {
        ...state,
        slots: {
          ...state.slots,
          first: {...state.slots.first, winner: false},
          second: {...state.slots.second, winner: false},
          third: {...state.slots.third, winner: false},
          fourth: {...state.slots.fourth, winner: false},
          fifth: {...state.slots.fifth, winner: false},
          sixth: {...state.slots.sixth, winner: false},
          seventh: {...state.slots.seventh, winner: false},
          eighth: {...state.slots.eighth, winner: false},
          ninth: {...state.slots.ninth, winner: false}
        }
      }
    default: 
      return state
  }
}