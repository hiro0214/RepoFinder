'use client'

import { Presentational } from './Presentational'
import { useSearchForm } from './useSearchForm'

type Props = {
  keyword?: string
}

/**
 * @name SearchForm Container
 * @description 検索フォームのコンテナ
 */
export const Container = (props: Props) => {
  const { keyword } = props

  const { form, onSubmit } = useSearchForm({ keyword })

  return <Presentational form={form} onSubmit={onSubmit} />
}
