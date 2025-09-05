import { createHandlers } from '..'
import type { Repository } from './type'

type Request = {
  keyword: string
}

type Response = {
  incomplete_results: boolean
  items: Repository[]
  total_count: number
}

/**
 * @description リポジトリの一覧を取得する
 * @endpoint GET https://api.github.com/search/repositories?q={keyword}
 * @param keyword {string} キーワード
 */
export const getRepositoryList = async (props: Request): Promise<Response> => {
  const { keyword } = props

  const { succeed, failed } = createHandlers('getRepositoryList')

  return fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(succeed)
    .catch(failed)
}
