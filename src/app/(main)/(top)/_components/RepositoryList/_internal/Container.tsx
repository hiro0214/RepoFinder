import { getRepositoryList } from '@/services/repository/getRepositoryList'
import { Presentational } from './Presentational'

type Props = {
  keyword?: string
}

/**
 * @name RepositoryList Container
 */
export const Container = async (props: Props) => {
  const { keyword } = props

  if (!keyword) {
    return null
  }

  const data = await getRepositoryList({ keyword })

  return <Presentational items={data.items} />
}
