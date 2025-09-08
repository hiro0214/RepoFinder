import { getRepositoryList } from '@/services/repository/getRepositoryList'
import { Presentational } from './Presentational'

type Props = {
  keyword?: string
  page?: string
}
/**
 * @name RepositoryList Container
 * @description リポジトリの一覧を表示するコンテナ
 * @fetch getRepositoryList() - services/getRepositoryList
 */
export const Container = async (props: Props) => {
  const { keyword, page } = props

  if (!keyword || !page) {
    return null
  }

  const data = await getRepositoryList({ keyword, page })

  return <Presentational items={data.items} totalCount={data.total_count} page={Number(page)} />
}
