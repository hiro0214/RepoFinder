import { describe, expect, test } from 'vitest'
import { getRepositoryList } from '../getRepositoryList'

describe('[service] getRepositoryList ', () => {
  test('リクエストが成功した時に、正しくデータが返却される。', async () => {
    const params = {
      keyword: 'react',
      page: '1'
    }

    const data = await getRepositoryList(params)

    expect(data.items[0].name).toBe('react')
  })

  test('リクエストが失敗した時に、エラーを投げる。', async () => {
    const params = {
      keyword: '',
      page: ''
    }

    const request = getRepositoryList(params)

    await expect(request).rejects.toThrow('[service: getRepositoryList] Request failed')
  })

  // NOTE: GithubAPIは1000件までしかデータが取得出来ないため。
  test('pageが20以上の時に、リクエストが失敗する。', async () => {
    const params = {
      keyword: 'react',
      page: '21'
    }

    const request = getRepositoryList(params)

    await expect(request).rejects.toThrow('[service: getRepositoryList] Request failed')
  })
})
