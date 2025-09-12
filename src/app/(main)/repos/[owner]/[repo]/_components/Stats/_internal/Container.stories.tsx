import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { getRepository } from '@/services/repository/getRepository'
import type { Container } from './Container'
import { Presentational } from './Presentational'

const meta = {
  title: 'Pages/repos/Stats/Container',
  loaders: [
    async () => ({
      data: await getRepository({ owner: 'facebook', repo: 'react' })
    })
  ]
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  render: (_, { loaded: { data } }) => {
    return <Presentational data={data} />
  }
}
