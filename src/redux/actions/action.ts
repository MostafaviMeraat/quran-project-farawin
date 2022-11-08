import { Actions } from '../../types'

export const ACTIONS: Actions = {
  CHANGETRANSLATE: 'changeTranslate',
}

export const handleTranslate = (name: string) => {
  return {
    type: ACTIONS.CHANGETRANSLATE,
    payload: name
  }
}