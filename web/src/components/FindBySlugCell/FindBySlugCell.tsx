import type { FindFindBySlugQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { useEffect } from 'react'

export const QUERY = gql`
  query FindFindBySlugQuery($slug: String!) {
    findBySlug: findBySlug(slug: $slug) {
      id
      fullURL
      views
    }
  }
`

const INCREMENT_VIEWS = gql`
  mutation IncrementViewMutation($id: Int!, $count: Int!) {
    incrementViews: incrementViews(id: $id, count: $count) {
      id
      fullURL
      slug
      views
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>We cannot find any url with current slug </div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  findBySlug,
}: CellSuccessProps<FindFindBySlugQuery>) => {
  const [increment] = useMutation(INCREMENT_VIEWS)
  useEffect(() => {
    increment({
      variables: {
        id: findBySlug.id,
        count: findBySlug.views + 1,
      },
    })
    window.location.href = findBySlug.fullURL
  }, [findBySlug.id])
  return <div>{JSON.stringify(findBySlug)}</div>
}
