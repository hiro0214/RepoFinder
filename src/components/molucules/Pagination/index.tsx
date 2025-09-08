'use client'

import clsx from 'clsx'
import { DISPLAY_ITEM_COUNT, MAX_PAGE, PER_PAGE } from '@/utils/configs'
import styles from './style.module.scss'

type Props = {
  currentPage: number
  totalCount: number
  onPageChange: (page: number) => void
}

/**
 * @name Pagination
 * @example
 * <Pagination currentPage={1} totalCount={10} onPageChange={handlePageChange} />
 */
export const Pagination = (props: Props) => {
  const { currentPage, totalCount, onPageChange } = props

  const totalPages = Math.ceil(totalCount / PER_PAGE)
  const maxTotalPage = Math.min(totalPages, MAX_PAGE)

  const getPageNumbers = () => {
    if (maxTotalPage <= DISPLAY_ITEM_COUNT) {
      return Array.from({ length: maxTotalPage }, (_, i) => i + 1)
    }

    const half = Math.floor(DISPLAY_ITEM_COUNT / 2)
    let start = currentPage - half
    let end = currentPage + half

    if (start < 1) {
      start = 1
      end = DISPLAY_ITEM_COUNT
    } else if (end > maxTotalPage) {
      start = maxTotalPage - DISPLAY_ITEM_COUNT + 1
      end = maxTotalPage
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <button
          type='button'
          onClick={() => onPageChange(currentPage - 1)}
          className={clsx(styles.button, styles['prev-button'])}
          disabled={currentPage === 1}
        />
      </li>

      {getPageNumbers().map((page) => (
        <li key={`item-index-${page}`} className={styles.item}>
          <button
            type='button'
            onClick={() => onPageChange(page)}
            className={styles.button}
            data-selected={page === currentPage || undefined}
          >
            {page}
          </button>
        </li>
      ))}

      <li className={styles.item}>
        <button
          type='button'
          onClick={() => onPageChange(currentPage + 1)}
          className={clsx(styles.button, styles['next-button'])}
          disabled={currentPage === maxTotalPage}
        />
      </li>
    </ul>
  )
}
