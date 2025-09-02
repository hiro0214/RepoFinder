'use client'

import type { JSX } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { TextInput } from '@/components/atoms'
import { FieldWrapper } from '../FieldWrapper/FieldWrapper'

type ElementProps = JSX.IntrinsicElements['input']

type Props = {
  label: string
  annotation?: string
  register: UseFormRegisterReturn
  error?: string
} & ElementProps

/**
 * @name TextField
 * @example
 * <TextField
 *   label='名前'
 *   annotation='フルネームを入力してください。'
 *   register={register('name')}
 *   error='名前を入力してください。'
 * />
 */
export const TextField = (_props: Props) => {
  const { label, annotation, register, error, ...props } = _props

  return (
    <FieldWrapper id={register.name} label={label} annotation={annotation} error={error}>
      <TextInput register={register} error={!!error} {...props} />
    </FieldWrapper>
  )
}
