type Owner = {
  login: string
  id: number
  avatar_url: string
}

export type Repository = {
  id: number
  name: string
  full_name: string
  owner: Owner
  language: string
  stargazers_count: number
  watchers_count: number
  open_issues_count: number
  forks_count: number
}
