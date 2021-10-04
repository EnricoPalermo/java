let mostrarObjeto = (serieParametro) =>{
    let claves = Object.keys(serieParametro)
    for(i=0;i<claves.length;i++){
        document.write(`<br> ${claves[i]}: ${serieParametro[claves[i]]}`)
    }
}

// crear objeto con notacion literal

let serie = {
    nombre: "the ofiice",
    temporadas: 9,
    genero: "sitcom",
    capitulos: 27
}

// mostrar una propiedad de un objeto
//metodo 1
document.write(`Serie: ${serie.nombre}`)
document.write(`<br>Capitulos: ${serie.capitulos}`)
//metodo 2
document.write(`<br>Temporadas: ${serie["temporadas"]}`)

//modificar una propiedad del objeto

serie.temporadas = 10;
document.write(`<br>Temporadas: ${serie["temporadas"]}`)

//agregar propiedades al objeto
serie.premios = true;

//borrar propiedades al objeto
delete serie.genero;

mostrarObjeto(serie)