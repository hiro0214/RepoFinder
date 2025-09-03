'use client'

import styles from './style.module.scss'

/**
 * @name Spinner
 * @example
 * <Spinner />
 */
export const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  )
}
