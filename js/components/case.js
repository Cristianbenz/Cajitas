class Case {
    constructor(name, price, premio1, premio2, premio3, premio4, premio5) {
        this.nodo = document.querySelector('main')
        this.name = name;
        this.price = price;
        this.premios = [
            premio1,
            premio2,
            premio3,
            premio4,
            premio5
        ]
        this.caseHtml();
        

    }
    caseHtml() {
        const SECTION = document.createElement('section');
        const CASE_CLASSES = SECTION.classList.add('cajas--size', 'cajas--position', 'cajas--bg', 'cajas--border', 'cajas--layout')
        const CASE = SECTION.innerHTML = `
            <h2 class="cajas__h2--position">${this.name}</h2>
            <ul class="cajas__inner--layout"></ul>
        `
        this.nodo.appendChild(SECTION);
        this.rewardsHtml(SECTION);
        this.button(SECTION);
    }
    rewardsHtml(nodo) {
        const INNER = nodo.querySelector('.cajas__inner--layout');
        this.premios.forEach((reward) => {
            const INNER_LI = document.createElement('li');
            const LI_CLASSES = INNER_LI.classList.add('inner__objects--size', 'inner__objects--position', 'inner__objects--border', 'inner__objects--padding')
            const  REWARD = INNER_LI.innerHTML = `
            <img class="object__img--size" src='${reward.img}' alt='${reward.name}'>
            `
            const ADD_LI = INNER.appendChild(INNER_LI);

        })
    }
    button(nodo) {
        const BUTTON_NODO = document.createElement('button');
        const BUTTON_TEXT = BUTTON_NODO.innerHTML= `GIRAR`
        const ADD_BUTTON = nodo.appendChild(BUTTON_NODO);
        const GIRAR = BUTTON_NODO.addEventListener('click', this.abrirCaja.bind(this))

    }
    abrirCaja() {
        if (points >= this.price) {
            this.descuentoDePuntos();
            const AZAR = (probabilidad) => Math.round(Math.random() * probabilidad);
            const ABRIENDO = alert("Abirendo " + this.name + "...");
            if (AZAR(1000) == 1) {
                alert("Ganaste: " + this.premios[4].name);
                this.objetoPopup(this.premios[4]);
            } else if (AZAR(100) == 1) {
                alert("Ganaste: " + this.premios[3].name);
                this.objetoPopup(this.premios[3]);
            } else if (AZAR(10) == 1) {
                alert("Ganaste: " + this.premios[2].name);
                this.objetoPopup(this.premios[2]);
            } else if ((AZAR(10) > 1) && (AZAR(10) < 7)) {
                alert("Ganaste: " + this.premios[1].name);
                this.objetoPopup(this.premios[1]);
            } else {
                alert("Ganaste: " + this.premios[0].name);
                this.objetoPopup(this.premios[0]);
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
        const POPUP_CLASS = PREMIO_POPUP.classList.add('popup--sizeShow', 'popup--position', 'popup--layout', 'popup--bg')
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
        const POPUP_NODE = document.querySelector('.popup--sizeShow');
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
        const POPUP_NODE = document.querySelector('.popup--sizeShow');
        POPUP_NODE.parentNode.removeChild(POPUP_NODE);
    }
    guardarObjetoGanado(articulo) {
        inventario.push(articulo);
        console.log(inventario)
        const GUARDAR_INVENTARIO = sessionStorage.setItem('inventario', JSON.stringify(inventario));
        const POPUP_NODE = document.querySelector('.popup--sizeShow');
        POPUP_NODE.parentNode.removeChild(POPUP_NODE);
    }
}