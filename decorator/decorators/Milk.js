const Milk = function(coffee) {
    coffee.type += ' with Milk, ';
    coffee.price += 0.35;
    return coffee;
};

module.exports = Milk;
