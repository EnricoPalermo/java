
class Persona{
    constructor(nombre,apellido,dni,usuario,pass,comision){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.usuario = usuario;
        this.pass = pass;
        this.comision = comision;
    }
    mostrarDatos(){
        document.write(`Nombre: ${this.nombre} 
        <br> Apellido ${this.apellido}
        <br> DNI: ${this.dni}
        <br> Usuario: ${this.usuario}
        <br> Pass ${this.pass}
        <br> Comision ${this.comision}`);
    }
    MostrarNombreCompleto(){
        document.write(`Nombre: ${this.nombre} Apellido: ${this.apellido}`)
    }
    //Propiedades conmutadas getters y setters

    get mostrarUsuario(){
        return this.usuario
    }

    get mostrarComision(){
        return this.comision
    }
    set modificarDni(nuevoDni){
        this.dni = nuevoDni;
    }
    set midificarCoision(nuevaComision){
        this.comision = nuevaComision;
    }

}

class Alumno extends Persona{
    constructor(nombre,apellido,dni,usuario,pass,comision,legajo,curso){
        super(nombre,apellido,dni,usuario,pass,comision);
        this.legajo = legajo;
        this.curso = curso;
    }
}

let lily = new Persona ("Lilly","Cerda",32458697,"Lcerda","ContraLily2356","17i");
console.log(lily)
lily.mostrarDatos();

let jonathan = new Alumno("Jhonathan","Singh",25986875,"Jsingh","62fafdadf","17i",4578,"FullStack");

jonathan.mostrarDatos()
