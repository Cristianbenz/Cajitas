class Inventario{
    constructor(){
        this.contendedor = document.querySelector('#inventarioContenedor');
        this.actualizarInventario();
    }
    actualizarInventario(){
        const OBTENER_INVENTARIO = sessionStorage.getItem('inventario');
        const INVENTARIO_JSON = JSON.parse(OBTENER_INVENTARIO);
        this.imprimirInventario(INVENTARIO_JSON);
    }
    imprimirInventario(inventario){
        inventario.forEach((articulo) => {
            this.contendedor.innerHTML = `
            <img src="${articulo.img}">
            ${articulo.price}
            `
        })
    }
}