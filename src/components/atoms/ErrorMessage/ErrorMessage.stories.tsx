import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ErrorMessage } from '.'

const meta = {
  title: 'Components/Atoms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs']
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {
  args: {
    text: 'エラーメッセージがはいります。'
  }
}
