const express = require("express");
const books = require("../../data/books");

// Router створює одну сторінку записної книжки
const router = express.Router();

// прописуємо маршрути для книг
// отримання всіх книг
// не треба прописувати /api/books, вже його вказали
router.get("/", (req, res) => {
  res.json(books);
});

// отримання однієї книги по id
router.get("/:id", (req, res) => {
  res.json(books[0]);
});

// додавання книги
router.post("/", (req, res) => {
  res.json(books[0]);
});

// оновлення однієї книги по id
router.put("/:id", (req, res) => {
  res.json(books[0]);
});

// видалення книги
router.delete("/:id", (req, res) => {
  res.json(books[0]);
});

module.exports = router;
