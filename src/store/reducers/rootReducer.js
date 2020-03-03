import {combineReducers} from 'redux'
import fieldReducer from './fieldReducer'
import panelReducer from './panelReducer'
import soundReducer from './soundReducer'

export default combineReducers({
  field: fieldReducer,
  panel: panelReducer,
  sound: soundReducer
})