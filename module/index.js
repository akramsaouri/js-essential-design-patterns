// Module design pattern is the most prevalently used pattern
// in JS, this design helps to keep particular pieces of code independent of other components.

// Modules are JS "classes", one of the many advantages of classes is "encapsulation"

// (protecting states and behaviors from being accessed from other classes)

const Exposer = (function() {
    let privateVariable = 10;
    const privateMethod = function() {
        return ++privateVariable;
    };
    const privateMethodExposed = function() {
        return privateMethod();
    };
    return {
        method: privateMethodExposed
    };
})();


console.log(Exposer.method()); // => 11
console.log(Exposer.method()); // => 12
