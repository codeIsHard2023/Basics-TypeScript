/****** alias aidend à créer les types réutilisables et pour se simplifier la vie pour le travail avec des types complexes et d'éviter la répetition******/

type User = {
  id: Id;
  firstname: string;
  lastname: string;
  registerDate: DateString;
};
type Id = string | number;
type DateString = string;

const user: User = {
  id: "1",
  firstname: "Charlie",
  lastname: "Bing",
  registerDate: "24-06-2024",
};

console.log(user);
/****** ****************************************** ******/

/****** Generics aide aussi à créer les types réutilisables avec des paramètres de type en plus ******/
/*** Il existe des generics comme Array, querySelector etc mais on peut également créer nos propres générics */
// si on ne spécifie pas les types dans la fonction on aura ce qu'on aura
// function identity(arg: any): any {
//   return arg;
// }
// const aa = identity("3");

// on peut rajouter dans notre fonciton les paramètres à nos types : example <IdentityType> avec le paramètre arg de type IdentityType et le retour de fonction sera aussi de type IdentityType;
function identity<IdentityType>(arg: IdentityType): IdentityType {
  return arg;
}

// Ensuite quand on va utiliser la fonction identity on va pouvoir préciser quelle type on rentre et on attend au retour
const aa = identity<string>("3"); // ici on précise que IdentityType sera de type <string>

const aaa: Array<string | number> = identity(["abc", "cde", 3]); // ici on précise que IdentityType sera un type generic Array de type string ou number. C'est équivalent à (string | number)[]

/** Generics permettet d'avoir des paramètres dans nos types  */

// Si on met rien TS va quand même déduire le type
const aaaa = identity("3");

type Identity<ArgType> = (arg: ArgType) => ArgType;

// ce type de generic est également utilisé dans les fonctions natives
// ici donc querySelector renvera un element de type HTMLButtonElement qui spécifie davantage le generic querySelector (Element | null) => (HTMLButtonElement | null)
const button = document.querySelector<HTMLButtonElement>("#counter");
// si on recherche par tag HTML => pas besoin de spécifier le paramètre HTMLButtonElement
const btn = document.querySelector("button");

// Utilisation des contraintes (permet de forcer le typage du generic) : il est nécessaire de rajouter le type de length qui extends notre objet <Type> avec length de type number
function argSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const bbb = argSize(["3qsdf", "qgqdsg"]);

// On peut aussi avoir un type qui dépend d'un autre type (notamment avec des clés)
type UserExample = {
  id: Id;
  firstname: string;
  lastname: string;
  registerDate: DateString;
};

// Héritage du type de UserExample en fonction de la clé prédéfinie
type UserName1 = UserExample["lastname"];

// UserName2 est quelque chose de type de UserExample et qui permet d'avoir l'ensemble des clés
type UserName2 = keyof UserExample;

/******** readonly ********/
// readonly est un le mot-clé qui permet de spécifier qu'une propriété d'un objet ne peut pas être modifié une fois initialisée

// ici arr est en lecture seule, on ne doit pas modifier le tableau.
// si on veut retourner un nouveau tableau en utilisant reverse() (qui modifie le tableau) on est obligé d'initaliser un nouveau tableau
function reverse<Type>(arr: readonly Type[]): Type[] {
  return [...arr].reverse();
}

console.log(reverse([1, 2, 3, 4, "4"]));
