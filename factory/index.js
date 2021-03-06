// the factory design pattern is a "creational pattern" that creates
// methods without having to specify the exact class
// of the object that will be created


const PizzaFactory = require('./PizzaFactory');
// make a french pizza
const frenchPizza = PizzaFactory.make('french', {
    roasted_tomatoes: 3,
    pesto: 4
});
// make an italian pizza
const italianPizza = PizzaFactory.make('italian', {
    mozzarella: 7,
    pepperoni: 1
});

console.log(frenchPizza);
console.log(italianPizza);
