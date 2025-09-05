import { createHandlers } from '..'
import type { Repository } from './type'

type Request = {
  owner: string
  repo: string
}

type Response = Repository

/**
 * @description リポジトリの詳細を取得する
 * @endpoint GET https://api.github.com/repos/{owner}/{repo}
 * @param owner {string} オーナー名
 * @param repo {string} リポジトリ名
 */
export const getRepository = async (props: Request): Promise<Response> => {
  const { owner, repo } = props

  const { succeed, failed } = createHandlers('getRepository')

  return fetch(`https://api.github.com/repos/${owner}/${repo}`).then(succeed).catch(failed)
}
