import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FieldWrapper } from './FieldWrapper'

const meta = {
  title: 'Components/Molucules/FieldWrapper',
  component: FieldWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof FieldWrapper>

export default meta

type Story = StoryObj<typeof FieldWrapper>

export const Default: Story = {
  args: {
    id: 'name',
    label: '名前',
    annotation: '10文字以内で入力してください。',
    error: '名前を入力してください。',
    children: <div style={{ height: '50px', backgroundColor: '#ccc' }} />
  }
}
