class Puntos {
    constructor() {
        this.button = document.querySelector('#addPoints');
        this.addButton();
        this.node = document.querySelector('#puntos');
    }
    addButton(){
        const ADD_ACTION = this.button.addEventListener('click', this.agregarPuntos);
    }
    agregarPuntos(){
        const POINTS_NODE = document.querySelector('#puntos');
        let puntosPregunta = prompt('¿Cuantos puntos desea agregar?');
        while(puntosPregunta == '' || isNaN(puntosPregunta)){
            puntosPregunta = prompt('¿Cuantos puntos desea agregar?');
        }
        points += parseInt(puntosPregunta);
        const STORAGE_POINTS = sessionStorage.setItem('points', points);
        POINTS_NODE.innerHTML = `${points}`;
    }
    actualizarPuntos(cambios){
        const STORAGE_POINTS = sessionStorage.setItem('points', cambios)
        this.node.innerHTML = `${cambios}`;
    }
}

let points = sessionStorage.getItem('points') || 0;