import styles from './style.module.scss'

type Props = {
  label: string
  count: number
}

export const Stat = (props: Props) => {
  const { label, count } = props

  return (
    <li className={styles.stat}>
      <span className={styles.stat__label}>{label}</span>
      <span className={styles.stat__count}>{count}</span>
    </li>
  )
}
