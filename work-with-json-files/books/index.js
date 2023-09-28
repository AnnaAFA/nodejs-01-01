// написати функції які будуть працювати з книгами
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// console.log(__dirname);
// __dirname - абсолютний шлях

const booksPath = path.join(__dirname, "books.json");
// join обєднує шматочки шляху в один великий шлях та нормалізує його
// console.log(booksPath);

const getAll = async () => {
  // повертає всі книги
  const data = await fs.readFile(booksPath);
  // "utf-8" не обовязково писати, якщо є JSON.parse
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((book) => book.id === id);
  return result || null;
};

const add = async (data) => {
  const books = await getAll();
  const newBook = {
    id: nanoid(),
    ...data,
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  // повністю перезаписуємо книги
  return newBook;
};

const updateById = async (id, data) => {
  const books = await getAll();
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return null;
  }
  books[index] = { id, ...data };
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return books[index];
};

const deleteById = async (id) => {
  const books = await getAll();
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = books.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
