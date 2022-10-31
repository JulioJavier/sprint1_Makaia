const titulo = document.getElementById('titulo')
const username = document.getElementById('username')
const password = document.getElementById('password')
const denominacionAdmin = document.getElementById('denominacionAdmin')
const cantidadAdmin = document.getElementById('cantidadAdmin')
const button = document.getElementById('button')

if (titulo.outerText === "Administrador") {
       const buttonMod = document.getElementById('buttonMod')
       const buttonInv = document.getElementById('buttonInv')
       const buttonIni = document.getElementById('buttonIni')
       buttonMod.addEventListener('click', (Mod) =>{
        Mod.preventDefault()
        let tipoBillete= parseInt(denominacionAdmin.value)
        let cantidadBillete = parseInt(cantidadAdmin.value)
            console.log(tipoBillete)
            console.log(cantidadBillete)
        const dataAdmin = {
            tipoBillete : cantidadBillete
        }


        if (tipoBillete === 5000 || tipoBillete == 10000 || tipoBillete == 20000 || tipoBillete == 50000 || tipoBillete == 100000) {
            console.log("DataAdmin" + dataAdmin)
            swal(denominacionAdmin.value , "Ingresados", "success");
            ingresarBilletes(tipoBillete,cantidadBillete)
        } else{
            swal("Error" , "El Valor Ingresados es incorrecto", "error");
        }
    })
    
    buttonInv.addEventListener('click', (inv) =>{
        inv.preventDefault()
        console.log("Mi inventario")
        swal("Inventario " , "", "success");
        let tipoBillete  = parseInt(denominacionAdmin.value) 
        let cantidadBillete  = parseInt(cantidadAdmin.value) 
        mostrarBilletes(tipoBillete, cantidadBillete) 
    })
    buttonIni.addEventListener('click', (ini) =>{
        ini.preventDefault()
        console.log("Inicio")
        location.href="./index.html"
    })

    
}
    else if (titulo.outerText === "Inicio") {
        button.addEventListener('click', (e) =>{
            e.preventDefault()
            const dataSesion = {
                username: username.value,
                password: password.value
            }
            authentication(dataSesion.username, dataSesion.password)
        })
    }   
    else if (titulo.outerText === "Clientes") {
        const buttonIni = document.getElementById('buttonIni')
        const buttonRetiro = document.getElementById('buttonRetiro')
        const retirar = document.getElementById('retirar')

        
        buttonIni.addEventListener('click', (ini) =>{
            ini.preventDefault()
            console.log("Inicio")
            location.href="./index.html"
        })
        
        buttonRetiro.addEventListener('click', (ret) =>{
            ret.preventDefault()
            const montoRetiro = retirar.value
            console.log("Retiro")
            console.log("Retirando " + montoRetiro)
            retiroDinero(montoRetiro)
            if (montoRetiro%5 != 0 ){
                console.log("Jodido")

            }
        })
    }   



// Administrador
let inventarioCajero = [

];
console.log(inventarioCajero)
function ingresarBilletes(tipoBillete,cantidadBillete){
    console.log("Ingresando "+tipoBillete +" "+ cantidadBillete )
    let caja = {tipoBillete : cantidadBillete }
    inventarioCajero.push(caja)
}

let Cantbillele5 = parseInt(0)
let Cantbillele10 = parseInt(0)
let Cantbillele20 = parseInt(0)
let Cantbillele50 = parseInt(0)
let Cantbillele100= parseInt(0)
let totalNeto = parseInt(Cantbillele5 + Cantbillele10 + Cantbillele20 + Cantbillele50 + Cantbillele100)

function mostrarBilletes(tipoBillete,cantidadBillete){
    console.log("Mostrar Billetes del cajero")
    // for (let i = 0; i < inventarioCajero.length; i++) {
        let valorB = inventarioCajero[tipoBillete] = tipoBillete;
        let cantidadB = inventarioCajero[cantidadBillete] = cantidadBillete;

        console.log("Cant "+cantidadB)
        console.log("Val "+valorB)
        if (valorB === 5000) {
            if (Cantbillele5 > 0){
                Cantbillele5 += cantidadB
            }else{
                Cantbillele5 = cantidadB
            }
        }else if(valorB === 10000){
            Cantbillele10 = cantidadB
        }else if (valorB === 20000){
            Cantbillele20 = cantidadB
        }else if (valorB === 50000){
            Cantbillele50 = cantidadB
        }else if (valorB === 100000){
            Cantbillele100 = cantidadB
        }
    // }
        
    if (Cantbillele5 === 0 && Cantbillele10 === 0 && Cantbillele20 === 0 && Cantbillele50 === 0 && Cantbillele100 === 0) {
        swal("¡Alerta!", "Cajero en mantenimiento, vuelva pronto", "warning");
     }
    console.log("Billete Valor: 5000 Cantidad: " + Cantbillele5 + " billetes con total de:" + 5000*Cantbillele5)
    console.log("Billete Valor: 10000 Cantidad: " + Cantbillele10 + " billetes con total de:" + 10000*Cantbillele10)
    console.log("Billete Valor: 20000 Cantidad: " + Cantbillele20 + " billetes con total de:" + 20000*Cantbillele20)
    console.log("Billete Valor: 50000 Cantidad: " + Cantbillele50 + " billetes con total de:" + 50000*Cantbillele50)
    console.log("Billete Valor: 100000 Cantidad: " + Cantbillele100 + " billetes con total de:" + 100000*Cantbillele100)
    console.log("La Suma Total de todos los billetes es: " + totalNeto)
    
    console.log("Local Sto clave " + localStorage.getItem(valorB));
}


// autenticacion
function authentication(username, password){
    
    console.log("User Ingresado: " + username)
    console.log("password Ingresado: " + password)
    let docValue = users.find(doc =>{
        return doc.documento === username
    });

    let passValue = users.find(pass =>{
        return pass.password == password
    })
    if (docValue != undefined && passValue != undefined) { // tipo de valor de los objetos
        if ("ADMIN" === docValue.documento && "ADMIN" === passValue.password){ //es ADMIN
            console.log("Bienvenido " + docValue.nombre.toUpperCase() , "Sesion Iniciada")
            //swal("Bienvenido " + docValue.nombre.toUpperCase() , "Sesion Iniciada", "success"); 
            location.href="./administrador.html"

        } else if(username === docValue.documento && password === passValue.password){ //es CLIENTE
            console.log("Bienvenido " + docValue.nombre.toUpperCase() , "Sesion Iniciada")
           // swal("Bienvenido " + docValue.nombre.toUpperCase() , "Sesion Iniciada", "success");
            location.href="./clientes.html"
        }
    } else{
        swal("Error", "Usuario no existe!", "error");
    }
} 



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


// Retiro Cliente

let billetes100_entregado = 0
let billetes50_entregado = 0
let billetes20_entregado = 0
let billetes10_entregado = 0
let billetes5_entregado = 0

function retiroDinero(monto){
    let divisionBilletes =parseInt( monto/5000)

    Cantbillele5 = parseInt(1000)
    Cantbillele10 = parseInt(1000)
    Cantbillele20 = parseInt(1000)
    Cantbillele50 = parseInt(1000)
    Cantbillele100= parseInt(1000)

    console.log(divisionBilletes + " Billetes de 5000")
    if (Cantbillele5 === 0 && Cantbillele10 === 0 && Cantbillele20 === 0 && Cantbillele50 === 0 && Cantbillele100 === 0){     
        swal("¡Alerta!", "Cajero en mantenimiento, vuelva pronto", "warning");
    } else{
        while (divisionBilletes != 0) {
            console.log("Computando")
            if (Cantbillele100 >= 1 && divisionBilletes >= 20) {
                console.log("Billetes de 100")
                billetes100_entregado += 1
                divisionBilletes = divisionBilletes - 20
            } 
            if (Cantbillele50 >= 1 && divisionBilletes >= 10) {
                console.log("Billetes de 50")
                billetes50_entregado += 1
                divisionBilletes = divisionBilletes - 10
            }
            if (Cantbillele20 >= 1 && divisionBilletes >= 5){
                console.log("Billetes de 20")
                billetes20_entregado += 1
                divisionBilletes = divisionBilletes - 5
            }
            if (Cantbillele10 >= 1 && divisionBilletes >= 2) {
                console.log("Billetes de 10")
                billetes10_entregado += 1
                divisionBilletes = divisionBilletes - 2
            }
            if (Cantbillele5 >= 1 && divisionBilletes >= 1) {
                console.log("Billetes de 5")
                billetes5_entregado += 1
                divisionBilletes = divisionBilletes - 1
            }
        }

    }

    console.log("Fueron Entregados " + billetes100_entregado + " Billetes de 100 mil" )
    console.log("Fueron Entregados " + billetes50_entregado + " Billetes de 50 mil" )
    console.log("Fueron Entregados " + billetes20_entregado + " Billetes de 20 mil" )
    console.log("Fueron Entregados " + billetes10_entregado + " Billetes de 10 mil" )
    console.log("Fueron Entregados " + billetes5_entregado + " Billetes de 5 mil" )
    swal("¡Retiro Exitoso!", "Gracias por utlizar nuestros servicios", "success");

    timeout = "15000"
    setTimeout(() => {       
        location.href="./index.html"
    }, timeout);
    
}
