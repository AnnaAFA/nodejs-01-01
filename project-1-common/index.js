const users = require("./users");

console.log(users);

// деструктурізація
// const { admins } = require("./users");
// console.log(admins);

// const getCurrentMonth = require("./date/getCurrentMonth");
// const currentMonth = getCurrentMonth();
// console.log(currentMonth);

// під час імпорту одразу викликати функцію
const currentMonth = require("./date").getCurrentMonth();
console.log(`Now ${currentMonth} month`);
