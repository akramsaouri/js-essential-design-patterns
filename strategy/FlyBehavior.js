const FlyBehavior = function() {};

FlyBehavior.prototype.selectBehavior = function(behavior) {
    this.behavior = behavior;
    return this;
};

FlyBehavior.prototype.fly = function() {
    if (this.behavior) {
        return this.behavior();
    }
    throw ('No Flying Behavior Selected');
};

module.exports = FlyBehavior;
