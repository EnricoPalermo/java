/*
if(condicion logica){
    codigo a ejecutar si se cumple la condicion
}
else{
    codigo a ejecutar si no cumple la condicion
}
*/
let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if(numero1 > numero2){
    document.write("el numero 1 es mayor " + numero1);
}
else{
    if(numero1 < numero2){
    document.write("el numero 2 es mayor " + numero2);
    }
    else{
        document.write("los numero son iguales");
    }
}