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

  function getRandom() {
    return Math.floor(Math.random() * 6);
  }

  switch(action.type) {
    case UPD_FIELD:
      return {
        ...state,
        slots: {
          first: {...state.slots.first, value: action.payload[getRandom()]},
          second: {...state.slots.second, value: action.payload[getRandom()]},
          third: {...state.slots.third, value: action.payload[getRandom()]},
          fourth: {...state.slots.fourth, value: action.payload[getRandom()]},
          fifth: {...state.slots.fifth, value: action.payload[getRandom()]},
          sixth: {...state.slots.sixth, value: action.payload[getRandom()]},
          seventh: {...state.slots.seventh, value: action.payload[getRandom()]},
          eighth: {...state.slots.eighth, value: action.payload[getRandom()]},
          ninth: {...state.slots.ninth, value: action.payload[getRandom()]}
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
          [action.payload[0]]: {...state.slots[action.payload[0]], winner: false},
          [action.payload[1]]: {...state.slots[action.payload[1]], winner: false},
          [action.payload[2]]: {...state.slots[action.payload[2]], winner: false},
          [action.payload[3]]: {...state.slots[action.payload[3]], winner: false},
          [action.payload[4]]: {...state.slots[action.payload[4]], winner: false},
          [action.payload[5]]: {...state.slots[action.payload[5]], winner: false},
          [action.payload[6]]: {...state.slots[action.payload[6]], winner: false},
          [action.payload[7]]: {...state.slots[action.payload[7]], winner: false},
          [action.payload[8]]: {...state.slots[action.payload[8]], winner: false}
        }
      }
    default: 
      return state
  }
}