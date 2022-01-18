class Inventario{
    constructor(){
        this.contendedor = document.querySelector('#inventarioContenedor');
        this.actualizarInventario();
    }
    actualizarInventario(){
        const OBTENER_INVENTARIO = JSON.parse(sessionStorage.getItem('inventario')) || [];
        this.imprimirInventario(OBTENER_INVENTARIO);
    }
    imprimirInventario(inventario){
        inventario.forEach((articulo) => {
            this.contendedor.innerHTML += `
            <img src="${articulo.img}">
            ${articulo.price}
            `
        })
    }
}

let inventario = JSON.parse(sessionStorage.getItem('inventario')) || [];