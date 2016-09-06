const Subject = function() {
    this.observers = [];
    this.data = [];
};

Subject.prototype.observe = function(observer) {
    this.observers.push(observer);
};

Subject.prototype.unObserve = function(observer_to_remove) {
    this.observers = this.observers.filter((observer) => {
        if (observer !== observer_to_remove) {
            return true;
        }
        this.notify('removed', observer);
        return false;
    });
};

Subject.prototype.notify = function(event, data) {
    this.observers.forEach(observer => observer.notify(event, data));
};

Subject.prototype.add = function(item) {
    this.data.push(item);
    this.notify('added', item);
};

module.exports = Subject;
