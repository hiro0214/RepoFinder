import { PER_PAGE } from '@/utils/configs'
import { createHandlers } from '..'
import type { Repository } from './type'

type Request = {
  keyword: string
  page: string
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
 * @param page {string} ページ
 */
export const getRepositoryList = async (props: Request): Promise<Response> => {
  const { keyword, page } = props

  const { succeed, failed } = createHandlers('getRepositoryList')

  const url = `https://api.github.com/search/repositories?q=${keyword}&per_page=${PER_PAGE}&page=${page}`

  return fetch(url).then(succeed).catch(failed)
}
