// the decorator pattern (also known as the wrapper or the adapter pattern)
// is a design pattern that allows behavior to be added to an individual object,
// either statically or dynamically, without affecting the behaviour
// of other objects from the same class,

// the decorator pattern is often useful for dividing behaviours
// between entities with unique areas of concern

const Coffee = require('./Coffee');
const Milk = require('./decorators/Milk');
const Soja = require('./decorators/Soja');
const Decaf = require('./decorators/Decaf');

let decaf = new Coffee('decaf', 1.7);
// add the decaf to the Coffee
decaf = new Decaf(decaf);

let coffeeWithMilkAndSoja = new Coffee('nespresso', 2.5);
// add the mllk to the coffee
coffeeWithMilkAndSoja = new Milk(coffeeWithMilkAndSoja);
// add the soja to the coffe
coffeeWithMilkAndSoja = new Soja(coffeeWithMilkAndSoja);

console.log(decaf);
console.log(coffeeWithMilkAndSoja);
