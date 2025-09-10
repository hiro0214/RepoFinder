import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner } from '.'

const meta = {
  title: 'Components/Atoms/Spinner',
  component: Spinner
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
