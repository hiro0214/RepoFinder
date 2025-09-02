'use client'

import styles from './style.module.scss'

type Props = {
  text: string
}

/**
 * @name ErrorMessage
 * @example
 * <ErrorMessage text='エラーメッセージがはいります。' />
 */
export const ErrorMessage = (props: Props) => {
  const { text } = props

  return <p className={styles.text}>{text}</p>
}
