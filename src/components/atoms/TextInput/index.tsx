'use client'

import type { JSX } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import styles from './style.module.scss'

type ElementProps = JSX.IntrinsicElements['input']

type Props = {
  register: UseFormRegisterReturn
  error?: boolean
} & ElementProps

/**
 * @name TextInput
 * @example
 * <TextInput
 *   register={register('name')}
 *   placeholder='名前を入力してください'
 *   error
 *   disabled
 * />
 */
export const TextInput = (_props: Props) => {
  const { register, placeholder = '入力してください', error, ...props } = _props

  return (
    <input
      id={register.name}
      type='text'
      {...register}
      placeholder={placeholder}
      className={styles.input}
      data-error={error || undefined}
      {...props}
    />
  )
}
