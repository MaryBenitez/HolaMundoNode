const saludar =( nombre ) => {

    let mensaje = `Saludos ${nombre}`; // 'Saludos ' + nombre
    return mensaje; 
}

let saludo = saludar('Marisol');
console.log(saludo);