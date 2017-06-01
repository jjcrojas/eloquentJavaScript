/**
 * Created by jcrojas on 01/06/2017.
 */
//So we can represent Jacques’ journal as an array of objects.
var journal = [
    {events: ["work", "touched tree", "pizza",
        "running", "television"],
        squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
        "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break",
        "peanuts", "beer"],
        squirrel: true}
    /* and so on... */
];
/*asi obtengo el contenido de lo que hay en events dentro de journal*/
console.log(journal[0].events);
/*asi obtengo el contenido de events en una posición en especial*/
console.log(journal[2].events[1]);
//cycling