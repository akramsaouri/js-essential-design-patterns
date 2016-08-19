// The observer pattern is a design pattern in which an object,
// called the 'subject' maintains a list of its dependents, called 'observers' and notifies
// them automatically of any state changes

// the observer design pattern is mainly used in 'event handling' systems

const Subject = require('./Subject');
const Observer = require('./Observer');

const subject = new Subject();
const observer1 = new Observer('observer1');
const observer2 = new Observer('observer2');

subject.observe(observer1);
subject.observe(observer2);
subject.add({
    foo: 'foo'
});
subject.add({
    bar: 'bar'
});
subject.unObserve(observer2);
subject.add({
    foo: 'bar'
});
