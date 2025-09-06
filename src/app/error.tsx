'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms'
import styles from './style.module.scss'

/**
 * @description エラーページ
 */
export default function ErrorPage() {
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
          <title>robot</title>
          <path d='M12 8V4H8' />
          <rect width='16' height='12' x='4' y='8' rx='2' />
          <path d='M2 14h2' />
          <path d='M20 14h2' />
          <path d='M15 13v2' />
          <path d='M9 13v2' />
        </svg>
        <h2 className={styles.title}>予期せぬエラーが発生しました。</h2>
        <p className={styles.text}>
          サーバーがちょっと休憩中かもしれません。戻ってきたらまた試してみましょう！
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
