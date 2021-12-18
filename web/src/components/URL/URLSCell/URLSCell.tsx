import type { FindUrls } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Urls from 'src/components/URL/URLS'

export const QUERY = gql`
  query FindUrls {
    urls {
      id
      fullURL
      slug
      views
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No urls yet. '}
      <Link to={routes.newURL()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ urls }: CellSuccessProps<FindUrls>) => {
  return <Urls urls={urls} />
}
