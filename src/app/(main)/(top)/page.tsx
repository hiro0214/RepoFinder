import { Suspense } from 'react'
import { Spinner } from '@/components/atoms'
import { RepositoryList } from './_components/RepositoryList'
import { SearchForm } from './_components/SearchForm'
import styles from './style.module.scss'

type Props = {
  searchParams: Promise<{ [key: string]: string }>
}

export default async function Page(props: Props) {
  const { searchParams } = props

  const { keyword } = await searchParams

  return (
    <div className={styles.wrapper}>
      <SearchForm keyword={keyword} />

      <Suspense fallback={<Spinner />}>
        <RepositoryList keyword={keyword} />
      </Suspense>
    </div>
  )
}
