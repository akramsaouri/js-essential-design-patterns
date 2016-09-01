const pizzas = {
    french: require('./pizzas/french'),
    italian: require('./pizzas/italian')
};

module.exports = {
    make(type, ingredients) {
        const Pizza = pizzas[type];
        return new Pizza(ingredients);
    }
};
