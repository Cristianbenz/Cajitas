//Pedir user y edad, registrarlo si +18 ✅
//Ingresar fondos ✅
//Jugar segun puntos disponibles
//Dar objeto aleatorio
//Preguntar si vender o no
//Si lo guarda crear inventario

//CLASES
class Usuario {
    constructor(username, edad) {
        this.username = username;
        this.edad = edad;
    }
    validacion() {
        if (this.edad >= 18 && this.username != "") {
            window.location.href = "index.html";
            const GUARDAR_ACCESO = sessionStorage.setItem("acceso", true);
        } else {
            alert("Edad o usuario no valido")
        }
    }
    guardarDatos() {
        const GUARDAR_USERNAME = sessionStorage.setItem("username", this.username);
    }
}

class Caja {
    constructor(name, price, premio1, premio2, premio3, premio4, premio5) {
        this.name = name;
        this.price = price;
        this.premios = {
            premio1,
            premio2,
            premio3,
            premio4,
            premio5
        }

    }
    abrirCaja() {
        const AZAR = (probabilidad) => Math.round(Math.random() * probabilidad);
        const ABRIENDO = alert("Abirendo " + this.name + "...");
        if (AZAR(1000) == 1) {
            alert("Ganaste: " + this.premios.premio5.name);
            return this.premios.premio5;
        } else if (AZAR(100) == 1) {
            alert("Ganaste: " + this.premios.premio4.name);
            return this.premios.premio4;
        } else if (AZAR(10) == 1) {
            alert("Ganaste: " + this.premios.premio3.name);
            return this.premios.premio3;
        } else if ((AZAR(10) > 1) && (AZAR(10) < 7)) {
            alert("Ganaste: " + this.premios.premio2.name);
            return this.premios.premio2;
        } else {
            alert("Ganaste: " + this.premios.premio1.name);
            return this.premios.premio1;
        }
    }
    descuentoDePuntos() {
        puntos = puntos - this.price;
        ACTUALIZAR_FONDOS();
        alert("Ahora tienes: " + (puntos) + " puntos.");
    }
}

class Premio {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

//PREMIOS
const OSITO = new Premio("Osito", 30);
const STEAMGC = new Premio("Steam GiftCard", 90);
const AURIS = new Premio("Auriculares", 550);
const MOUSE_GAMER = new Premio("Mouse Logitech", 1500);
const JORDANS = new Premio("Air Jordans", 5000);
const CAMARA = new Premio("Camara Fotografica", 500);
const APPLE_WATCH = new Premio("Apple Watch", 1600);
const SMARTPHONE_SAMSUNG = new Premio("Smartphone Samsung", 2700);
const IPAD = new Premio("Ipad", 8000);
const MAC = new Premio("Mac", 15000);
const SMART = new Premio("Smart Tv", 6000);
const PS5 = new Premio("PS5", 8500);
const PC = new Premio("PC Gamer", 35000);
const OBJETO_NO_DEFINIDO = new Premio("Tilin", 70000);
const AUTO = new Premio("Audi rs7", 200000);

//CAJAS
const CAJA1 = new Caja("Caja 1", 500, OSITO, STEAMGC, AURIS, MOUSE_GAMER, JORDANS);
const CAJA2 = new Caja("Caja 2", 2400, CAMARA, APPLE_WATCH, SMARTPHONE_SAMSUNG, IPAD, MAC);
const CAJA3 = new Caja("Caja 3", 10000, SMART, PS5, PC, OBJETO_NO_DEFINIDO, AUTO);

const CAJAS = [CAJA1, CAJA2, CAJA3];

//INVENTARIO
const INVENTARIO = [];

//LOGIN
const DATOS = () => {
    const USERNAME_INPUT = document.getElementById("username");
    const AGE_INPUT = document.getElementById("age");
    const NUEVO_USUARIO = new Usuario(USERNAME_INPUT.value, AGE_INPUT.value);
    NUEVO_USUARIO.validacion();
    NUEVO_USUARIO.guardarDatos();
}

const ELIMINAR_LOGIN = () => {
    const OBTENER_ACCESO = sessionStorage.getItem("acceso");
    if (JSON.parse(OBTENER_ACCESO)) {
        const LOGIN_NODE = document.getElementsByClassName("login--node");
        const BORRAR_LOGIN = LOGIN_NODE[0].parentNode.removeChild(LOGIN_NODE[0]);
        IMPRIMIR_DATOS();
        ACTUALIZAR_FONDOS();

    }
}

const IMPRIMIR_DATOS = () => {
    const OBTENER_USERNAME = sessionStorage.getItem("username")
    const MENU_NODE = document.getElementsByClassName("menu--node");
    const AGREGAR_NODO_LOGIN = document.createElement("article");
    const IMPRIMIR_INFO = AGREGAR_NODO_LOGIN.innerHTML =
        `<div class="items__text--style">
            <p>Usuario: ${OBTENER_USERNAME}</p>
            <div class="items__points--layout">
                <p>Puntos: <span id="puntos" class="points__valor--text"> ${PUNTOS_ACTUALIZADOS} </span></p>
                <button onclick="javascript:AGREGAR_FONDOS()" class="points__btn--position"><img src="./img/mas.png" alt=""></button>
            </div>
        </div>`;
    const AGREGAR_LOGIN = MENU_NODE[0].appendChild(AGREGAR_NODO_LOGIN);
}

//AGREGAR PUNTOS
let puntos = 0;

const AGREGAR_FONDOS = () => {
    const PUNTOS_INGRESADOS = prompt("¿Cuantos puntos quiere ingresar?");
    puntos += parseInt(PUNTOS_INGRESADOS);
    ACTUALIZAR_FONDOS();
}

const ACTUALIZAR_FONDOS = () => {
    const PUNTOS_NODE = document.getElementById("puntos");
    const MOSTRAR_PUNTOS = PUNTOS_NODE.innerHTML = `${puntos}`;
    const NUEVOS_PUNTOS = sessionStorage.setItem("puntos", puntos);

}

//JUEGOS
const JUEGO1 = () => {
    if (puntos >= 500) {
        const PREMIO_OBTENIDO = CAJA1.abrirCaja();
        CAJA1.descuentoDePuntos();
        VENDER_OBJETO_GANADO(PREMIO_OBTENIDO);
    } else {
        alert("Puntos insuficientes");
    }
}

const JUEGO2 = () => {
    if (puntos >= 2000) {
        const PREMIO_OBTENIDO = CAJA2.abrirCaja();
        CAJA2.descuentoDePuntos();
        VENDER_OBJETO_GANADO(PREMIO_OBTENIDO);
    } else {
        alert("Puntos insuficientes");
    }
}

const JUEGO3 = () => {
    if (puntos >= 1000) {
        const PREMIO_OBTENIDO = CAJA3.abrirCaja();
        CAJA3.descuentoDePuntos();
        VENDER_OBJETO_GANADO(PREMIO_OBTENIDO);
    } else {
        alert("Puntos insuficientes");
    }

}

//ACCION CON PREMIO GANADO
const VENDER_OBJETO_GANADO = (articulo) => {
    const VENDER_PREGUNTA = confirm("¿Desea vender el articulo?");
    switch (VENDER_PREGUNTA) {
        case true:
            puntos = puntos + articulo.price;
            ACTUALIZAR_FONDOS();
            alert("Vendiste tu " + articulo.name);
            alert("Ahora tienes: " + puntos + " puntos");
            break;
        default:
            const AÑADIR_AL_INVENTARIO = INVENTARIO.push(articulo);
            const INVENTARIO_AJSON = JSON.stringify(INVENTARIO);
            const GUARDAR_INVENTARIO = sessionStorage.setItem("inventario", INVENTARIO_AJSON);
            break;
    }
}

const PUNTOS_ACTUALIZADOS = sessionStorage.getItem("puntos");
puntos += JSON.parse(PUNTOS_ACTUALIZADOS);
ELIMINAR_LOGIN();