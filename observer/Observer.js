const Observer = function(name) {
    this.name = name;
};

Observer.prototype.notify = function(event, data) {
    console.log(`name : ${this.name}, event : ${event}, data :`);
    console.log(data);
};

module.exports = Observer;
