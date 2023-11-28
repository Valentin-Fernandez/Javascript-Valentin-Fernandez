// Venta de productos

function calculoporcentajemas(precio,porcentaje) {
    preciototal = (precio * porcentaje / 100) + precio
    return preciototal 
}

function calculoporcentajemenos(precio,porcentaje) {
    preciototal = precio - (precio * porcentaje / 100)
    return preciototal
}

function calculoventas(){
    let cantidad = prompt('Cuantos productos desea comprar?')
    for(let i = 1; i <= cantidad; i += 1){
        let producto = prompt('Que producto desea comprar? Eliga la opcion numerica 1: Lavarropas 2: Heladera 3: Microondas 4: Televisor')
        let metodo_pago = prompt('Metodo de pago Eliga la opcion numerica 1: Efectivo 2: Tarjeta 3: Transferencia')
        if(producto == 1){
            console.log('Usted eligio el producto LAVARROPAS')
            let precio = 150000
            console.log('El precio de lista del producto es de $' + precio)
            console.log('----------------------------------------')
            if (metodo_pago == 1) {
                precio = calculoporcentajemenos(precio,10)
                console.log('Se aplica un descuento del 10% quedando el total en $' + precio)
                console.log('----------------------------------------') 
            } else if (metodo_pago == 2) {
                precio = calculoporcentajemas(precio,15)
                console.log('Se aplica un 15% mas quedando el total en $' + precio)
                console.log('----------------------------------------')
            } else {
                precio = precio
                console.log('Por transferencia queda en precio de lista de $' + precio)
                console.log('----------------------------------------')
            }
            let deseacomprar = prompt('Desea comprar? Eliga la opcion 1: SI 2: NO')
            if(deseacomprar == 1){
                console.log('Compra realizada con exito....')
            }else{
                console.log('Gracias por tu tiempo....')
            }
            
        }
        if(producto == 2){
            console.log('Usted eligio el producto HELADERA')
            let precio = 300000
            console.log('El precio de lista del producto es de $' + precio)
            console.log('----------------------------------------')
            if (metodo_pago == 1) {
                precio = calculoporcentajemenos(precio,10)
                console.log('Se aplica un descuento del 10% quedando el total en $' + precio)
                console.log('----------------------------------------') 
            } else if (metodo_pago == 2) {
                precio = calculoporcentajemas(precio,15)
                console.log('Se aplica un 15% mas quedando el total en $' + precio)
                console.log('----------------------------------------')
            } else {
                precio = precio
                console.log('Por transferencia queda en precio de lista de $' + precio)
                console.log('----------------------------------------')
            }
            let deseacomprar = prompt('Desea comprar? Eliga la opcion 1: SI 2: NO')
            if(deseacomprar == 1){
                console.log('Compra realizada con exito....')
            }else{
                console.log('Gracias por tu tiempo....')
            }
        }
        if(producto == 3){
            console.log('Usted eligio el producto MICROONDAS')
            let precio = 90000
            console.log('El precio de lista del producto es de $' + precio)
            console.log('----------------------------------------')
            if (metodo_pago == 1) {
                precio = calculoporcentajemenos(precio,10)
                console.log('Se aplica un descuento del 10% quedando el total en $' + precio)
                console.log('----------------------------------------') 
            } else if (metodo_pago == 2) {
                precio = calculoporcentajemas(precio,15)
                console.log('Se aplica un 15% mas quedando el total en $' + precio)
                console.log('----------------------------------------')
            } else {
                precio = precio
                console.log('Por transferencia queda en precio de lista de $' + precio)
                console.log('----------------------------------------')
            }
            let deseacomprar = prompt('Desea comprar? Eliga la opcion 1: SI 2: NO')
            if(deseacomprar == 1){
                console.log('Compra realizada con exito....')
            }else{
                console.log('Gracias por tu tiempo....')
            }
        }
        if(producto == 4){
            console.log('Usted eligio el producto TELEVISOR')
            let precio = 250000
            console.log('El precio de lista del producto es de $' + precio)
            console.log('----------------------------------------')
            if (metodo_pago == 1) {
                precio = calculoporcentajemenos(precio,10)
                console.log('Se aplica un descuento del 10% quedando el total en $' + precio)
                console.log('----------------------------------------') 
            } else if (metodo_pago == 2) {
                precio = calculoporcentajemas(precio,15)
                console.log('Se aplica un 15% mas quedando el total en $' + precio)
                console.log('----------------------------------------')
            } else {
                precio = precio
                console.log('Por transferencia queda en precio de lista de $' + precio)
                console.log('----------------------------------------')
            }
            let deseacomprar = prompt('Desea comprar? Eliga la opcion numerica 1: SI 2: NO')
            if(deseacomprar == 1){
                console.log('Compra realizada con exito....')
            }else{
                console.log('Gracias por tu tiempo....')
            }
        }
    }
    
    
}

calculoventas();