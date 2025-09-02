import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { TextField } from './TextField'

const meta = {
  title: 'Components/Molucules/TextField',
  component: TextField,
  tags: ['autodocs']
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: () => {
    const schema = z.object({
      name: z.string().trim().min(1, '名前を入力してください。')
    })

    const {
      register,
      formState: { errors }
    } = useForm({
      mode: 'onChange',
      resolver: zodResolver(schema)
    })

    return (
      <TextField
        label='名前'
        annotation='フルネームを入力してください。'
        register={register('name')}
        error={errors.name?.message}
      />
    )
  }
}
