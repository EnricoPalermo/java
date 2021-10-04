    /*Ejercicio 1*/

/*let auto = {
    color: "blanco",
    marca: "Ford",
    modelo: "Focus",
    año: 2017,
    encendido: true,

    apagar(){
        auto.encendido = false;
        document.write(`<br>Encendido: ${auto.encendido}`)
    },
    encender(){
        auto.encendido = true;
        document.write(`<br>Encendido: ${auto.encendido}`)
    }
}*/

    /*Ejercicio 2*/

/*let cuenta ={
    titular: "Alex",
    saldo: 0,

    ingreso(monto){
        cuenta.saldo = cuenta.saldo+monto;
        document.write(`<br>saldo: ${cuenta.saldo}`)
    },
    retiro(monto){
        cuenta.saldo = cuenta.saldo-monto;
        document.write(`<br>saldo: ${cuenta.saldo}`)
    },
    informar(){
        document.write(`<br>Titular: ${cuenta.titular} <br>Saldo: ${cuenta.saldo}`)
    }
}
cuenta.retiro(500)
cuenta.ingreso(5000)
cuenta.ingreso(463)
cuenta.retiro(879)
cuenta.informar()*/

    /*Ejercicio 3*/

/*class Rectangulo{
    constructor(ancho, alto){
            this.alto = alto;
            this.ancho = ancho;
    }
    perimetro(){
        document.write("<br>Ancho: " + this.ancho + "cm"+ "<br> Alto: " + this.alto + "cm"+ "<br> Perimetro: " + (this.alto*2+this.ancho*2)+"cm")
       
    }
    area(){
        document.write("<br>Ancho: " + this.ancho + "cm"+ "<br> Alto: " + this.alto + "cm"+ "<br> Perimetro: " + (this.alto*this.ancho)+"cm2")
    }
    set modificarAncho(nuevoAncho){
        this.ancho = nuevoAncho;
    }
    set modificarAlto(nuevoAlto){
        this.alto = nuevoAlto;
    }
}

let rectangulo1 = new Rectangulo(200,300)
rectangulo1.perimetro()
rectangulo1.area()
let rectangulo2 = new Rectangulo(500,150)
rectangulo2.perimetro()
rectangulo2.area()*/

    /*Ejercicio 4*/

/*class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`<br>Producto: ${this.nombre} Codigo: ${this.codigo} Precio: ${this.precio}`)
    }
}
let producto1 = new Producto(795421,"7up",180)
let producto2 = new Producto(986532,"Papas Tafi", 140)
let producto3 = new Producto("A1296","Magic Mouse", 14000)
let articulos = [producto1,producto2,producto3];
producto1.imprimeDatos()
producto2.imprimeDatos()
producto3.imprimeDatos()*/

    /*Ejercicio 5 */

class Persona{
    constructor(nombre,edad,DNI,sexo,peso,altura,nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento <= 1948){
            document.write(`${this.nombre} pertenece a la "Silent Generation" y su rasgo caracteristico es la austeridad`)
        }else if(this.nacimiento <= 1968 && this.nacimiento >= 1949){
            document.write(`${this.nombre} pertenece a la generacion "Baby Boom" y su rasgo caracteristico es la Ambicion`)
        }else if(this.nacimiento <= 1968 && this.nacimiento >= 1949){
            document.write(`${this.nombre} pertenece a la generacion "Baby Boom" y su rasgo caracteristico es la Ambicion`)
    }else if(this.nacimiento <= 1968 && this.nacimiento >= 1949){
        document.write(`${this.nombre} pertenece a la generacion "Baby Boom" y su rasgo caracteristico es la Ambicion`)
}
}

}
