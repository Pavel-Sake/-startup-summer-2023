export interface ServerResponseVacancy {
  id: number
  payment_from: number
  profession: string
  vacancyRichText: string
  type_of_work: TypeOfWork
  town: Town
}

export interface ServerResponseVacancies {
  objects: ServerResponseVacancy[]
  total: number
  more: boolean
  subscription_id: number
  subscription_active: boolean
}

export interface TypeOfWork {
  id: number
  title: string
}

export interface Town {
  id: number
  title: string
  declension: string
  hasMetro: boolean
  genitive: string
}

export interface Catalogue {
  id: number
  title: string
  key: number
  positions: Position[]
}

export interface Position {
  id: number
  title: string
  key: number
}
