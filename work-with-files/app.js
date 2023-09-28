// const fs = require("fs");
// працює через callback

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// за допомогою промісів
const fs = require("fs/promises");
// const fs = require("fs").promises;

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// використання async

const readFile = async () => {
  //   const buffer = await fs.readFile("./files/file.txt");
  // console.log(buffer);
  //   const text = buffer.toString();
  //   console.log(text);

  const text = await fs.readFile("./files/file.txt", "utf-8");
  console.log(text);
};
// читає і повертає зміст
readFile();

// const addText = async () => {
//   const result = await fs.appendFile("./files/file.txt", "\nПривіт");
//   console.log(result);
// };
// дописати текст в кінець
// addText();

// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file.txt", "Щось нове");
//   console.log(result);
// };
// перезаписати повністю зміст файла
// replaceText();
