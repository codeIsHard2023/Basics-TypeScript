"use strict";
/******** Class in TypeScript ********/
// Les classes ont des propriétés. TypeScript analyse notre code et détermine les types des propriétés automatiquement.
// Pour les propriétés des classes, on peut ajouter des modificateurs pour spécifier la visibilité : private, protected, public.
// private, protected et public ont du sens seulement en TypeScript, on ne les voit pas dans le JavaScript mais ça permet aux autres développeurs de voir quelles propriétés dans nos classes sont publiques ou privées
// A : private signifie que la propriété est accessible seulement dans la classe
class A {
    a = 3;
    c = 4;
    log() {
        console.log(this.a);
    }
}
const aInstance = new A();
// console.log(aInstance.a); // la propriété a n'est pas visible
aInstance.log(); // par contre on peut y accéder en utilisant la méthode de la classe A log()
// console.log(aInstance["a"]); // Cette ligne est incorrecte : en réalité, cela ne fonctionne pas. TypeScript protège l'accès aux propriétés privées.
// B : protected est comme private mais les enfants de la classe parente peuvent accéder à la propriété protégée
class B {
    b = 3;
}
class ChildB extends B {
    log() {
        console.log(this.b);
    }
    a = aInstance.c;
    logA() {
        console.log(this.a);
    }
}
const childBInstance = new ChildB();
// console.log(childBInstance.b); // La propriété b n'est pas visible
childBInstance.log(); // Par contre, on peut y accéder en utilisant la méthode de la classe enfant
// console.log(childBInstance.a); // La propriété a n'est pas visible
childBInstance.logA(); // Par contre, on peut y accéder en utilisant la méthode logA
// public signifie que la propriété est accessible partout et c'est par défaut si on n'écrit rien
// Dans les dernières versions de JavaScript, on a aussi le # qui définit la visibilité restreinte de la propriété et qui spécifie vraiment son mode privé (dans ce cas, les [] ne pourront pas être utilisés comme dans le cas avec private)
class C {
    #c = 4; // sera traduit en propriété privée native de JS
}
const cInstance = new C();
// console.log(cInstance['#c']); // La propriété privée native de JS ne peut pas être accédée de cette manière
// console.log(cInstance.#c); // Cela produira une erreur
console.log(cInstance);
// on peut spécifier les propriété dès la construction de la classe
class D {
    d;
    constructor(d) {
        this.d = d;
    }
}
const dInstance = new D(3);
console.log(dInstance);
// on peut également utiliser les generics pour définir les classes
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    //renvoi le premier element
    first() {
        //this est un type spécial utilisable au sein des classes qui fait référence à l'instance (si on modifiera les propriétés de l'instance ses nouveaux types serons prises en compte et pas le prototype de la classe)
        return this.items[0] || null;
    }
}
const c = new Collection([1, 2, 3]); // à partir de constructor TS va comprendre le type de Type et dans notre cas fera la référence à number
const cC = c.first(); // va nous renvoyer number ou null
// Class members
class Point {
    x;
    y;
    constructor() {
        // on est obligé d'initializer les valeurs des paramètres
        this.x = 0;
        this.y = 0;
    }
}
const pt1 = new Point();
pt1.x = 1;
pt1.y = 2;
const pt2 = new Point();
pt2.x = 3;
pt2.y = 4;
console.log(pt1);
console.log(pt2);
// Constructors
// Très similaires aux fonctions. On peut rajouter des paramètres avec les annotations, les types etc.
class Coordinate {
    x;
    y;
    // signature sans erreurs
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class CoordinateOverloads {
    x = 0;
    y = 0;
    constructor(x, y = 0) {
        // logic du code ici
    }
}
// il est important de faire l'appel à super() avant d'utiliser this.
// Example avec erreur
// class Child1Coordinate extends Coordinate {
//   constructor() {
//     console.log(this.x);
//   }
//   super();
// }
//Example sans erreur
class Child2Coordinate extends Coordinate {
    constructor() {
        super();
        console.log(this.x);
    }
}
// changement du contexte du this
class Subscriber {
    on(name, cb) {
        //ici, le mot-clé spéciale this, on modifie son sens et on dit que c'est quelque chose de type HTMLInputElement
        this; // this ne fait plus la réference à une instance de la classe mais à un element HTML
    }
}
// Utilisation this dans les types de retour
class CollectionWithThisReturn {
    items;
    constructor(items) {
        this.items = items;
    }
    add(item) {
        // on specifie que la fonction retournera this. Dans ce cas la même instance est renvoyée
        this.items.push(item);
        return this;
    }
}
const instanceCollectionWithThisReturn = new CollectionWithThisReturn(["1", 2]);
const collectionTypeNumber = instanceCollectionWithThisReturn.add(3); //le type de collectionTypeNumber est le type de this
// Les classes ne sont comparés que en terme de structure : deux classes similaires pourront fonctionner
class PointCoordinate {
    x = 0;
    y = 0;
}
class PointGeometry {
    x = 0;
    y = 0;
    surface = 0;
}
function getX(p) {
    return p.x;
}
getX(new PointGeometry()); // ça fonctionne car la fonction getX attend quelque chose qui contient x et y et la class PointGeometry contient ces deux mêmes paramètres
// Une class Abstrait : modèle de class qui ensuite peut être utilisée par d'autres classes; les enfants de cette class Abstraite hérite les propriétés et les methodes qui doivent être implementées par eux mêmes
class Geometry {
    x = 0;
    y = 0;
}
class GeometryChild extends Geometry {
    // GeometryChild doit donc implementer toutes les membres abstraits de la class Geometry
    x = 2;
    y = 3;
    surface() {
        return this.x * this.y;
    }
}
// Methodes statics : pas forcement dans TS; on peut l'utiliser dans JS
class GeometryStatic {
    static origin = { x: 0, y: 0 };
}
GeometryStatic.origin; // static permet d'accéder à origin de cette façon
/************************************/
