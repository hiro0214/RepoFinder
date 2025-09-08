'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export const usePagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    const query = params.toString()

    router.push(`?${query}`)
  }

  return { handlePageChange }
}
