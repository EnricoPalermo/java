let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));
let total = filas * columnas;

console.log(total)

document.write("<table border>")



for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write("<tr>")
    for(let indiceColumnas=0; indiceColumnas<columnas; indiceColumnas++){
        document.write("<td>"+total--)
        document.write("</td>")
    }
    document.write("</tr>")
}
document.write("</table>")