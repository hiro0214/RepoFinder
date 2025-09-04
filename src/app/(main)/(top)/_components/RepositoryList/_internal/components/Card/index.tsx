'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Repository } from '@/services/repository/type'
import styles from './style.module.scss'

type Props = {
  data: Repository
}

export const Card = (props: Props) => {
  const { data } = props

  const { name, full_name, owner } = data

  return (
    <li className={styles.card}>
      <Link href={full_name}>
        <div className={styles.card__inner}>
          {owner && (
            <Image
              src={owner.avatar_url}
              alt={owner.login}
              width={100}
              height={100}
              className={styles.card__img}
            />
          )}

          <p className={styles.card__title}>{name}</p>
        </div>
      </Link>
    </li>
  )
}
