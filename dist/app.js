"use strict";
/********  EXAMPLES ********/
// DOM manipulation
const increment = document.querySelector("#increment");
const span = document.querySelector("#counter");
const decrement = document.querySelector("#decrement");
let i = 0;
const incrementation = (e) => {
    e.preventDefault();
    i++;
    if (span) {
        span.innerText = i.toString();
    }
};
const decrementaion = (e) => {
    e.preventDefault();
    if (i !== 0) {
        i--;
    }
    if (span) {
        span.innerText = i.toString();
    }
};
increment === null || increment === void 0 ? void 0 : increment.addEventListener("click", incrementation);
decrement === null || decrement === void 0 ? void 0 : decrement.addEventListener("click", decrementaion);
// Test adding numbers
function add(a, b) {
    return a + b;
}
console.log(add(3, 8));
// JS code transformation
function hello(name) {
    console.log("Hello, " + name);
}
const firstName = "Bob";
hello(firstName);
hello(firstName + " Marley");
function concat(a, b) {
    return a + b;
}
const result = concat("Hello, ", concat("Type", "Script"));
console.log(result);
