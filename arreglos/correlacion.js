/**
 * Created by jcrojas on 02/06/2017.
 */

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
/*archivo Journal bajado de internet: http://eloquentjavascript.net/code/jacques_journal.js*/
var JOURNAL = [
    {"events":["carrot","pizza","weekend"],"squirrel":false},
    {"events":["bread","ss","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","xx","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];
console.log(tableFor("pizza", JOURNAL));