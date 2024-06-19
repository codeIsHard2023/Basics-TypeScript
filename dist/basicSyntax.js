"use strict";
/******** SYNTAXE DE BASE ********/
const a = "firstname";
const b = 3;
const arr = ["ar", "rar", "3"];
const date = new Date();
const userTest = {
    firstname: "john",
    lastname: "drew",
};
const test = {
    north: "south",
    south: "north",
};
const check = (e) => {
    return console.log("clicked");
};
const arrDirec = ["north", "south"];
for (const direction of arrDirec) {
    console.log(test[direction]);
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
/****************************************** */
