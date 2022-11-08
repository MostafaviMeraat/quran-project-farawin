import { Actions } from '../../types'

export const ACTIONS: Actions = {
  CHANGETRANSLATE: 'changeTranslate',
  CHANGEGHARI: 'changeGhari',
}

export const handleTranslate = (name: string) => {
  return {
    type: ACTIONS.CHANGETRANSLATE,
    payload: name
  }
}

export const handleGhari = (name: string) => {
  return {
    type: ACTIONS.CHANGEGHARI,
    payload: name
  }
}