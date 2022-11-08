import { combineReducers } from 'redux'
import { translateReducer, ghariReducer } from './reducers'

const allReducers = combineReducers({
  translate: translateReducer,
  ghari: ghariReducer,
})

export default allReducers

export type AllReducers = ReturnType<typeof allReducers>