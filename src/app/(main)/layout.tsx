import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Contents } from './_components/Contents'
import { Header } from './_components/Header'
import '@/styles/style.scss'

export const metadata: Metadata = {
  title: 'RepoFinder'
}

type Props = {
  children: ReactNode
}

export default function Layout(props: Props) {
  const { children } = props

  return (
    <html lang='ja'>
      <body suppressHydrationWarning>
        <Header />
        <Contents>{children}</Contents>
      </body>
    </html>
  )
}
