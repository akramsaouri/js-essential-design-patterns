// the strategy pattern is a software design pattern that
// allows a behavior to be selected at runtime

// the strategy pattern :
// - defines a family of behaviors
// - encapsulates each behavior
// - finally make the behaviors interchangeable within the family

// the example below will illustrate the strategy pattern on ducks example :
// some ducks quack some don't,
// so the variable behavior here is the ability to fly
// so instead of relying on attribute (fly)
// we'll rely on interfaces (flyable)

const FlyBehavior = require('./FlyBehavior'),
    flyNoWay = require('./flyingBehaviors').flyNoWay,
    fLyWithWings = require('./flyingBehaviors').flyWithWings;

let duckCanFLy = new FlyBehavior(),
    duckCannotFly = new FlyBehavior();

duckCanFLy.selectBehavior(fLyWithWings).fly();
duckCannotFly.selectBehavior(flyNoWay).fly();
