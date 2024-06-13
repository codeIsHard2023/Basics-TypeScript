"use strict";
/** Narrowing ==> est le processus qui permet, via des conditions, de réduire les types possibles.
  Le narrowing peut se faire grâce à plusieurs méthodes :
    typeof
    instanceof
    l'égalité entre 2 unions type qui ont des types en commun
    L'opérateur in
    Certaines méthodes qui permettent de prédire le type : Array.isArray par exemple.
*/
/** Exemlple en utilisant "typeof" et condition **/
function exampleTypeof(num, power) {
    if (num && typeof num === "number" && typeof power === "number") {
        return Math.pow(num, power);
    }
    if (!num) {
        return num + "is undefined";
    }
    return Math.pow(Number(num), Number(power));
}
// console.log(exampleTypeof(4, "3"));
/****************************************** */
/** En utilisant instanceof **/
// Example 1
function exeample1Instanceof(arr) {
    if (Array.isArray(arr)) {
        return arr + "is an array of chars";
    }
    return arr + "is a string";
}
// console.log(exeample1Instanceof(["arr", "brr"]));
// Example 2
function exeample2Instanceof(a) {
    if (a instanceof Date) {
        return a + "is a date";
    }
    return a + "is a string";
}
// exeampleInstanceof(["arr1", "arr2"]);
const today = new Date();
// console.log(exeample2Instanceof(today));
// Example 3 : return true when a is a Date
function isDate(a) {
    return a instanceof Date;
}
// console.log(isDate(today));
/****************************************** */
function checkUnion(a, b) {
    if (a === b) {
        return (a.toUpperCase() +
            " and " +
            b.toUpperCase() +
            " are both strings and equal");
    }
}
// console.log(checkUnion("a", "a"));
