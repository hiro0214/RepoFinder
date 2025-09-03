'use client'

import type { ReactNode } from 'react'
import styles from './style.module.scss'

type Props = {
  children: ReactNode
}

export const Contents = (props: Props) => {
  const { children } = props

  return <main className={styles.main}>{children}</main>
}
