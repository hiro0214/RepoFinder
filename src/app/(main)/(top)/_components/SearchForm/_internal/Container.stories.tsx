import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { getRouter } from '@storybook/nextjs-vite/navigation.mock'
import { expect, userEvent, within } from 'storybook/test'
import { Container } from './Container'

const meta = {
  title: 'Pages/Top/SearchForm/Container',
  component: Container
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {}

export const Submit: Story = {
  play: async ({ canvasElement, step }) => {
    const router = getRouter()
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox', { name: 'キーワード' })
    const button = canvas.getByRole('button', { name: '検索' })

    await step('データの入力をする', async () => {
      await userEvent.type(input, 'react')
    })

    await step('ボタンをクリックする', async () => {
      await userEvent.click(button)
    })

    await step('クエリが生成がされ、遷移する', async () => {
      expect(router.push).toHaveBeenCalledWith('?keyword=react&page=1')
    })
  }
}
