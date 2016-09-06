// The Singleton pattern (in a nutshell) ensure that a class has only
// one isntance and provide a global point of access to it

// Singletons are useful in situations where system-wide actions need to be
// coordinated from a single central place.

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
});

(function() {
    const instance1 = Singleton().getInstance();
    const instance2 = Singleton().getInstance();
    console.log('Same instance ? ' + (instance1 === instance2));
})();
