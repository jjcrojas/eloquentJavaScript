/**
 * Created by jcrojas on 30/05/2017.
 */
//Arreglos
var listaDeNumeros = [2, 3, 5, 7, 11];
/*Las propiedades del arreglo se obtienen con notación de punto o con parentesis cuadrado y comillas*/
console.log(listaDeNumeros.length);
console.log("Número de elementos: " + listaDeNumeros["length"]);

var mack = [];
//push agrega un valor al final
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
//join une los valores con lo que esté definido como parametro
//en este caso con |
console.log(mack.join("|"));
//pop quita un valor al final lo contrario de push
console.log(mack.pop());
console.log(mack);
