import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TextInput } from './TextInput'

const meta = {
  title: 'Components/Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs']
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <div>
          <p>default</p>
          <TextInput />
        </div>
        <div>
          <p>error</p>
          <TextInput error />
        </div>
        <div>
          <p>disabled</p>
          <TextInput disabled />
        </div>
      </div>
    )
  }
}
