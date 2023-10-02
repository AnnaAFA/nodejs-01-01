const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");
// імпортуємо книги
const books = require("./books");

const app = express();

// дозволяємо крос домені запити
// cors повертає Middleware
// const corsMiddleware = cors();
// app.use(corsMiddleware);
// скорочений запис
app.use(cors());

// додаємо middleware
// app.use((req, res, next) => {
// якщо передати одразу функцію, то вона спрауьовує для будь-якого запиту, підходить до будь-якого маршруту
// console.log("First middleware");
// middleware може бути декілька
// next();
// next() - щоб express пішов шукати далі
// });

// middleware потрібен для логування
// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
// записуємо дані в файл
// next();
// });

app.get("/products", async (req, res) => {
  res.json([]);
});

app.get("/books", async (req, res) => {
  res.json(books);
});

// обробка запитів на адреси яких немає
app.use((req, res) => {
  // якщо немає відповіді, то записуємо в форматі json, пишемо в кінці
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(3000, () => console.log("Server running"));
