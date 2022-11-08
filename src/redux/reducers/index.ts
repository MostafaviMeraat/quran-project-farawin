import { combineReducers } from 'redux'
import { translateReducer } from './reducers'

const allReducers = combineReducers({
  translate: translateReducer,
})

export default allReducers

export type Translate = ReturnType<typeof allReducers>