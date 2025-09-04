import type { Repository } from './type'

type Request = {
  owner: string
  repo: string
}

type Response = Repository

export const getRepository = async (props: Request) => {
  const { owner, repo } = props

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
  const data: Response = await res.json()

  return data
}
