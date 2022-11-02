const username = document.getElementById('username')
const password = document.getElementById('password')
let flagAdmin = false
let flagCliente = false
button.addEventListener('click', (e) => {
    e.preventDefault()
    const dataSesion = {
        username: username.value,
        password: password.value
    }
    authentication(dataSesion.username, dataSesion.password)
})




let users = [
    {
        "nombre": "administrador",
        "documento": "ADMIN",
        "password": "ADMIN"
    },
    {
        "nombre": "carlos",
        "documento": "123",
        "password": "123"
    }
];

// let SolicitudUser = prompt("Digita tu usuario")
// let SolicitudPassword = prompt("Digita tu contraseña")

function authentication(user, password) {
    console.log("User Ingresado: " + user)
    console.log("Password Ingresado: " + password)

    let docValue = users.find(doc => {
        return doc.documento === user
    });

    let passValue = users.find(pass => {
        return pass.password == password
    })
    console.log(docValue)
    console.log(passValue)
    if (docValue != undefined && passValue != undefined) { // tipo de valor de los objetos
        if ("ADMIN" === docValue.documento && "ADMIN" === passValue.password) { //es ADMIN
            console.log("Bienvenido " + docValue.nombre.toUpperCase(), "Sesion Iniciada")
            //swal(docValue.nombre.toUpperCase() , "Sesion Iniciada", "success"); 
            flagAdmin = true
            administrator()
        } else if (user === docValue.documento && password === passValue.password) { //es CLIENTE
            console.log("Bienvenido " + docValue.nombre.toUpperCase(), "Sesion Iniciada")
            flagCliente = true
            dineroAretirar()
            //swal("Bienvenido " + docValue.nombre.toUpperCase() , "Sesion Iniciada", "success");
        }
    } else {
        swal("Error", "Usuario no existe!", "error");
    }
}


// Administrador
function administrator() {
    if (flagAdmin === true) {
        let opcion = parseInt(prompt("Digita 1 para ingresar dinero, 2 para ingresar usuarios"))
        console.log("Escogiste la opcion: " + opcion)
        if (opcion === 2) {
            addUsers()
        } else if (opcion === 1) {
            digitarBilletes()
        }

    }

}

function addUsers() {
    let addName = prompt("Digita el nombre del Usuario")
    let addUser = prompt("Digita el documento del Usuario")
    let addPassword = prompt("Digita la contraseña del Usuario")
    console.log("Ingresando User " + addUser + " con contraseña: " + addPassword)
    let IngresarDatos = {
        "nombre": addName,
        "documento": addUser,
        "password": addPassword
    }
    users.push(IngresarDatos)
    console.log(users)
    let ingresarMasUsuarios = prompt("¿Vas a ingresar mas usuarios? responde Si o No").trim().toLowerCase()
    if (ingresarMasUsuarios == "si") {
        addUsers()
    } else {
        swal("Muy Bien", "Todos los usuarios fueron creados", "success");
        flagAdmin = false
    }
}

function digitarBilletes() {
    //&let tipoBillete = parseInt(prompt("Digita el valor del billete"))
    let cantidadBillete5 = parseInt(prompt("Digita las cantidad de billetes de 5.000 que vas ingresar"))
    let cantidadBillete10 = parseInt(prompt("Digita las cantidad de billetes de 10.000 que vas ingresar"))
    let cantidadBillete20 = parseInt(prompt("Digita las cantidad de billetes de 20.000 que vas ingresar"))
    let cantidadBillete50 = parseInt(prompt("Digita las cantidad de billetes de 50.000 que vas ingresar"))
    let cantidadBillete100 = parseInt(prompt("Digita las cantidad de billetes de 100.000 que vas ingresar"))
    addBilletes(cantidadBillete5, cantidadBillete10, cantidadBillete20, cantidadBillete50, cantidadBillete100)
}

function addBilletes(cantidadBillete5, cantidadBillete10, cantidadBillete20, cantidadBillete50, cantidadBillete100) {
    console.log("Ingresando " + cantidadBillete5 + " Billetes de 5.000")
    console.log("Ingresando " + cantidadBillete10 + " Billetes de 10.000")
    console.log("Ingresando " + cantidadBillete20 + " Billetes de 20.000")
    console.log("Ingresando " + cantidadBillete50 + " Billetes de 50.000")
    console.log("Ingresando " + cantidadBillete100 + " Billetes de 100.000")
    let caja5 = {
        "valor": 5000,
        "cantidad": cantidadBillete5
    }
    let caja10 = {
        "valor": 10000,
        "cantidad": cantidadBillete10
    }
    let caja20 = {
        "valor": 20000,
        "cantidad": cantidadBillete20
    }
    let caja50 = {
        "valor": 50000,
        "cantidad": cantidadBillete50
    }
    let caja100 = {
        "valor": 100000,
        "cantidad": cantidadBillete100
    }
    dineroEnCaja.push(caja5, caja10, caja20, caja50, caja100)
    console.log(dineroEnCaja)
    let ingresarMasDinero = prompt("¿Guardar datos ingresados? responde Si o No?").trim().toLowerCase()
    if (ingresarMasDinero == "si") {
        swal("Dinero Cargado", "Vuelve a iniciar sesion", "success");
        flagAdmin = false
        informacionCaja()
    } else {
        digitarBilletes()
    }
}

// function addBilletes(){
//     let tipoBillete =parseInt(prompt("Digita el valor del billete"))
//     if (tipoBillete === 5000 || tipoBillete === 10000 || tipoBillete === 20000 || tipoBillete === 50000 || tipoBillete === 100000){
//         let cantidadBillete =parseInt(prompt("Digita el cantidad de billetes"))
//         console.log("Ingresando "+ tipoBillete +" "+ cantidadBillete )
//         let caja = {
//             "valor" : tipoBillete,
//             "cantidad" : cantidadBillete 
//         }
//         dineroEnCaja.push(caja)
//         console.log(dineroEnCaja)
//         let ingresarMasDinero = prompt("¿Vas a ingresar mas Dinero? responde Si o No").trim().toLowerCase()
//         if (ingresarMasDinero == "si"){
//             addBilletes()
//         }else{    
//             swal("Muy Bien", "El dinero fue cargado exitosamente", "success"); 
//         }
//     }else{ 
//         swal("Error", "El valor del billete no es admitido", "error");
//         addBilletes()
//     }
//     informacionCaja()
// }

let totalBillete5 = 0
let totalBillete10 = 0
let totalBillete20 = 0
let totalBillete50 = 0
let totalBillete100 = 0
let totalDineroEnCaja = 0

let cantTotalBillete5 = 0
let cantTotalBillete10 = 0
let cantTotalBillete20 = 0
let cantTotalBillete50 = 0
let cantTotalBillete100 = 0
let cantTotalDineroEnCaja = 0


function informacionCaja() {
    let valor5000 = 5000
    let valor10000 = 10000
    let valor20000 = 20000
    let valor50000 = 50000
    let valor100000 = 100000

    let billete5 = dineroEnCaja.find(v => {
        return v.valor === valor5000
    })
    let billete10 = dineroEnCaja.find(v => {
        return v.valor === valor10000
    })
    let billete20 = dineroEnCaja.find(v => {
        return v.valor === valor20000
    })
    let billete50 = dineroEnCaja.find(v => {
        return v.valor === valor50000
    })
    let billete100 = dineroEnCaja.find(v => {
        return v.valor === valor100000
    })

    cantTotalBillete5 = billete5.cantidad
    cantTotalBillete10 = billete10.cantidad
    cantTotalBillete20 = billete20.cantidad
    cantTotalBillete50 = billete50.cantidad
    cantTotalBillete100 = billete100.cantidad

    totalBillete5 = billete5.valor * billete5.cantidad
    totalBillete10 = billete10.valor * billete10.cantidad
    totalBillete20 = billete20.valor * billete20.cantidad
    totalBillete50 = billete50.valor * billete50.cantidad
    totalBillete100 = billete100.valor * billete100.cantidad
    totalDineroEnCaja =parseInt(totalBillete5 + totalBillete10 + totalBillete20 + totalBillete50 + totalBillete100)
    console.log("Cajero con " + billete5.cantidad + " Billetes de " + billete5.valor + " para un total de: " + totalBillete5)
    console.log("Cajero con " + billete10.cantidad + " Billetes de " + billete10.valor + " para un total de: " + totalBillete10)
    console.log("Cajero con " + billete20.cantidad + " Billetes de " + billete20.valor + " para un total de: " + totalBillete20)
    console.log("Cajero con " + billete50.cantidad + " Billetes de " + billete50.valor + " para un total de: " + totalBillete50)
    console.log("Cajero con " + billete100.cantidad + " Billetes de " + billete100.valor + " para un total de: " + totalBillete100)
    console.log("El monto total en el cajero es: " + totalDineroEnCaja)
}

let dineroEnCaja = [

]

let cociente100 = 0
let residuo100 = 0
let cociente50 = 0
let residuo50 = 0
let cociente20 = 0
let residuo20 = 0
let cociente10 = 0
let residuo10 = 0
let cociente5 = 0
function dineroAretirar() {
    if (flagCliente = true && dineroEnCaja.length != 0) {
        console.log("length: " + dineroEnCaja.length)
        let montoAretirar = parseInt(prompt("Ingresar Monto a retirar en multiplos de 5000"))
        console.log("Quieres retirar " + montoAretirar)
        let moduloMontoAretirar = montoAretirar % 5000
        console.log(moduloMontoAretirar)
        if (moduloMontoAretirar != 0 || montoAretirar < 0) {
            console.log("Digita una cantidad positiva y en multiplos de 5000")
            alert("Digita una cantidad positiva y en multiplos de 5000")
            dineroAretirar()
        }
        clientes(montoAretirar)
    } else {
        flagCliente = false
        swal("Error", "Cajero en mantenimiento, vuelva pronto.", "error");
    }
}

// function clientes(montoAretirar) {
//     cociente100 = montoAretirar / 100000
//     residuo100 = montoAretirar % 100000
//     cociente50 = residuo100 / 50000
//     residuo50 = residuo100 % 50000
//     cociente20 = residuo50 / 20000
//     residuo20 = residuo50 % 20000
//     cociente10 = residuo20 / 10000
//     residuo10 = residuo20 % 10000
//     cociente5 = residuo10 / 5000

//     console.log("Billetes de 100 mil necesita: " + parseInt(cociente100))
//     console.log("Billetes de 50 mil necesita: " + parseInt(cociente50))
//     console.log("Billetes de 20 mil necesita: " + parseInt(cociente20))
//     console.log("Billetes de 10 mil necesita: " + parseInt(cociente10))
//     console.log("Billetes de 5 mil necesita: " + parseInt(cociente5))
//     alert("Transaccion Exitosa");
//     let hacerMasRetiros = prompt("¿Vas a hacer otro retiro? responde Si o No").trim().toLowerCase()
//     if (hacerMasRetiros == "si") {
//         dineroAretirar()
//     }
//     else {
//         flagCliente = false
//         swal("Sesion Cerrada", "inicia sesion nuevamente", "info");
//     }

// }


function clientes(montoAretirar) {
    console.log("montoAretirar " + montoAretirar)
    console.log("totalDineroEnCaja " + totalDineroEnCaja)
    let totalAretirar = montoAretirar
    if (montoAretirar <= totalDineroEnCaja) {

        if (montoAretirar >= 100000 && montoAretirar / 100000 <= cantTotalBillete100) {
            cociente100 = montoAretirar / 100000
            montoAretirar -= (100000 * cociente100)
            cantTotalBillete100 -= cociente100
        }
        if (montoAretirar >= 50000 && montoAretirar / 50000 <= cantTotalBillete50) {
            cociente50 = montoAretirar / 50000
            montoAretirar -= (50000 * cociente50)
            cantTotalBillete50 -= cociente50
        }
        if (montoAretirar >= 20000 && montoAretirar / 20000 <= cantTotalBillete20) {
            cociente20 = montoAretirar / 20000
            montoAretirar -= (20000 * cociente20)
            cantTotalBillete20 -= cociente20
        }
        if (montoAretirar >= 10000 && montoAretirar / 10000 <= cantTotalBillete10) {
            cociente10 = montoAretirar / 10000
            montoAretirar -= (10000 * cociente10)
            cantTotalBillete10 -= cociente10
        }
        if (montoAretirar >= 5000 && montoAretirar / 5000 <= cantTotalBillete5) {
            cociente5 = montoAretirar / 5000
            montoAretirar -= (5000 * cociente5)
            cantTotalBillete5 -= cociente5
        } else if (montoAretirar >= 5000 && montoAretirar / 5000 >= cantTotalBillete5) {
            swal("Error", "El cajero no tiene el monto solicitado", "error");
        }
    
        console.log("Billetes de 100 mil necesita: " + parseInt(cociente100))
        console.log("Billetes de 50 mil necesita: " + parseInt(cociente50))
        console.log("Billetes de 20 mil necesita: " + parseInt(cociente20))
        console.log("Billetes de 10 mil necesita: " + parseInt(cociente10))
        console.log("Billetes de 5 mil necesita: " + parseInt(cociente5))
        
        alert("Transaccion Exitosa");
        let hacerMasRetiros = prompt("¿Vas a hacer otro retiro? responde Si o No").trim().toLowerCase()
        if (hacerMasRetiros == "si") {
            dineroAretirar()
        }
        else {
            let totalCajero = totalDineroEnCaja - totalAretirar
            flagCliente = false
            console.log("El Cajero quedo con: " + cantTotalBillete5 + " Billetes de 5.000 para un total de: " + 5000*cantTotalBillete5)
            console.log("El Cajero quedo con: " + cantTotalBillete10 + " Billetes de 10.000 para un total de: " + 10000*cantTotalBillete10)
            console.log("El Cajero quedo con: " + cantTotalBillete20 + " Billetes de 20.000 para un total de: " + 20000*cantTotalBillete20)
            console.log("El Cajero quedo con: " + cantTotalBillete50 + " Billetes de 50.000 para un total de: " + 50000*cantTotalBillete50)
            console.log("El Cajero quedo con: " + cantTotalBillete100 + " Billetes de 100.000 para un total de: " + 100000*cantTotalBillete100)
            console.log("El monto restante en el cajero es: " + totalCajero)
            swal("Sesion Cerrada", "inicia sesion nuevamente", "info");
        }
    }
    else {
        swal("Error", "El cajero no tiene el monto solicitado", "error");
    }

}