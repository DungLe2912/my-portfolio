export interface PersonalDetails {
  logo: string
}

export interface IRepoData {
  html_url: string
  name: string
  description: string
  open_issues: number
  watchers: number
  forks: number
  updated_at: Date | string
}

export interface ICompany {
  name: string
  logo_url: string
}

export interface IWork {
  company: string
  position: string
  startDate: string
  endDate?: string
  responsibilities: string[]
}
