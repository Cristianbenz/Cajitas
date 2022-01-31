class Inventario {
    constructor() {
        this.contendedor = document.querySelector('#inventarioContenedor');
        this.actionContainer = $('.inventario__acciones--size');
        this.invetarioEvents();
        this.actualizarInventario();
    }
    actualizarInventario() {
        const OBTENER_INVENTARIO = JSON.parse(sessionStorage.getItem('inventario')) || [];
        this.imprimirInventario(OBTENER_INVENTARIO);
    }
    imprimirInventario(inventario) {
        inventario.forEach((articulo) => {
            this.contendedor.innerHTML += `
            <div class='contenedor__object--size'>
                <img class='object__img--size' src="${articulo.img}">
                <p>Precio: ${articulo.price}</p>
            </div>
            `
        })
    }
    invetarioEvents() {
        const TARGETS = $(this.actionContainer).click((event) => {
            if (event.target.id === 'sellAll') {
                this.venderInventario();
            }
            if (event.target.id === 'withdraw') {
                this.withdraw();
            }
        })
    }
    venderInventario() {
        const PRECIO_TOTAL = inventario.reduce((total, precios) => total + precios.price, 0);
        points += PRECIO_TOTAL;
        const INVENTARIO_POINTS = new Puntos();
        INVENTARIO_POINTS.actualizarPuntos(points);
        const BORRAR_INVENTARIO = sessionStorage.setItem('inventario', JSON.stringify([]));
        $(this.contendedor).html([])
    }
}

let inventario = JSON.parse(sessionStorage.getItem('inventario')) || [];