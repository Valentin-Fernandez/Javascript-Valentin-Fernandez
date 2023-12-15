function agregar(Lista) {
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
            Producto: 'heladera',
            PrecioStock: 250000,
            PrecioPublico: 300000,
            Stock: Math.round( Math.random() * 30 )
        },
        {
            Producto: 'lavarropas',
            PrecioStock: 180000,
            PrecioPublico: 250000,
            Stock: Math.round( Math.random() * 30 )
        }
    
    ]
    let opcion = 0;
    while(opcion != 7) {
        console.log('1- MOSTRAR TODOS LOS PRODUCTOS A LA VENTA')
        console.log('2- AGREGAR PRODUCTOS A LA LISTA')
        console.log('3- BUSQUEDA DE UN ELEMENTO')
        console.log('4- BUSCAR PRODUCTOS MENORES AL PRECIO DE: $')
        console.log('5- ORDENAR MENOR A MAYOR POR STOCK')
        console.log('6- MOSTRAR TODA LA LISTA')
        console.log('7- SALIR')
        opcion = prompt('Ingrese una opcion: ')
        
        switch(opcion) {
            case '1':
                const ListaProductos = Lista.map(item => item.Producto)
                console.log(ListaProductos)
                break;
            case '2':
                let cantidad = prompt('Cuantos productos desea agregar a la lista?')
                alert('A continuacion se van a cargar los datos a la Lista')
                for (let i = 1; i <= cantidad; i += 1)
                    agregar(Lista)
                break;
            case '3':
                x = prompt('Producto a buscar: ')
                let busqueda = Lista.find(item => item.Producto === x)
                console.log(busqueda)
                break;
            case '4':
                p = prompt('Ingrese el monto maximo a buscar $')
                let busquedap = Lista.filter(item => item.PrecioPublico < p)
                console.table(busquedap)
                break;
            case '5':
                let ordenar = Lista.sort((a,b) => a.Stock - b.Stock);
                console.table(ordenar)
                break;
            case '6':
                console.table(Lista)
                break;
            case '7':
                console.log('Gracias por usar el programa...')
                break;
            default:
                console.log('Opcion no valida...')
                break;
        
        }
    }
}

main()