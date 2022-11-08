export type Aye = {
  aye: string[]
  translateAnsarian: string[]
  translateMakarem: string[]
  ayeNumber: number[]
  sure: string
  type: string
  suraNumber: number
}

export type ArrAye = [{
  aye: string[]
  translateAnsarian: string[]
  translateMakarem: string[]
  ayeNumber: number[]
  sure: string
  type: string
  suraNumber: number
}]

export type AnyArr = any[]

export type MyObject = {
  type: string,
  sure: string
}

export type Actions = {
  CHANGETRANSLATE: string
  CHANGEGHARI: string
  CHANGEFONTSTYLE: string
  CHANGEFONTSIZEARABI: string
  CHANGEFONTSIZEFARSI: string
}

export type Action = {
  type: string
  payload: any
}

export type Last = {
  sure: string
  aye: string
}
