const QuackBehavior = function() {};

QuackBehavior.prototype.selectBehavior = function(behavior) {
    this.behavior = behavior;
    return this;
};

QuackBehavior.prototype.quack = function() {
    if (this.behavior) {
        return this.behavior();
    }
    throw ('No Quack Behavior Selected');
};

module.exports = QuackBehavior;
