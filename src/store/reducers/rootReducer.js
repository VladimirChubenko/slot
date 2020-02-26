import {combineReducers} from 'redux'
import fieldReducer from './fieldReducer'
import panelReducer from './panelReducer'

export default combineReducers({
  field: fieldReducer,
  panel: panelReducer
})