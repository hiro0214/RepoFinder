type Owner = {
  login: string
  id: number
  avatar_url: string
}

export type Repository = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  created_at: string
  updated_at: string
  owner?: Owner
  language: string | null
  stargazers_count: number
  subscribers_count: number
  open_issues_count: number
  forks_count: number
}
