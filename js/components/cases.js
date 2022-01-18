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
        if (points >= this.price) {
            this.descuentoDePuntos();
            const AZAR = (probabilidad) => Math.round(Math.random() * probabilidad);
            const ABRIENDO = alert("Abirendo " + this.name + "...");
            if (AZAR(1000) == 1) {
                alert("Ganaste: " + this.premios.premio5.name);
                this.objetoPopup(this.premios.premio5);
            } else if (AZAR(100) == 1) {
                alert("Ganaste: " + this.premios.premio4.name);
                this.objetoPopup(this.premios.premio4);
            } else if (AZAR(10) == 1) {
                alert("Ganaste: " + this.premios.premio3.name);
                this.objetoPopup(this.premios.premio3);
            } else if ((AZAR(10) > 1) && (AZAR(10) < 7)) {
                alert("Ganaste: " + this.premios.premio2.name);
                this.objetoPopup(this.premios.premio2);
            } else {
                alert("Ganaste: " + this.premios.premio1.name);
                this.objetoPopup(this.premios.premio1);
            }
        } else {
            alert("Puntos insuficientes");
        }

    }
    descuentoDePuntos() {
        points -= this.price;
        const QUITAR_PUNTOS = new Puntos();
        QUITAR_PUNTOS.actualizarPuntos(points)
    }
    objetoPopup(articulo) {
        const PREMIO_POPUP = document.createElement('section');
        const POPUP_CLASS = PREMIO_POPUP.classList.add('popup--size', 'popup--position', 'popup--layout', 'popup--bg')
        const POPUP_HTML = document.body.appendChild(PREMIO_POPUP);
        const POPUP_CONTENT = PREMIO_POPUP.innerHTML = `
            <article id='popUp'>
                <p>¿Desea vender su articulo?</p>
                <img class='popup__img--size' src="${articulo.img}">
                <p>${articulo.name}</p>
                <p>Precio: $${articulo.price}</p>
            </article>
            <article>
                <button id="venderArt">Vender</button>
                <button id="guardarArt">Al inventario</button>
            </article>
            
        `
        this.popupEvent(articulo);

    }
    popupEvent(articulo) {
        const POPUP_NODE = document.querySelector('.popup--size');
        const DECISION = POPUP_NODE.addEventListener('click', (event) => {
            if (event.target.id == 'venderArt') {
                this.venderoObjetoGanado(articulo);
            } else if (event.target.id == 'guardarArt') {
                this.guardarObjetoGanado(articulo);
            }
        });
    }
    venderoObjetoGanado(objeto) {
        alert("Vendiste tu " + objeto.name);
        points += objeto.price;
        const ADD_POINTS = new Puntos();
        ADD_POINTS.actualizarPuntos(points)
        const POPUP_NODE = document.querySelector('.popup--size');
        document.body.removeChild(POPUP_NODE);
    }
    guardarObjetoGanado(articulo) {
        inventario.push(articulo);
        console.log(inventario)
        const GUARDAR_INVENTARIO = sessionStorage.setItem('inventario', JSON.stringify(inventario));
        const POPUP_NODE = document.querySelector('.popup--size');
        document.body.removeChild(POPUP_NODE);
    }
}