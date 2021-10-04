        //ejercicio 1
/*let edad = parseInt(prompt("ingrese su edad"));

if(edad>=18){
    document.write("Puedes conducir!");    
}else{
    document.write("Tu edad no es valida para conducir aun!");
}*/

        // ejercicio 2
/*let nota = parseInt(prompt("Ingrese nota"))

if (nota <= 2){
    alert("Muy deficiente")
}else if (nota <= 3 || nota <= 4){
    alert("Insuficiente")
}else if (nota <= 5 || nota <=6){
    alert("Suficiente")
}else if (nota <= 7){
    alert("Bien")
}else if(nota <= 8 || nota <= 9){
    alert("Notable")
}else if (nota <= 10){
    alert("Sobresaliente")
}else if (nota > 10 ){
    alert("numero erroneo")
}else{
    alert("Introduce un numero valido")
}*/

        // ejercicio 3
/*let resultado = "";
do{
    let palabra = prompt("ingrese una palabra");
    resultado= resultado+palabra+"-"
    console.log(resultado);
    

}while(confirm("¿desea cntinuar?"))

document.write(resultado)*/


        // ejercicio 4 sin resolver
/*let suma = 0;
do{
let numero = parseInt(prompt("ingrese una numero"))
suma= suma + numero
}while(confirm("¿desea cntinuar?"))      
document.write(suma)*/


        //ejercicio 5 no lo comprendo   

        //ejercicio 6               
/*for(i = 1; i <= 30; i++){
    for(j = 1; j <= i; j++){          
    document.write(i); 
    }      
    document.write("<br>");        
}*/

        //ejercicio 7
/*let numero = parseInt(prompt("Ingrese un numero menor a 50"))
for(let i=numero; i>=1; i--) {
    for(let j=1; j<=i; j++) {
    document.write(i);
    }
    document.write("<br>")
    }*/


        //ejercicio 8
// let numero = parseInt(prompt("Ingrese un numero menor a 50"))

/*let final=parseInt(prompt("ingrese un numero")) 
for(let i=1;i<=final;i++) {
    for(let j=1;j<=i;j++){
        document.write(j);
}
document.write("<br>");
}*/


        //ejercicio 9 
/*for(let i = 1; i<=500;i++){
    if(i % 4 == 0){
    document.write(i+ " (multiplo de 4)"+ "<br>")
    }else if (i % 9 == 0){
        document.write(i+" (multiplo de 9)"+"<br>")
    }else{
        document.write(i+"<br>")
    }
}*/

        //ejercicio 10
/* let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));
let total = filas * columnas;

document.write("<table border>")

for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write("<tr>")
    for(let indiceColumnas=0; indiceColumnas<columnas; indiceColumnas++){
        document.write("<td>"+total--  )
        document.write("</td>")
    }
    document.write("</tr>")
}
document.write("</table>")*/

        // 11 no realizado

        // ejercicio 12
/*function aleatorio(max) {
    return Math.floor(Math.random() * max);
  }
document.write(aleatorio(99))*/

        //ejercicio 13
/*let texto = prompt("ingrese texto");
document.write(texto.toUpperCase());*/

        //ejercicio 14

// let oracion = prompt("ingrese texto")

// function separador(texto,separador) {
//     let arrayDeCadenas = cadenaADividir.split(separador);
//     document.write('<p>La cadena original es: "' + texto + '"');
//     document.write('<br>El separador es: "' + separador + '"');
//     document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
 
//     for (var i=0; i < arrayDeCadenas.length; i++) {
//        document.write(arrayDeCadenas[i] + " / ");
//     }
//  }
 
// separador(oracion,"-")

        // ejercicio 15
/*let texto =prompt("ingrese texto");
let contador = 0;
for(let x=0;x<texto.length;x++) {
    if ((texto.charAt(x)=='a') || (texto.charAt(x)=='e') || (texto.charAt(x)=='i') || (texto.charAt(x)=='o') || (texto.charAt(x)=='u')){ 
       contador++;
     }
   }
   document.write("La palabra " + texto + " contiene " + contador + " vocales");*/

        //ejercicio 16

/*let palabra = prompt('ingrese una palabra');
for(let x = palabra.length-1; x >= 0; x--){
    console.log(palabra[x])
    document.write(palabra[x]+"-")
}*/




