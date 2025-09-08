'use client'

import { Pagination } from '@/components/molucules'
import type { Repository } from '@/services/repository/type'
import { usePagination } from '@/utils/hooks/usePagination'
import { Card } from './components/Card'
import styles from './style.module.scss'

type Props = {
  items: Repository[]
  totalCount: number
  page: number
}

/**
 * @name RepositoryList Presentational
 */
export const Presentational = (props: Props) => {
  const { items, totalCount, page } = props

  const { handlePageChange } = usePagination()

  if (!items.length) {
    return <p>検索結果がありませんでした。</p>
  }

  return (
    <>
      <ul className={styles.list}>
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </ul>

      <Pagination currentPage={page} totalCount={totalCount} onPageChange={handlePageChange} />
    </>
  )
}
