/**
 * Created by jcrojas on 02/06/2017.
 */

function hasEvent(event, entry) {
    return entry.events.indexOf(event) !== -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        /*El if puede tener las sentencias sin que exista un bloque, cada sentencua puede estar
        * separada por ; y no necesariamente estar dentro de {}*/
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        /*La asignación del valor a una posición del arreglo se hace directamente
        arreglo[posicion] += valor. No se hace arreglo[posicion] = variable*/
        /*El arreglo no se llena en orden. Se puede llenar al final la posición 0 del arreglo*/
        table[index] += 1;
    }
    return table;
}
/*archivo Journal bajado de internet: http://eloquentjavascript.net/code/jacques_journal.js*/
var JOURNAL = [
    {"events":["carrot","pizza","weekend"],"squirrel":false},
    {"events":["bread","pizza","brushed teeth","weekend","touched tree"],"squirrel":true},
    {"events":["carrot","xx","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":true}
];
console.log(tableFor("pizza", JOURNAL));