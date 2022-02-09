class Inicio {
    constructor() {
        this.acceso = sessionStorage.getItem('acceso');
        this.points = sessionStorage.getItem('points') || 0;
        this.username = sessionStorage.getItem('username');
        this.info = this.datoHtml();
        this.eliminarLogin();


    }
    eliminarLogin() {
        if (this.acceso === 'true') {
            const LOGIN_NODE = document.getElementById('loginNode');
            LOGIN_NODE.parentNode.removeChild(LOGIN_NODE);
            this.imprimirDatos();
        }
    }
    datoHtml() {
        return `<div class="items__text--style">
                    <p>Usuario: ${this.username}</p>
                    <div class="items__points--layout">
                        <p>Puntos: <span id="puntos" class="points__valor--text"> ${JSON.parse(this.points)} </span></p>
                        <button id="addPoints" class="points__btn--position"><img src="./img/mas.png" alt=""></button>
                    </div>
                </div>`;
    }
    imprimirDatos() {
        const MENU_NODE = document.getElementById('menuNode');
        const AGREGAR_NODO_LOGIN = document.createElement("article");
        AGREGAR_NODO_LOGIN.innerHTML = this.info;
        MENU_NODE.appendChild(AGREGAR_NODO_LOGIN);
        const PUNTELIS = new Puntos();

    }
}