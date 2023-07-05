//BIENVENIDOS
alert('Bienvenido a TodoMates!')

const comprarProductos = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do {
       producto = prompt('¿Deseas comprar Mate+bombilla, yerba o ambas?')
       cantidad = parseInt(prompt('¿Cuantos deseas comprar?'))
     
       while (Number.isNaN(cantidad) || cantidad === 0 || cantidad <= 0) {
         alert('Por favor ingresar cantidad mayor a 0')
         cantidad = parseInt(prompt('¿Cuantos deseas comprar?'))
    }
     
       switch (producto) {
        case 'Mate+bombilla':
            precio = 6500
        break;
        case 'yerba':
            precio = 1100
        break;
        case 'ambos':
            precio = 7600
        break;
        default:
            alert('Ingresaste un dato incorrecto')
            precio = 0
            cantidad = 0
    }
        
     subtotal += precio * cantidad

       seguirComprando = confirm('Para seguir comprando presione "Aceptar"')
    } while (seguirComprando);

    return subtotal
}

let total = comprarProductos()

 
alert ('TOTAL A COMPRAR'  +total)

