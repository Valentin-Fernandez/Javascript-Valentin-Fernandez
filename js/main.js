function agregar(Lista) {
    alert('A continuacion se van a cargar los datos a la Lista')
    p = prompt('Producto: ')
    precio = prompt('Precio: ')
    preciopublico = prompt('Precio publico: ')
    s = prompt('Stock: ')
    Lista.push({
        Producto: p,
        PrecioStock: parseInt(precio),
        PrecioPublico: parseInt(preciopublico),
        Stock: parseInt(s)
    })
}

function main() {
    alert('Lista de precios')
    let Lista = [
        {
            Producto: 'Heladera',
            PrecioStock: 250000,
            PrecioPublico: 300000,
            Stock: Math.round( Math.random() * 30 )
        },
        {
            Producto: 'Lavarropas',
            PrecioStock: 180000,
            PrecioPublico: 250000,
            Stock: Math.round( Math.random() * 30 )
        }
    
    ]
    let opcion = 0;
    while(opcion != 6) {
        console.log('1- MOSTRAR TODOS LOS PRODUCTOS A LA VENTA')
        console.log('2- AGREGAR PRODUCTOS A LA LISTA')
        console.log('3- BUSQUEDA DE UN ELEMENTO')
        console.log('4- BUSCAR PRODUCTOS MENORES A')
        console.log('5- ORDENAR PRECIO')
        console.log('6- SALIR')
        opcion = prompt('Ingrese una opcion: ')
        
        switch(opcion) {
            case '1':
                const ListaProductos = Lista.map(item => item.Producto)
                console.log(ListaProductos)
                break;
            case '2':
                let cantidad = prompt('Cuantos productos desea agregar a la lista?')
                for (let i = 1; i <= cantidad; i += 1)
                    agregar(Lista)
                break;
            case '3':

                break;
            case '4':

                break;
                
            case '5':

                break;
            case '6':
                console.log('Gracias por usar el programa')
                break;
            default:
                console.log('Opcion no valida...')
                break;
        
        }
    }
}

main()