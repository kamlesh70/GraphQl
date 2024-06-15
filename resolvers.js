const data = {
  authors: [
    {
      id: 1,
      name: "Author 1",
      books: [1]
    },
    {
      id: 2,
      name: "Author 2",
      books:[1,2]
    }
  ],
  books: [
    {
      id: 1,
      title: "Book 1",
      publishedYear: 2020,
      authors: [1]
    },
    {
      id: 2,
      title: "Book 2",
      publishedYear: 2021,
      authors: [2 ,1]
    }
  ]
}


export const resolvers = {

  Book: {
    authors: (parent, args, context, info) => {
      console.log(parent);
      return data.authors.filter(author => parent.authors.includes(author.id));
    }
  },

  Author: {
    books: (parent, args, context, info) => {
      console.log(parent);
      const res = data.books.filter(book => parent.books.includes(book.id));
      console.log(res);
      return res;
    }
  },

  Query: {
    authors: ( parent, args, context, info ) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    }
  },

  Mutation: {
    addAuthor: (parent, args, context, info) => {
      console.log(args)
      return data.authors[0];
    },
  }
}