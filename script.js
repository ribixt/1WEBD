// Day 1
console.log("Hello World!");

// Exercice 1
/*
let HT = prompt("Saisissez un prix HT: ");
let TVA = prompt("Saisissez un taux de TVA: ");
let article = prompt("Saisissez un nombre d'article: ");
const calculPrix = (HT * article) * TVA;
console.log(calculPrix + "€");
*/

// Exercic 2
/*
let a = 5;
let b = 15;
let c = a;
a = b;
b = c;
console.log("a =",a,"b = ",b)
*/

/*
let a = 13;
let b = 50;
[a,b] = [b,a];
console.log("a =",a,"b =",b)
*/

/*
let a = 23;
let b = 86;
a = a + b
b = a - b
a = a - b
console.log("a =",a,"b =",b)
*/

// Exercic 3
/*
let x = 2;
let y = 4;
let z = 6;
let temp = x;

x = y
y = z
z = temp

console.log("x =",x,"y =",y,"z= ",z)
*/

// Day 2

// Exercice 1
/*
const tableau = ["pomme","banane","orange"];
tableau.push("mangue");
tableau[1] = "fraise";
console.log(tableau);
*/

// Exercice 2
/*
for (let i=0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

tableau.forEach(fruit => {console.log(fruit);})
*/
// Exercie 3
/*
const nums = [3, 5, 7, 9, 11];

const bigNums = nums.map(num => num * 2)
console.log(nums)
console.log(bigNums)

let sommeNums = 0
for (let i=0; i<tableau.length; i++) {
    sommeNums = sommeNums + nums[i]
}
console.log(sommeNums)

let sommebigNums = 0
for (let i=0; i<tableau.length; i++) {
    sommebigNums = sommebigNums + bigNums[i]
}
console.log(sommebigNums)
*/

// Exercice 4
/*
const students = [
    {nom: "Jean", age: 20, note: 15},
    {nom: "Pierre", age: 19, note: 9},
    {nom: "Paul", age: 21, note: 18}
];

for (let i=0; i<students.length; i++) {
    console.log("Nom :", students[i].nom);
    console.log("Note :", students[i].note);
};

etudiantsMoyenne12 = [];
for (let i=0; i<students.length; i++) {
    if (students[i].note <= 12 ) {
        etudiantsMoyenne12.push(students[i].nom); 
    }
    continue
};
console.log(etudiantsMoyenne12)

listeNoms = [];
for (let i=0; i<students.length; i++) {
     listeNoms.push(students[i].nom)
}
console.log(listeNoms)
*/

// Exercice 5
/*
const supinfoModule = {
    nom : "1WEBD", 
    professeur : "Mme Martin", 
    students,

    addStudent : function() {
        let nouveauNom = prompt("Saisissez un Nom: ");
        let nouveauAge = prompt("Saisissez un Age: ");
        let nouveauNote = prompt("Saisissez un Note: ");
        students.push({
            nom: nouveauNom,
            age: nouveauAge, 
            note: nouveauNote
        });
        console.log(students)
    },

    afficherMoyenne : function() {
        let totalNote = 0;
        for (let i=0; i<students.length; i++) {
            totalNote = totalNote + Number(students[i].note);
        };
        let moyenne = (totalNote/students.length);
        moyenne = Math.floor(moyenne);
        console.log(moyenne);
   },
};

supinfoModule.addStudent();
supinfoModule.afficherMoyenne();
*/

// Classe TP04

// Exercice 1
/*
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduction() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} !`);
    }
}

let maPerson = new Person("Jean", "54");
maPerson.introduction();
*/
// Exercice 2
/*
class Animal {
    constructor (name) {
        this._name = name;
    }
    makeSound() {
        console.log ("Son d'un animal");
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("bark!");
    }
}

const myDog = new Dog("Rocky");
console.log(myDog.name);
myDog.name = "Igor";
console.log(myDog.name);
console.log(myDog.makeSound());
*/
// Exercice 3

class Shape {
    constructor() {
        if (this.constructor === Shape) 
            throw new Error("Classe abstraite 'Shape' ne peut pas etre instanciée directement !");
    }
    getSurface() {
        throw new Error("Méthode 'getSurface'doit etre implémentée !");
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r =r;
    }
    getSurface() {
        console.log("Rayon =",this.r * this.r,"M²");
    }
}
class Square extends Shape {
    constructor(l) {
        super();
        this.l =l;
    }
    getSurface() {
        console.log("Aire ≈",Math.floor(Math.PI * this.l**2),"M²");
    }
}

let circle = new Circle(5);
circle.getSurface();
let square = new Square(4);
square.getSurface();