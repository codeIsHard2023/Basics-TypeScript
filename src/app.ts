/********  EXAMPLES ********/

// DOM manipulation : prioriser le narrowing (voir le Day 2)

const increment = document.querySelector("#increment") as HTMLButtonElement; // ATTENTION !!! "as HTMLButtonElement" ou "!"" peut-être utilisé seulement si on est absolument sûr à 100% que cet element existe
const span = document.querySelector("#counter");
const decrement = document.querySelector("#decrement");
let i = 0;

const incrementation = (e: Event) => {
  e.preventDefault();
  i++;
  if (span instanceof HTMLSpanElement) {
    span.innerText = i.toString();
  }
};
const decrementaion = (e: Event) => {
  e.preventDefault();
  if (i !== 0) {
    i--;
  }
  if (span instanceof HTMLSpanElement) {
    span.innerText = i.toString();
  }
};

increment?.addEventListener("click", incrementation);
decrement?.addEventListener("click", decrementaion);

/****************************************** */

// Test adding numbers

function add(a: number, b: number) {
  return a + b;
}
// console.log(add(3, 8));
/****************************************** */

// JS code transformation

function hello(name: string) {
  return "Hello, " + name;
}
const firstName: string = "Bob";

// console.log(hello(firstName));
// console.log(hello(firstName + " Marley"));

function concat(a: string, b: string) {
  return a + b;
}

const result: string = concat("Hello, ", concat("Type", "Script"));
// console.log(result);
/****************************************** */
