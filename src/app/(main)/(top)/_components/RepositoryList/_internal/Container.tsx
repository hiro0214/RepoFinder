import { getRepositoryList } from '@/services/repository/getRepositoryList'
import { Presentational } from './Presentational'

type Props = {
  keyword?: string
}
/**
 * @name RepositoryList Container
 * @description リポジトリの一覧を表示するコンテナ
 * @fetch getRepositoryList() - services/getRepositoryList
 */
export const Container = async (props: Props) => {
  const { keyword } = props

  if (!keyword) {
    return null
  }

  const data = await getRepositoryList({ keyword })

  return <Presentational items={data.items} />
}
