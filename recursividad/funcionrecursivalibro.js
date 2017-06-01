/**
 * Created by jcrojas on 30/05/2017.
 */
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);

}


console.log(power(2, 5));