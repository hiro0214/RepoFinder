import { Suspense } from 'react'
import { Spinner } from '@/components/atoms'
import { Stats } from './_components/Stats'

type Props = {
  params: Promise<{ owner: string; repo: string }>
}

export default async function Page(props: Props) {
  const { params } = props

  const { owner, repo } = await params

  return (
    <Suspense fallback={<Spinner />}>
      <Stats owner={owner} repo={repo} />
    </Suspense>
  )
}
