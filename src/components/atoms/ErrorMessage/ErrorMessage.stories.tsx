import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ErrorMessage } from '.'

const meta = {
  title: 'Components/Atoms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  args: {
    text: 'エラーメッセージがはいります。'
  }
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {}
