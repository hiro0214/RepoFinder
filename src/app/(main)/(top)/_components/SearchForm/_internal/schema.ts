import z from 'zod'

export const schema = z.object({
  keyword: z.string().trim().min(1, 'キーワードは必須項目です。')
})

export type FormType = z.infer<typeof schema>
