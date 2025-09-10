import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect, within } from 'storybook/test'
import { Presentational } from './Presentational'

const meta = {
  title: 'Pages/Top/RepositoryList/Presentational',
  component: Presentational
} satisfies Meta<typeof Presentational>

export default meta

type Story = StoryObj<typeof Presentational>

export const Default: Story = {
  args: {
    items: [
      {
        id: 12345,
        name: 'dummy1',
        full_name: 'dummy1',
        html_url: '#',
        description: 'description1',
        created_at: '2025/09/11',
        updated_at: '2025/09/11',
        owner: {
          login: 'username1',
          id: 123,
          avatar_url: 'https://placehold.jp/100x100.png'
        },
        language: 'JavaScript',
        stargazers_count: 100,
        subscribers_count: 200,
        open_issues_count: 300,
        forks_count: 400
      },
      {
        id: 23456,
        name: 'dummy2',
        full_name: 'dummy2',
        html_url: '#',
        description: 'description2',
        created_at: '2025/09/12',
        updated_at: '2025/09/12',
        owner: {
          login: 'username2',
          id: 456,
          avatar_url: 'https://placehold.jp/100x100.png'
        },
        language: 'TypeScript',
        stargazers_count: 100,
        subscribers_count: 200,
        open_issues_count: 300,
        forks_count: 400
      },
      {
        id: 34567,
        name: 'dummy3',
        full_name: 'dummy3',
        html_url: '#',
        description: 'description3',
        created_at: '2025/09/13',
        updated_at: '2025/09/13',
        owner: {
          login: 'username3',
          id: 789,
          avatar_url: 'https://placehold.jp/100x100.png'
        },
        language: 'Ruby',
        stargazers_count: 100,
        subscribers_count: 200,
        open_issues_count: 300,
        forks_count: 400
      }
    ],
    totalCount: 300,
    page: 1
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const list = canvas.getByRole('list', { name: 'repository-list' })
    const pagination = canvas.getByRole('list', { name: 'pagination' })

    await step('リストが表示されている', async () => {
      expect(list).toBeInTheDocument()
    })

    await step('ページネーションが表示されている', async () => {
      expect(pagination).toBeInTheDocument()
    })
  }
}

export const Empty: Story = {
  args: {
    items: [],
    totalCount: 0,
    page: 1
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const message = canvas.getByText('検索結果がありませんでした。')

    await step('ページネーションが表示されていない', async () => {
      expect(message).toBeInTheDocument()
    })
  }
}
