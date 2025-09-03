type Props = {
  params: Promise<{ owner: string; repo: string }>
}

export default async function Page(props: Props) {
  const { params } = props

  const { owner, repo } = await params

  return (
    <h1>
      {owner}/{repo}
    </h1>
  )
}
