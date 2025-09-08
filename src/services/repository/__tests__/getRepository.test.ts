import { describe, expect, test } from 'vitest'
import { getRepository } from '../getRepository'

describe('[service] getRepository ', () => {
  test('リクエストが成功した時に、正しくデータが返却される。', async () => {
    const params = {
      owner: 'facebook',
      repo: 'react'
    }

    const data = await getRepository(params)

    expect(data.full_name).toBe('facebook/react')
  })

  test('リクエストが失敗した時に、エラーを投げる。', async () => {
    const params = {
      owner: '',
      repo: ''
    }

    const request = getRepository(params)

    await expect(request).rejects.toThrow('[service: getRepository] Request failed')
  })
})
