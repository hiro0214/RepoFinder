'use client'

import type { JSX } from 'react'
import styles from './style.module.scss'

type ElementProps = JSX.IntrinsicElements['button']

type SizeType = 'sm' | 'md' | 'lg'

type ColorType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'

type VariantType = 'contained' | 'outlined' | 'ghost'

type Props = {
  label: string
  size?: SizeType
  color?: ColorType
  variant?: VariantType
} & ElementProps

export const Button = (_props: Props) => {
  const {
    type = 'button',
    label,
    size = 'md',
    color = 'primary',
    variant = 'contained',
    ...props
  } = _props

  const classNames = [
    styles.button,
    styles[size],
    styles[`${color}-${variant}`],
    props.className
  ].join(' ')

  return (
    <button type={type} className={classNames} {...props}>
      {label}
    </button>
  )
}
