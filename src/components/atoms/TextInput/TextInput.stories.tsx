import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useForm } from 'react-hook-form'
import { TextInput } from '.'

const meta = {
  title: 'Components/Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs']
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  render: () => {
    const { register } = useForm<{ value1: string; value2: string; value3: string }>()

    return (
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <div>
          <p>default</p>
          <TextInput register={register('value1')} />
        </div>
        <div>
          <p>error</p>
          <TextInput register={register('value2')} error />
        </div>
        <div>
          <p>disabled</p>
          <TextInput register={register('value3')} disabled />
        </div>
      </div>
    )
  }
}
