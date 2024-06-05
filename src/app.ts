/********  EXAMPLES ********/

// DOM manipulation
const increment = document.querySelector("#increment") as HTMLButtonElement;
const span = document.querySelector("#counter") as HTMLSpanElement;
const decrement = document.querySelector("#decrement") as HTMLButtonElement;
let i = 0;

const incrementation = (e: Event) => {
  e.preventDefault();
  i++;
  if (span) {
    span.innerText = i.toString();
  }
};
const decrementaion = (e: Event) => {
  e.preventDefault();
  if (i !== 0) {
    i--;
  }
  if (span) {
    span.innerText = i.toString();
  }
};

increment?.addEventListener("click", incrementation);
decrement?.addEventListener("click", decrementaion);

// Test adding numbers
function add(a: number, b: number) {
  return a + b;
}
console.log(add(3, 8));

// JS code transformation
function hello(name: string) {
  console.log("Hello, " + name);
}

const firstName: string = "Bob";

hello(firstName);
hello(firstName + " Marley");

function concat(a: string, b: string) {
  return a + b;
}

const result: string = concat("Hello, ", concat("Type", "Script"));
console.log(result);
