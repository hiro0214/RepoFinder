'use client'

import type { JSX } from 'react'
import styles from './style.module.scss'

type ElementProps = JSX.IntrinsicElements['input']

type Props = {
  error?: boolean
} & ElementProps

/**
 * @name TextInput
 * @example
 * <TextInput
 *   id='name'
 *   value='foo'
 *   onChange={(e) => onChange(e.target.value)}
 *   placeholder='名前を入力してください'
 *   error
 *   disabled
 * />
 */
export const TextInput = (_props: Props) => {
  const { placeholder = '入力してください', error, ...props } = _props

  return (
    <input
      type='text'
      placeholder={placeholder}
      className={styles.input}
      data-error={error || undefined}
      {...props}
    />
  )
}
