import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Pagination } from '.'

const meta = {
  title: 'Components/Molucules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    onPageChange: (page) => console.log('page', page)
  }
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalCount: 500
  }
}

export const PageExample: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Pagination {...args} currentPage={1} totalCount={500} />
        <Pagination {...args} currentPage={2} totalCount={500} />
        <Pagination {...args} currentPage={3} totalCount={500} />
        <Pagination {...args} currentPage={4} totalCount={500} />
        <Pagination {...args} currentPage={5} totalCount={500} />
        <Pagination {...args} currentPage={6} totalCount={500} />
        <Pagination {...args} currentPage={7} totalCount={500} />
        <Pagination {...args} currentPage={8} totalCount={500} />
        <Pagination {...args} currentPage={9} totalCount={500} />
        <Pagination {...args} currentPage={10} totalCount={500} />
      </div>
    )
  }
}
