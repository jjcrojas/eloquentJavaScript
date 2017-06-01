/**
 * Created by jcrojas on 31/05/2017.
 */
//Values of the type object are arbitrary collections of properties

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running",
        "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1.events.length);
console.log(day1.events[1]);
