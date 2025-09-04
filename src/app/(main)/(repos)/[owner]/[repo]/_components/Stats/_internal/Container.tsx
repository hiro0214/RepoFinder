import { getRepository } from '@/services/repository/getRepository'
import { Presentational } from './Presentational'

type Props = {
  owner: string
  repo: string
}

/**
 * @name Stats Container
 */
export const Container = async (props: Props) => {
  const { owner, repo } = props

  const data = await getRepository({ owner, repo })

  return <Presentational data={data} />
}
