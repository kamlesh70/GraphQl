export const typeDefs = `#GraphQl

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publishedYear: Int
    authors: [Author]
  }

  type Query {
    authors: [Author]
    books: [Book]
  }


  type Mutation {
    addAuthor(name: String!, books: [Int]): Author
  }

`