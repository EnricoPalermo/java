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

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}

//modficar

series[4] = "The office";

document.write("<br>");
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion]);
}

//agregar elemento en posicion pparticular

series.splice(1,0,"one piece")
document.write("<br>");
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion]);
}
