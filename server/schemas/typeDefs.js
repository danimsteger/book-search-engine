const typeDefs = `
type Book {
    _id: ID!
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
    }

type Auth {
    token: ID!
    user: User
}

input bookInput {
    authors: [String]
    description: String
    title: String
    bookId: String!
    image: String
    link: String
    }

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: [bookInput]): User
    removeBook(bookId: String!): User
}


`;
