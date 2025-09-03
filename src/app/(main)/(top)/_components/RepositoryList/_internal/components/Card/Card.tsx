'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Repository } from '@/services/repository/type'
import styles from './style.module.scss'

type Props = {
  item: Repository
}

export const Card = (props: Props) => {
  const { item } = props

  return (
    <li className={styles.card}>
      <Link href={item.full_name}>
        <div className={styles.card__inner}>
          <Image
            src={item.owner.avatar_url}
            alt={item.owner.login}
            width={100}
            height={100}
            className={styles.card__img}
          />
          <p className={styles.card__title}>{item.name}</p>
        </div>
      </Link>
    </li>
  )
}
