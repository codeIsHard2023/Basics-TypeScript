"use strict";
/******** Class in TypeScript ********/
var _C_c;
// Les classes ont des propriétés et TypeScript analyse notre code et détermine les types des propriétés automatiquement
// Pour les propriétés des classes, on peut ajouter des modificateurs pour spécifier la visibilité : private, protected, public
// private, protected et public ont du sens seulement en TypeScript, on ne les voit pas dans le JavaScript mais ça permet aux autres développeurs de voir quelles propriétés dans nos classes sont publiques ou privées
// A : private signifie que la propriété est accessible seulement dans la classe
class A {
    constructor() {
        this.a = 3;
        this.c = 4;
    }
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
    constructor() {
        this.b = 3;
    }
}
class ChildB extends B {
    constructor() {
        super(...arguments);
        this.a = aInstance.c;
    }
    log() {
        console.log(this.b);
    }
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
    constructor() {
        _C_c.set(this, 4); // sera traduit en propriété privée native de JS
    }
}
_C_c = new WeakMap();
const cInstance = new C();
// console.log(cInstance['#c']); // La propriété privée native de JS ne peut pas être accédée de cette manière
// console.log(cInstance.#c); // Cela produira une erreur
console.log(cInstance);
// on peut spécifier les propriété dès la construction de la classe
class D {
    constructor(d) {
        this.d = d;
    }
}
const dInstance = new D(3);
console.log(dInstance);
// on peut également utiliser les generics pour définir les classes
class Collection {
    constructor(items) {
        this.items = items;
    }
    //renvoi le premier element
    first() {
        //this est un type spécial utilisable au sein des classes qui fait référence à l'instance (si on modifiera les propriétés de l'instance ses nouveaux types serons prises en compte et pas le prototype de la classe)
        return this.items[0] || null;
    }
}
const c = new Collection([1, 2, 3]); // à partir de constructor TS va comprendre le type de Type et fera la référence à number dans notre cas
const cC = c.first(); // va nous renvoyer number ou null
/************************************/
