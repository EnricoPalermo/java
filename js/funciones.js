//funciones

function aumento(){
    let disney = 385
    let inflacion = 150
    document.write("Valor total del servico Disney plus $ " + (disney + inflacion))
}
// funcion con parametros 
function actualizar(monto, producto, precio){
    let calcular = precio + monto
    document.write("<br> el producto: " + producto + " cuesta: $"+ calcular)
}

// funciones con retorno de valor 

// function convertirDolaresPesos(precioDolar){
//     let total = precioDolar * 184;
//     return total //ultima linea de la funcion con retorno
// }


// invocar funcion


//let coeficienteinflacion = parseInt(prompt("ingrese valor de inflacion"))

//actualizar(coeficienteinflacion,"Teclado HyperX", 9000)



// document.write(`<br> Producto iphone - precio ${iphone} (producto nuevo)`)
// document.write(`<br> Producto PS5 - precio $`+ convertirDolaresPesos(500)+`(ultima version)`)

// funciones en forma de flecha =>

let convertirDolaresPesos = (precioDolar) => {
    let total = precioDolar * 184;
    return total
}
let iphone = convertirDolaresPesos(1200)
document.write(`<br> Producto iphone - precio ${iphone} (producto nuevo)`)
document.write(`<br> Producto PS5 - precio $`+ convertirDolaresPesos(500)+`(ultima version)`)
