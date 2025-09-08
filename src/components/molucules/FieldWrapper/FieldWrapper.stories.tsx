import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FieldWrapper } from '.'

const meta = {
  title: 'Components/Molucules/FieldWrapper',
  component: FieldWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof FieldWrapper>

export default meta

type Story = StoryObj<typeof FieldWrapper>

export const Default: Story = {
  args: {
    id: 'foo',
    label: 'タイトル',
    annotation: '注釈がはいります。',
    error: 'エラーメッセージがはいります。',
    children: <div style={{ height: '50px', backgroundColor: '#ccc' }} />
  }
}
