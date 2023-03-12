// Funcion ubicada en los botones para redirigir:
function hacerClick (){
    window.location.replace("../secciones/PaginaCompra.html");
}
// Objetos de vehiculos
const fordMondeo =       {
            Vehiculo:"Ford Mondeo",
            Modelo: "2017",
            TipoDeCaja: "Automatica",
            Costo: 6000000
        };
const fordTerritory =
        {
            Vehiculo:"Ford Territory",
            Modelo: "2020",
            TipoDeCaja: "Automatica",
            Costo: 9700000
        };
const fordKuga =
        {
            Vehiculo:"Ford Kuga",
            Modelo: "2017",
            TipoDeCaja: "Automatica",
            Costo: 7500000
        };
const fordRaptor =
        {
            Vehiculo:"Ford Raptor",
            Modelo: "2022",
            TipoDeCaja: "Automatica",
            Costo: 20900000
        };
const fordBronco = {
            Vehiculo:"Ford Bronco",
            Modelo: "2015",
            TipoDeCaja: "Manual",
            Costo: 17000000
}
const fordMaverick = {
            Vehiculo:"Ford Maverick",
            Modelo: "2022",
            TipoDeCaja: "Automatica",
            Costo:  22500000
};
// Valor de cartera que indica si la compra se puede realizar o no (Modificable)
let cartera = 25000000

// Ford maverick con implementación JSON
let fordMaverickJson = JSON.stringify (fordMaverick);
localStorage.setItem ("fordMaverick", fordMaverickJson);


// Boton de compra pagina ( paginaCompras.html )
const botonCompra = document.getElementById("boton-confirmar")

// Evento con condicional que indica si la compra pudo realizarse o no. 

botonCompra.addEventListener ("click", () => {
    if (cartera>fordMaverick.Costo){
            botonCompra.style.backgroundColor = 'green',
            botonCompra.style.width = '80px',
            botonCompra.style.heigth = '80px',
            botonCompra.style.borderRadius= '999px',
            botonCompra.style.border= 'none',
            botonCompra.style.boxShadow = '3px 4px 12px 4px rgba(68, 68, 68,0.5)',
            document.getElementById("boton-confirmar").innerHTML = "✔",
            console.log ("Pudo realizar la compra del vehiculo :" + fordMaverickJson)     
    }
    else //no pude hacer que el codigo no se siga ejecutando 
    { 
        botonCompra.style.backgroundColor = 'red',
        botonCompra.style.width = '80px',
        botonCompra.style.heigth = '80px',
        botonCompra.style.borderRadius= '999px',
        botonCompra.style.border= 'none',
        botonCompra.style.boxShadow = '3px 4px 12px 4px rgba(68, 68, 68,0.5)',
        document.getElementById("boton-confirmar").innerHTML = "❌"}
        console.log ("No pudo realizar la compra del vehiculo")
    })



    
    
    
    
    