const PizzaFactory = require('./PizzaFactory');
const frenchPizza = PizzaFactory.make('french', {
    roasted_tomatoes: 3,
    pesto: 4
});
const italianPizza = PizzaFactory.make('italian', {
    mozzarella: 7,
    pepperoni: 1
});

console.log(frenchPizza);
console.log(italianPizza);
