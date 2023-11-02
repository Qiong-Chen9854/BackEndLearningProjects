import generateName from "sillyname";
import superheroes from "superheroes";


var superheroeName = superheroes.random();
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

console.log(`I am superheroe named ${superheroeName}`);