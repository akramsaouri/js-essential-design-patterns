const Soja = function(coffee) {
    coffee.type += ' with Soja, ';
    coffee.price += 0.7;
    return coffee;
};

module.exports = Soja;
