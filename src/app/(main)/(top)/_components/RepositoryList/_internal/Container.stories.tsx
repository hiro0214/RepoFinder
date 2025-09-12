import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { getRepositoryList } from '@/services/repository/getRepositoryList'
import type { Container } from './Container'
import { Presentational } from './Presentational'

const meta = {
  title: 'Pages/Top/RepositoryList/Container',
  loaders: [
    async () => ({
      data: await getRepositoryList({ keyword: 'react', page: '1' })
    })
  ]
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  render: (_, { loaded: { data } }) => {
    return <Presentational {...data} page={1} />
  }
}
