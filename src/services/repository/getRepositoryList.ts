import type { Repository } from './type'

type Request = {
  keyword: string
}

type Response = {
  incomplete_results: boolean
  items: Repository[]
  total_count: number
}

export const getRepositoryList = async (props: Request) => {
  const { keyword } = props

  const res = await fetch(`https://api.github.com/search/repositories?q=${keyword}`)
  const data: Response = await res.json()

  return data
}
