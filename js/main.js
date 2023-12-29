let Lista = [
    {
        Producto: 'Heladera',
        PrecioStock: 250000,
        PrecioPublico: 300000,
        Stock: Math.round(Math.random() * 30)
    },
    {
        Producto: 'Lavarropas',
        PrecioStock: 180000,
        PrecioPublico: 250000,
        Stock: Math.round(Math.random() * 30)
    }
];

function mostrarProductos() {
    const listaProductos = Lista.map(item => `${item.Producto}: Precio $${item.PrecioPublico} - Stock ${item.Stock}`).join('<br>');
    document.getElementById('resultado').innerHTML = listaProductos;
}

function agregarProducto() {
    const producto = prompt('Ingrese el nombre del producto:');
    const precio = parseInt(prompt('Ingrese el precio del producto:'));
    const precioPublico = parseInt(prompt('Ingrese el precio público del producto:'));
    const stock = parseInt(prompt('Ingrese el stock del producto:'));

    Lista.push({
        Producto: producto,
        PrecioStock: precio,
        PrecioPublico: precioPublico,
        Stock: stock
    });

    mostrarProductos();
}

function buscarElemento() {
    x = prompt('Producto a buscar: ')
    let busqueda = Lista.find(item => item.Producto === x)
    if (busqueda) {
        alert(`Producto encontrado: ${busqueda.Producto}, Precio: $${busqueda.PrecioPublico}`);
    } else {
        alert('Producto no encontrado')
    }
}

function buscarMenoresA() {
    p = prompt('Ingrese el monto maximo a buscar $')
    let busquedap = Lista.filter(item => item.PrecioPublico < p)
    if (busquedap.length > 0) {
        let mensaje = ''
        busquedap.forEach(item => { mensaje += `${item.Producto}: Precio $${item.PrecioPublico}`});
        alert(mensaje);
    } else {
        alert('No se encontraron productos por debajo del monto especificado.');
    }
}

function ordenarPorPrecio() {
    Lista.sort((a, b) => a.PrecioPublico - b.PrecioPublico);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    Lista.forEach(item => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${item.Producto}: Precio $${item.PrecioPublico}`;
        resultadoElement.appendChild(productoDiv);
    });
}

function salir() {
    document.getElementById('resultado').textContent = 'Gracias por usar el programa';
}


document.getElementById('mostrarProductosBtn').addEventListener('click', mostrarProductos);
document.getElementById('agregarProductoBtn').addEventListener('click', agregarProducto);
document.getElementById('buscarElementoBtn').addEventListener('click', buscarElemento);
document.getElementById('buscarMenoresABtn').addEventListener('click', buscarMenoresA);
document.getElementById('ordenarPorPrecioBtn').addEventListener('click', ordenarPorPrecio);
document.getElementById('salirBtn').addEventListener('click', salir);