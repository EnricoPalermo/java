// crear una clase

class Serie{
    //con este metodo se crean los objetos
    constructor(parametroNombre, parametroTemporada, parametroCapitulos, parametroGenero){
        // crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.temporada = parametroTemporada;
        this.parametroCapitulos = parametroCapitulos;
        this.genero = parametroGenero;
    }
    //aca van nuestros metodos
    mostrarDatos(){
        document.write("serie "+ this.nombre + "temporada: "+ this.temporada+"<br>");
    }
    mostrarDatosExtendio(){
        
    }
}

//utilizar la clase o instanciar objetos

let theOffice = new Serie("The Office ",9,27,"sitcom");
let vikingos = new Serie("Vikings ",5,20,"accion")

console.log(theOffice);

theOffice.mostrarDatos();
vikingos.mostrarDatos();


