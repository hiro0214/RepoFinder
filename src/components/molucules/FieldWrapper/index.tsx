'use client'

import type { ReactNode } from 'react'
import { ErrorMessage } from '@/components/atoms'
import styles from './style.module.scss'

type Props = {
  id: string
  label: string
  annotation?: string
  error?: string
  children: ReactNode
}

/**
 * @name FieldWrapper
 * @example
 * <FieldWrapper
 *   id='foo'
 *   label='タイトル'
 *   annotation='注釈がはいります。'
 *   error='エラーメッセージがはいります。'
 * >
 *   <TextInput /> // any input components
 * </FieldWrapper>
 */
export const FieldWrapper = (props: Props) => {
  const { id, label, annotation, error, children } = props

  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {annotation && <p className={styles.annotation}>{annotation}</p>}
      {children}
      {error && <ErrorMessage text={error} classNames={styles['error-message']} />}
    </div>
  )
}
