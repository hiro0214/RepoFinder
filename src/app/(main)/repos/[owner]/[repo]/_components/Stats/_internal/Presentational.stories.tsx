import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Presentational } from './Presentational'

const meta = {
  title: 'Pages/Repos/Stats/Presentational',
  component: Presentational
} satisfies Meta<typeof Presentational>

export default meta

type Story = StoryObj<typeof Presentational>

export const Default: Story = {
  args: {
    data: {
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
    }
  }
}
