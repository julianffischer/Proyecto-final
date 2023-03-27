// Funcion ubicada en los botones para redirigir:
function hacerClick (){
    window.location.replace("./secciones/PaginaCompra.html");
}
// Api de dolar 
const criptoYa = "https://criptoya.com/api/dolar";

let Precio = document.getElementById("Precio");

// Objetos de vehiculos
const fordMondeo = {
    Vehiculo:"Ford Mondeo",
    Modelo: "2017",
    TipoDeCaja: "Automatica",
    Costo: setInterval( ()=> {
        // Fetch que utiliza una api del dolar oficial para poder cotizar el vehiculo en tiempo real.
    fetch(criptoYa)
        .then(response => response.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
            Precio.innerHTML = `<p>PRECIO $ ${oficial * 40000} </p>`
        })
        .catch(error => console.error(error))
}, 3000)
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
const billetera = document.getElementById ("cartera")
let valor = document.querySelector ("#valor")
valor =  1000000
document.querySelector ("#valor").innerHTML = valor

// Ford mondeo con implementación JSON
let fordMondeoJson = JSON.stringify (fordMondeo);
localStorage.setItem ("fordMondeo", fordMondeoJson);


// Boton de compra pagina ( paginaCompras.html )
const botonCompra = document.getElementById("boton-confirmar")

// Evento con condicional que indica si la compra pudo realizarse o no. 

botonCompra.addEventListener ("click", () => {
    if (valor>fordMondeo.Costo){
        Swal.fire({
            title: 'Tu compra se a realizado con exito',
            text: '¡Esperamos que lo disfrutes!',
            imageUrl: 'https://www.megautos.com/wp-content/uploads/2022/01/Ford-Mondeo-2022-render-lateral.jpg',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'AutofordMondeo',
          })

            botonCompra.style.backgroundColor = 'green',
            botonCompra.style.width = '80px',
            botonCompra.style.heigth = '80px',
            botonCompra.style.borderRadius= '999px',
            botonCompra.style.border= 'none',
            botonCompra.style.boxShadow = '3px 4px 12px 4px rgba(68, 68, 68,0.5)',
            document.getElementById("boton-confirmar").innerHTML = "✔",
            console.log ("Pudo realizar la compra del :" + fordMondeoJson)
            
            function PagoDeVehiculo () {
                resultado = valor - fordMondeo.Costo;
                return resultado 
            }          
            document.querySelector ("#valor").innerHTML = PagoDeVehiculo()
            localStorage.setItem ("nuevoMonto", PagoDeVehiculo())
    }
    else //no pude hacer que el codigo no se siga ejecutando 
    { 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo a salido mal.',
            footer: 'Vuelve a intentarlo luego de unos minutos...'
          })
        botonCompra.style.backgroundColor = 'red',
        botonCompra.style.width = '80px',
        botonCompra.style.heigth = '80px',
        botonCompra.style.borderRadius= '999px',
        botonCompra.style.border= 'none',
        botonCompra.style.boxShadow = '3px 4px 12px 4px rgba(68, 68, 68,0.5)',
        document.getElementById("boton-confirmar").innerHTML = "❌"}
        console.log ("No pudo realizar la compra del vehiculo")
       
    })  
// AJAX

$.ajax({
    url: 'https://example.com/api/data',
    method: 'GET',
    success: function(data) {
      console.log('Data received:', data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error:', textStatus, errorThrown);
    }
  });
  






    
    
    
    
    