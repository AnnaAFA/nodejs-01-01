const express = require("express");

// імпортуємо книги
const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  // відправляємо книги
  // res.send(books);

  // правільніше через json
  res.json(books);
  // const data = null;
  // res.json(data);
});

app.listen(3000, () => console.log("Server running"));
