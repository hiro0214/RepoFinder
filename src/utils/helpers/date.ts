import { format } from 'date-fns'

/**
 * @param date
 * @description Dateをyyyy/MM/dd形式にフォーマットする
 * @returns yyyy/MM/dd
 */
export const formatDateYYYYMMDD = (date: string) => {
  const d = new Date(date)
  const formatDate = format(d, 'yyyy/MM/dd')

  return formatDate
}
