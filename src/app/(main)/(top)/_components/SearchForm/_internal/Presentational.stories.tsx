import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { action } from 'storybook/actions'
import { expect, within } from 'storybook/test'
import { Presentational } from './Presentational'
import { schema } from './schema'

const meta = {
  title: 'Pages/Top/SearchForm/Presentational',
  component: Presentational,
  args: {
    onSubmit: action('onSubmit')
  }
} satisfies Meta<typeof Presentational>

export default meta

type Story = StoryObj<typeof Presentational>

export const Default: Story = {
  render: (args) => {
    const form = useForm({ resolver: zodResolver(schema) })

    return <Presentational {...args} form={form} />
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const form = canvas.getByRole('form', { name: 'search-form' })
    const input = canvas.getByRole('textbox', { name: 'キーワード' })
    const button = canvas.getByRole('button', { name: '検索' })

    await step('フォームのレンダリングができる', async () => {
      expect(form).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      expect(button).toBeInTheDocument()
    })
  }
}

export const Errors: Story = {
  render: (args) => {
    const form = useForm({ resolver: zodResolver(schema) })

    useEffect(() => {
      form.setError('keyword', {
        type: 'manual',
        message: 'キーワードは必須項目です。'
      })
    }, [form.setError])

    return <Presentational {...args} form={form} />
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox', { name: 'キーワード' })
    const errorMessage = canvas.getByText('キーワードは必須項目です。')

    await step('inputがエラー状態になっている', async () => {
      expect(input.getAttribute('data-error')).toBeTruthy()
    })

    await step('エラーメッセージが表示されている', async () => {
      expect(errorMessage).toBeInTheDocument()
    })
  }
}
