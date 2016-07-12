// the strategy pattern is a software design pattern that enables a behavior to be selected at runtime

// the strategy pattern :
// - defines a family of behaviors
// - encapsulates each behavior
// - finally make the behaviors interchangeable within the family

// this design pattern apply the rule that say :
// `identify the aspect of code that vary and separate it from the rest of the code`

// the example below will illustrate the strategy pattern on ducks example :
// some ducks quack some don't, some ducks fly some don't so the variable behavior is the quack and the fly
// so instead of relying on attribute(fly and quack) we'll rely on interfaces ( quackable, flyable)

'use strict';

const FlyBehavior = require('./FlyBehavior'),
    flyNoWay = require('./flyingBehaviors').flyNoWay,
    fLyWithWings = require('./flyingBehaviors').flyWithWings;

// quacks
let duckCanFLy = new FlyBehavior(),
    duckCannotFly = new FlyBehavior();

duckCanFLy.selectBehavior(fLyWithWings).fly();
duckCannotFly.selectBehavior(flyNoWay).fly();


const QuackBehavior = require('./QuackBehavior'),
    fakeQuack = require('./quackingBehaviors').fakeQuack,
    silenceQuack = require('./quackingBehaviors').silenceQuack;

// quacks
duckCanFLy = new QuackBehavior();
duckCannotFly = new QuackBehavior();

duckCanFLy.selectBehavior(fakeQuack).quack();
duckCannotFly.selectBehavior(silenceQuack).quack();
