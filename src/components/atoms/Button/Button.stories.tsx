import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '.'

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'ボタン',
    onClick: () => console.log('clicked')
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Size: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <div>
          <p>sm</p>
          <Button {...args} size='sm' />
        </div>
        <div>
          <p>md</p>
          <Button {...args} size='md' />
        </div>
        <div>
          <p>lg</p>
          <Button {...args} size='lg' />
        </div>
      </div>
    )
  }
}

export const Color: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>primary contained</p>
            <Button {...args} label='送信' color='primary' variant='contained' />
          </div>
          <div>
            <p>primary outlined</p>
            <Button {...args} label='送信' color='primary' variant='outlined' />
          </div>
          <div>
            <p>primary ghost</p>
            <Button {...args} label='送信' color='primary' variant='ghost' />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>secondary contained</p>
            <Button {...args} label='キャンセル' color='secondary' variant='contained' />
          </div>
          <div>
            <p>secondary outlined</p>
            <Button {...args} label='キャンセル' color='secondary' variant='outlined' />
          </div>
          <div>
            <p>secondary ghost</p>
            <Button {...args} label='キャンセル' color='secondary' variant='ghost' />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>danger contained</p>
            <Button {...args} label='削除' color='danger' variant='contained' />
          </div>
          <div>
            <p>danger outlined</p>
            <Button {...args} label='削除' color='danger' variant='outlined' />
          </div>
          <div>
            <p>danger ghost</p>
            <Button {...args} label='削除' color='danger' variant='ghost' />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>success contained</p>
            <Button {...args} label='追加' color='success' variant='contained' />
          </div>
          <div>
            <p>success outlined</p>
            <Button {...args} label='追加' color='success' variant='outlined' />
          </div>
          <div>
            <p>success ghost</p>
            <Button {...args} label='追加' color='success' variant='ghost' />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>warning contained</p>
            <Button {...args} label='一時停止' color='warning' variant='contained' />
          </div>
          <div>
            <p>warning outlined</p>
            <Button {...args} label='一時停止' color='warning' variant='outlined' />
          </div>
          <div>
            <p>warning ghost</p>
            <Button {...args} label='一時停止' color='warning' variant='ghost' />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <div>
            <p>info contained</p>
            <Button {...args} label='もっと見る' color='info' variant='contained' />
          </div>
          <div>
            <p>info outlined</p>
            <Button {...args} label='もっと見る' color='info' variant='outlined' />
          </div>
          <div>
            <p>info ghost</p>
            <Button {...args} label='もっと見る' color='info' variant='ghost' />
          </div>
        </div>
      </div>
    )
  }
}
