export const schema = gql`
  type Url {
    id: Int!
    fullURL: String!
    slug: String!
    views: Int!
    createdAt: DateTime!
  }

  type Query {
    urls: [Url!]! @requireAuth
    url(id: Int!): Url @requireAuth
    findBySlug(slug: String!): Url @skipAuth
  }

  input CreateUrlInput {
    fullURL: String!
    slug: String!
    views: Int
  }

  input UpdateUrlInput {
    fullURL: String
    slug: String
    views: Int
  }

  type Mutation {
    createUrl(input: CreateUrlInput!): Url! @requireAuth
    updateUrl(id: Int!, input: UpdateUrlInput!): Url! @requireAuth
    deleteUrl(id: Int!): Url! @requireAuth
    incrementViews(id: Int!, count: Int!): Url! @skipAuth
  }
`
