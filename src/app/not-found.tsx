'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms'
import styles from './style.module.scss'

/**
 * @description not-foundページ
 */
export default function NotFound() {
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='256'
          height='256'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#0b00a8'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <title>frown</title>
          <circle cx='12' cy='12' r='10' />
          <path d='M16 16s-1.5-2-4-2-4 2-4 2' />
          <line x1='9' x2='9.01' y1='9' y2='9' />
          <line x1='15' x2='15.01' y1='9' y2='9' />
        </svg>

        <h2 className={styles.title}>お探しのページが見つかりませんでした。</h2>
        <p className={styles.text}>
          ページが迷子になってしまったみたいです。トップに戻って探し直しましょう！
        </p>
      </div>

      <div className={styles['button-wrapper']}>
        <Button
          label='トップに戻る'
          onClick={() => router.push('/')}
          size='lg'
          color='secondary'
          variant='outlined'
        />
      </div>
    </div>
  )
}
