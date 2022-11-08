import { ACTIONS } from '../actions/action'
import { Action, StateTranslate } from '../../types'

const initialTranslate: StateTranslate = 'ansarian'

export const translateReducer = (state = initialTranslate, action: Action) => {
  switch (action.type) {
    case ACTIONS.CHANGETRANSLATE:
      return state = action.payload
    default:
      return state
  }
}