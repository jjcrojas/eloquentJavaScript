/**
 * Created by jcrojas on 01/06/2017.
 */

    //Comparar el contenido de objetos no es comparar los objetos
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15

console.log(object3.value);
// → 10

console.log(object1.value == object2.value);


console.log(object2.value == object3.value);
object1.value = 10;
console.log(object1.value == object3.value);