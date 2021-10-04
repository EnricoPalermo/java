let anime = "Dragon Ball z"




// crear un array[]

let series = ["Dragon Ball","Naruto","Evangelion 3.0+1", anime, 21, true];

// crear un array vacio

let temporadas = [];

document.write("Serie: " + series[1]);

// agregar un elemento a un array en ultimo lugar

series.push("loky")
series.push("Breaking Bad")
console.log(series[6])

//conocer cuantos elementos tiene en este momento mi array

console.log(series.length)
console.log(temporadas.length)
series.push(prompt("Ingrese una serie"))

// mostrar todos los elementos de un array

mostrarSeries()

//modficar

series[4] = "The office";

mostrarSeries()

//agregar elemento en posicion particular

series.splice(1,0,"one piece")
mostrarSeries()
// eliminar elemento
series.splice(7,1);
mostrarSeries()

// eliminar todo desde una posicion
series.splice(8)
mostrarSeries()


function mostrarSeries(){
    document.write("<br>");
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion]);
}
}