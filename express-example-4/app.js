const express = require("express");
const cors = require("cors");

// імпортуємо сторінку
const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());

// вказуємо, що всі адреси які починаються з /api/books знаходяться в booksRouter
app.use("/api/books", booksRouter);

app.listen(3001, () => console.log("Server running"));
