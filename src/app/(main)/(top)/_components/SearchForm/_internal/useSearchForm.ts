'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type FormType, schema } from './schema'

type Props = {
  keyword?: string
}

export const useSearchForm = (props: Props) => {
  const { keyword } = props

  const router = useRouter()

  const form = useForm({
    mode: 'onChange',
    values: keyword ? { keyword } : undefined,
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormType> = (formData) => {
    const { keyword } = formData

    const query = `keyword=${encodeURIComponent(keyword)}&page=1`

    router.push(`?${query}`)
  }

  return { form, onSubmit }
}
