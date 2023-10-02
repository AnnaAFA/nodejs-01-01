const express = require("express");

// 1. створюємо веб-сервер
// app - веб-сервер
const app = express();

app.get("/", (request, response) => {
  // відправити відповідь - метод send
  response.send("<h2>Home page</h2>");
});

app.get("/contacts", (request, response) => {
  console.log(request.url); //адреса запиту
  console.log(request.method); //метод запиту
  response.send("<h2>Contacts page</h2>");
});

// 2.запускаємо веб-сервер
// 3000 = порт
// () => console.log("Server running") - callback function яка спрацьовує коли сервер запускається
app.listen(3000, () => console.log("Server running"));
