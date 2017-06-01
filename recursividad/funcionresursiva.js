/**
 * Created by jcrojas on 03/05/2017.
 */
/*Concepto de resursividad*/
var contador;
var total =1;
var exponente;
contador = 1;
var power = function (base,valor){
    if (contador == 1){
        exponente = valor;
        total = base;
    }
    if (contador < exponente) {
        total = base * total;
        contador = contador + 1;
        total = power(base,total);
    }
    return total;
}
console.log(power(2,4));
