'use client'

import type { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { Button } from '@/components/atoms'
import { TextField } from '@/components/molucules'
import type { FormType } from './schema'
import styles from './style.module.scss'

type Props = {
  form: UseFormReturn<FormType>
  onSubmit: SubmitHandler<FormType>
}

/**
 * @name SearchForm Presentational
 */
export const Presentational = (props: Props) => {
  const { form, onSubmit } = props

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='キーワード'
        annotation='キーワードでリポジトリの検索をすることができます。'
        register={register('keyword')}
        placeholder='キーワードを入力してください'
        error={errors.keyword?.message}
      />

      <div className={styles['button-wrapper']}>
        <Button type='submit' label='検索' size='lg' />
      </div>
    </form>
  )
}
