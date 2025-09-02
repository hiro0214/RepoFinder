'use client'

import clsx from 'clsx'
import styles from './style.module.scss'

type Props = {
  text: string
  classNames?: string
}

/**
 * @name ErrorMessage
 * @example
 * <ErrorMessage text='エラーメッセージがはいります。' />
 */
export const ErrorMessage = (props: Props) => {
  const { text, classNames } = props

  return <p className={clsx(styles.text, classNames)}>{text}</p>
}
