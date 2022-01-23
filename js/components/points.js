class Puntos {
    constructor() {
        this.button = document.querySelector('#addPoints');
        this.node = document.querySelector('#puntos');
        this.addButton();
    }
    addButton() {
        const ADD_ACTION = $(this.button).click(this.addPointsPopup.bind(this));
    }
    addPointsPopup() {
        const ADD_POPUP = document.createElement('div');
        const ADD_POPUP_HTML = ADD_POPUP.innerHTML = `
        <form id='addPointsform' action="">
            <label for="points">¿Cuantos puntos desea agregar?</label>
            <input id='addPointsInput' type="number" name="points" id="points">
            <button>Agregar</button>
        </form>
        `;
        const SHOW_ADD_POPUP = this.node.append(ADD_POPUP);
        const ADD_FORM_CLASSES = $(addPointsform).addClass('addPopup--size addPopup--position addPopup--layout');
        this.agregarPuntos();
    }
    agregarPuntos() {
        const ADD_EVENT = $('#addPointsform').submit((event) => {
            event.preventDefault();
            const INPUT_POINTS = $(addPointsInput).val();
            points += parseFloat(INPUT_POINTS);
            this.actualizarPuntos(points);
        })
    }
    actualizarPuntos(cambios) {
        const STORAGE_POINTS = sessionStorage.setItem('points', cambios)
        this.node.innerHTML = `${cambios}`;
    }
}

let points = JSON.parse(sessionStorage.getItem('points')) || 0;