const books = require("./books");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const { program } = require("commander");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("Unknown action");
  }
};

// invokeAction({ action: "read" });
// прочитай книгу

// invokeAction({ action: "getById", id: "2" });
// отримати одну книгу по id

// додати книгу
// invokeAction({ action: "add", title: "New book", author: "Mari" });

// редагування книги
// invokeAction({
//   action: "updateById",
//   id: "RoHy-LUDt1sssRjaXnYk9",
//   title: "New book 2",
//   author: "Mari",
// });

// видалення книги
// invokeAction({
//   action: "deleteById",
//   id: "RoHy-LUDt1sssRjaXnYk9",
// });

// --------------------------------------------------
// те що пишемо в командній строці в консолі зберігається в змінній process.argv
// глобальна змінна
// console.log(process.argv);

// const actionIndex = process.argv.indexOf("--action");
// чи є в масиві слова action
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
// console.log(action);
//   invokeAction({ action });
// }
// --------------------------------------------------

// ---------------yargs --------------------
// const arr = hideBin(process.argv);
// console.log(arr);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);
// дописати
// const bookId = String(id)
// в тих функціях де використовували id

// --------------- commander --------------------
program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");
// якщо очікуємо значення, то обовязкого пишемо <type>

program.parse();

const options = program.opts();
// console.log(options);
invokeAction(options);
