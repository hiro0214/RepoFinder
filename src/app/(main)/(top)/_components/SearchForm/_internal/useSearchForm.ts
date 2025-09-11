'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type FormType, schema } from './schema'

type Props = {
  keyword?: string
}

export const useSearchForm = (props: Props) => {
  const { keyword } = props

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    mode: 'onChange',
    values: keyword ? { keyword } : undefined,
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormType> = (formData) => {
    const { keyword } = formData

    const query = `keyword=${encodeURIComponent(keyword)}&page=1`

    startTransition(() => {
      router.push(`?${query}`)
    })
  }

  return { isPending, form, onSubmit }
}
