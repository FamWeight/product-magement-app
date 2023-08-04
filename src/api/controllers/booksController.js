import Books from "../../models/Books.js";

//Membuat buku baru
export const createBook = async (request, h) => {
  try {
    const newBook = new Books(request.payload);
    const savedBook = await newBook.save();
    return h.response(savedBook).code(201).message("Buku berhasil dibuat");
  } catch (error) {
    return h.response({ message: error.message }).code(400);
  }
};

//Mendapatkan semua buku
export const getAllBooks = async (request, h) => {
  try {
    const books = await Books.find();
    return h.response(books).code(200).message("Daftar semua buku");
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Mendapatkan detail buku berdasarkan ID
export const getBookById = async (request, h) => {
  try {
    const book = await Books.findById(request.params.id);
    if (book) {
      return h.response(book).code(200).message("Detail buku ditemukan");
    } else {
      return h.response({ message: "Buku tidak ditemukan" }).code(404);
    }
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Memperbarui detail buku berdasarkan ID
export const updateBookById = async (request, h) => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(
      request.params.id,
      request.payload,
      {
        new: true,
      }
    );
    if (updatedBook) {
      return h
        .response(updatedBook)
        .code(200)
        .message("Detail buku diperbarui");
    } else {
      return h.response({ message: "Buku tidak ditemukan" }).code(404);
    }
  } catch (error) {
    return h.response({ message: error.message }).code(400);
  }
};

//Menghapus buku berdasarkan ID
export const deleteBookById = async (request, h) => {
  try {
    const deletedBook = await Books.findByIdAndDelete(request.params.id);
    if (deletedBook) {
      return h.response({ message: "Buku berhasil dihapus" }).code(200);
    } else {
      return h.response({ message: "Buku tidak ditemukan" }).code(404);
    }
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Menghapus semua buku
export const deleteAllBooks = async (request, h) => {
  try {
    const deletedBooks = await Books.deleteMany();
    return h
      .response({
        message: "Semua buku berhasil dihapus",
        count: deletedBooks.deletedCount,
      })
      .code(200);
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Mengupdate beberapa buku sekaligus
export const updateManyBooks = async (request, h) => {
  try {
    const filter = request.payload.filter || {};
    const update = request.payload.update || {};
    const updatedBooks = await Books.updateMany(filter, update);
    return h
      .response({
        message: "Pembaruan berhasil",
        count: updatedBooks.nModified,
      })
      .code(200);
  } catch (error) {
    return h.response({ message: error.message }).code(400);
  }
};

//Mengurutkan dan mendapatkan buku berdasarkan rating tertinggi
export const getTopRatedBooks = async (request, h) => {
  try {
    const limit = request.query.limit || 10;
    const books = await Books.find()
      .sort({ rating: -1 })
      .limit(parseInt(limit));
    return h
      .response(books)
      .code(200)
      .message("Daftar buku berdasarkan rating tertinggi");
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Menghitung total buku dalam koleksi
export const countBooks = async (request, h) => {
  try {
    const totalBooks = await Books.countDocuments();
    return h
      .response({ total: totalBooks })
      .code(200)
      .message("Total buku dalam koleksi");
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

//Pencarian buku berdasarkan judul atau penulis
export const searchBooks = async (request, h) => {
  try {
    const keyword = request.query.keyword || "";
    const searchResult = await Books.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { author: { $regex: keyword, $options: "i" } },
      ],
    });
    return h.response(searchResult).code(200).message("Hasil pencarian buku");
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};
