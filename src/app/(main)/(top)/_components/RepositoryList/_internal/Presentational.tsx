'use client'

import type { Repository } from '@/services/repository/type'
import { Card } from './components/Card/Card'
import styles from './style.module.scss'

type Props = {
  items: Repository[]
}

/**
 * @name RepositoryList Presentational
 */
export const Presentational = (props: Props) => {
  const { items } = props

  if (!items.length) {
    return <p>検索結果がありませんでした。</p>
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  )
}
