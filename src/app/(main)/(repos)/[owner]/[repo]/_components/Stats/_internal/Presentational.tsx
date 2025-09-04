'use client'

import Image from 'next/image'
import { Button } from '@/components/atoms'
import type { Repository } from '@/services/repository/type'
import { formatDateYYYYMMDD } from '@/utils/helpers/date'
import { Stat } from './components/Stat'
import styles from './style.module.scss'

type Props = {
  data: Repository
}

/**
 * @name Stats Presentational
 */
export const Presentational = (props: Props) => {
  const { data } = props

  const {
    name,
    html_url,
    description,
    updated_at,
    owner,
    language,
    stargazers_count,
    watchers_count,
    open_issues_count,
    forks_count
  } = data

  return (
    <>
      <div className={styles.stats}>
        <div className={styles.stats__heading}>
          {owner && (
            <div className={styles.owner}>
              <Image
                src={owner.avatar_url}
                alt={owner.login}
                width={300}
                height={300}
                className={styles.owner__img}
              />
              <span className={styles.owner__name}>{owner.login}</span>
            </div>
          )}

          <div className={styles.info}>
            <h2 className={styles.info__title}>{name}</h2>

            {description && <p className={styles.info__description}>{description}</p>}

            <div className={styles.info__footer}>
              {language && <span>言語 : {language}</span>}
              <span>最終更新日 : {formatDateYYYYMMDD(updated_at)}</span>
            </div>
          </div>
        </div>

        <ul className={styles.stats__list}>
          <Stat label='Star数' count={stargazers_count} />
          <Stat label='Watcher数' count={watchers_count} />
          <Stat label='Fork数' count={forks_count} />
          <Stat label='Issue数' count={open_issues_count} />
        </ul>
      </div>

      <div className={styles['button-group']}>
        <div className={styles['button-group__inner']}>
          <Button
            label='View on Github'
            onClick={() => window.open(html_url, '_blank')}
            size='lg'
            color='info'
          />
          <Button
            label='一覧に戻る'
            onClick={() => window.history.back()}
            size='lg'
            color='secondary'
            variant='outlined'
          />
        </div>
      </div>
    </>
  )
}
