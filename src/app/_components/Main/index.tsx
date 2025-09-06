'use client'

import type { ReactNode } from 'react'
import styles from './style.module.scss'

type Props = {
  children: ReactNode
}

export const Main = (props: Props) => {
  const { children } = props

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>{children}</div>
      </div>
    </main>
  )
}
