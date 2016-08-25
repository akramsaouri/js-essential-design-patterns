const Decaf = function(coffee) {
    coffee.type += ' with Decaf, ';
    coffee.price += 0.3;
    return coffee;
};

module.exports = Decaf;
