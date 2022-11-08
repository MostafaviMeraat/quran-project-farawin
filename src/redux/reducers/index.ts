import { combineReducers } from 'redux'
import { translateReducer, ghariReducer, fontStyleReducer, fontSizeArabiReducer, fontSizeFarsiReducer } from './reducers'

const allReducers = combineReducers({
  translate: translateReducer,
  ghari: ghariReducer,
  fontStyle: fontStyleReducer,
  fsArabi: fontSizeArabiReducer,
  fsFarsi: fontSizeFarsiReducer,
})

export default allReducers

export type AllReducers = ReturnType<typeof allReducers>