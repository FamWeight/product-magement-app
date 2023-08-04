import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  deleteAllBooks,
  updateManyBooks,
  getTopRatedBooks,
  countBooks,
  searchBooks,
} from "../controllers/booksController.js";

const booksRoute = (server) => {
  server.route({
    method: "POST",
    path: "/books",
    handler: createBook,
  });

  server.route({
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  });

  server.route({
    method: "GET",
    path: "/books/{id}",
    handler: getBookById,
  });

  server.route({
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookById,
  });

  server.route({
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookById,
  });

  server.route({
    method: "DELETE",
    path: "/books",
    handler: deleteAllBooks,
  });

  server.route({
    method: "PATCH",
    path: "/books",
    handler: updateManyBooks,
  });

  server.route({
    method: "GET",
    path: "/books/top-rated",
    handler: getTopRatedBooks,
  });

  server.route({
    method: "GET",
    path: "/books/count",
    handler: countBooks,
  });

  server.route({
    method: "GET",
    path: "/books/search",
    handler: searchBooks,
  });
};

export default booksRoute;
