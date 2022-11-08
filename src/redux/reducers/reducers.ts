import { ACTIONS } from '../actions/action'
import { Action, StateTranslate } from '../../types'

const initialTranslate: StateTranslate = 'ansarian'
const initialGhari: StateTranslate = 'Menshawi_32kbps'

export const translateReducer = (state = initialTranslate, action: Action) => {
  switch (action.type) {
    case ACTIONS.CHANGETRANSLATE:
      return state = action.payload
    default:
      return state
  }
}

export const ghariReducer = (state = initialGhari, action: Action) => {
  switch (action.type) {
    case ACTIONS.CHANGEGHARI:
      return state = action.payload
    default:
      return state
  }
}