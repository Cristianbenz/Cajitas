class Login {
    constructor(username, edad) {
        this.username = username;
        this.edad = edad;
    }
    acceso() {
        if (this.edad >= 18) {
            alert("¡Disfrute del juego!");
            return true;
        } else {
            alert("Acceso denegado");
            DATOS();
        }
    }
    fondos() {
        if (this.acceso()) {
            const PUNTOS_INGRESADOS = prompt("¿Cuantos puntos desea ingresar?");
            return parseFloat(PUNTOS_INGRESADOS);
        }
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
let INVENTARIO = [];

//DATOS DE INGRESO
let puntos;
const DATOS = () => {
    const USERNAME_ENTRADA = prompt("Ingrese usuario");
    const EDAD_ENTRADA = prompt("Ingrese su edad");
    while (USERNAME_ENTRADA == "" || EDAD_ENTRADA == 0) {
        const USERNAME_ENTRADA = prompt("Ingrese usuario");
        const EDAD_ENTRADA = prompt("Ingrese su edad");
        const INGRESO = new Login(USERNAME_ENTRADA, EDAD_ENTRADA);
        puntos = INGRESO.fondos();
    }
    const INGRESO = new Login(USERNAME_ENTRADA, EDAD_ENTRADA);
    puntos = INGRESO.fondos();
}

//JUEGO
const JUEGO = () => {
    const PREGUNTA = prompt("¿Que caja desea abrir?\n" + "1) Caja 1 - $500\n2) Caja 2 - $2000\n3) Caja 3 $10000");
    let reward;
    switch (PREGUNTA) {
        case "1":
            reward = CAJA1.abrirCaja();
            CAJA1.descuentoDePuntos();
            break;
        case "2":
            reward = CAJA2.abrirCaja();
            CAJA2.descuentoDePuntos();
            break;
        case "3":
            reward = CAJA3.abrirCaja();
            CAJA3.descuentoDePuntos();
            break;
    }
    return reward;

}

//ACCION CON PREMIO GANADO
const VENDER_OBJETO_GANADO = (articulo) => {
    const VENDER_PREGUNTA = confirm("¿Desea vender el articulo?");
    switch (VENDER_PREGUNTA) {
        case true:
            puntos = puntos + articulo.price;
            alert("Vendiste tu " + articulo.name);
            alert("Ahora tienes: " + puntos + " puntos");
            break;
        default:
            INVENTARIO.push(articulo);
            break;
    }
}

//VER INVENTARIO?
/*const VER_INVENTARIO = () => {
    const VER_OBJETOS = confirm("¿Quiere ver su inventario?");
    switch (VER_OBJETOS) {
        case true:
            alert(MOSTRAR_FILTRO);
            break;
    }
}

const MOSTRAR_FILTRO = INVENTARIO.filter(premio => premio.name);*/

//VOLVER A JUGAR?
const REROLL = () => {
    const VOLVER_JUGAR = confirm("¿Desea volver a jugar?");
    if (VOLVER_JUGAR) {
        INIT();
    } else {
        alert("¡Vuelve pronto!");
    }
}

const INIT = () => {
    const PREMIO_GANADO = JUEGO();
    VENDER_OBJETO_GANADO(PREMIO_GANADO);
    REROLL();
}
DATOS();
INIT();