'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt='RepoFinder' width={200} height={50} />
        </Link>
      </div>
    </header>
  )
}
