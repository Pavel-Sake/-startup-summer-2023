export interface ServerResponseVacancy {
  canEdit: boolean
  is_closed: boolean
  id: number
  id_client: number
  payment_from: number
  payment_to: number
  date_pub_to: number
  date_archived: number
  date_published: number
  address: any
  profession: string
  work: any
  compensation: any
  candidat: string
  metro: Metro[]
  currency: string
  vacancyRichText: string
  covid_vaccination_requirement: CovidVaccinationRequirement
  moveable: boolean
  agreement: boolean
  anonymous: boolean
  is_archive: boolean
  is_storage: boolean
  type_of_work: TypeOfWork
  place_of_work: PlaceOfWork
  education: Education
  experience: Experience
  maritalstatus: Maritalstatus
  children: Children
  client: Client
  languages: any[]
  driving_licence: any[]
  catalogues: Catalogue[]
  agency: Agency
  town: Town2
  already_sent_on_vacancy: boolean
  rejected: boolean
  response_info: any[]
  phone: string
  phones: Phone[]
  fax: any
  faxes: any
  client_logo: string
  highlight: boolean
  age_from: number
  age_to: number
  gender: Gender
  firm_name: string
  firm_activity: string
  link: string
  latitude: any
  longitude: any
}

export interface Metro {
  id: number
  title: string
  id_metro_line: number
}

export interface CovidVaccinationRequirement {
  id: number
  title: string
}

export interface TypeOfWork {
  id: number
  title: string
}

export interface PlaceOfWork {
  id: number
  title: string
}

export interface Education {
  id: number
  title: string
}

export interface Experience {
  id: number
  title: string
}

export interface Maritalstatus {
  id: number
  title: string
}

export interface Children {
  id: number
  title: string
}

export interface Client {
  id: number
  title: string
  link: string
  industry: any[]
  description: string
  vacancy_count: number
  staff_count: string
  client_logo: string
  address: any
  addresses: any[]
  url: string
  short_reg: boolean
  is_blocked: boolean
  registered_date: number
  town: Town
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

export interface Agency {
  id: number
  title: string
}

export interface Town2 {
  id: number
  title: string
  declension: string
  hasMetro: boolean
  genitive: string
}

export interface Phone {
  number: string
  additionalNumber: any
}

export interface Gender {
  id: number
  title: string
}