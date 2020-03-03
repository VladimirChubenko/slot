import { PLAY_FIRST_STOP_SOUND, PLAY_SECOND_STOP_SOUND, PLAY_THIRD_STOP_SOUND, RESET_STOP_SOUNDS, PLAY_BONUS_SOUND, STOP_BONUS_SOUND } from "../actions/actionsTypes";

const initialState = {
  bonusSound: false,
  spinSound: false,
  stopFirstColumnSound: false,
  stopSecondColumnSound: false,
  stopThirdColumnSound: false
}

export default function soundReducer(state = initialState, action) {
  
  switch(action.type) {
    case PLAY_FIRST_STOP_SOUND:
      return {
        ...state,
        stopFirstColumnSound: true
      }
    case PLAY_SECOND_STOP_SOUND:
      return {
        ...state,
        stopSecondColumnSound: true
      }
    case PLAY_THIRD_STOP_SOUND:
      return {
        ...state,
        stopThirdColumnSound: true
      }
    case RESET_STOP_SOUNDS:
      return {
        ...state,
        stopFirstColumnSound: false,
        stopSecondColumnSound: false,
        stopThirdColumnSound: false
      }
    case PLAY_BONUS_SOUND:
      return {
        ...state,
        bonusSound: true
      }
    case STOP_BONUS_SOUND:
      return {
        ...state,
        bonusSound: false
      }
    default: 
    return state 
  }
}