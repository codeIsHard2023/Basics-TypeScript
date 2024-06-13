/******** SYNTAXE DE BASE ********/

const a: string = "firstname";
const b: number = 3;
const arr: string[] = ["ar", "rar", "3"];
const date: Date = new Date();
const userTest: { firstname: string; lastname: string } = {
  firstname: "john",
  lastname: "drew",
};
const test: { [key: string]: string } = {
  north: "south",
  south: "north",
};
const check: Function = (e: MouseEvent) => {
  return console.log("clicked");
};

const arrDirec: string[] = ["north", "south"];
for (const direction of arrDirec) {
  console.log(test[direction]);
}

/****************************************** */
