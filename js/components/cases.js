class Case {
  constructor(name, price, premio1, premio2, premio3, premio4, premio5) {
    this.nodo = document.querySelector("main");
    this.name = name;
    this.price = price;
    this.premios = [premio1, premio2, premio3, premio4, premio5];
    this.caseHtml();
  }
  caseHtml() {
    const SECTION = document.createElement("section");
    const CASE_CLASSES = SECTION.classList.add(
      "cajas--size",
      "cajas--position",
      "cajas--bg",
      "cajas--border",
      "cajas--layout"
    );
    const CASE = (SECTION.innerHTML = `
            <h2 class="cajas__h2--position">${this.name}</h2>
            <ul class="cajas__inner--width cajas__inner--layout"></ul>
        `);
    this.nodo.appendChild(SECTION);
    this.rewardsHtml(SECTION);
    this.button(SECTION);
  }
  rewardsHtml(nodo) {
    const INNER = nodo.querySelector(".cajas__inner--layout");
    for (let i = 0; i < 3; i++) {
      this.premios.forEach((reward) => {
        const INNER_LI = document.createElement("li");
        const LI_CLASSES = INNER_LI.classList.add(
          "inner__objects--size",
          "inner__objects--position",
          "inner__objects--border",
          "inner__objects--padding",
          `inner__objects--${reward.quality}`
        );
        const REWARD = (INNER_LI.innerHTML = `
                <img class="object__img--size" src='${reward.img}' alt='${reward.name}'>
                `);
        const ADD_LI = INNER.append(INNER_LI);
      });
    }
  }
  button(nodo) {
    const BUTTON_NODO = document.createElement("button");
    const BUTTON_TEXT = (BUTTON_NODO.innerHTML = `GIRAR`);
    const BUTTON_CLASSES = BUTTON_NODO.classList.add(
      "cajas__boton--width",
      "cajas__boton--position",
      "cajas__boton--border",
      "cajas__boton--bg",
      "cajas__boton--text"
    );
    const ADD_BUTTON = nodo.append(BUTTON_NODO);
    const GIRAR = $(nodo).click((evt) => {
      if (evt.target.className.includes("cajas__boton--position")) {
        this.abrirCaja();
      }
    });
  }
  abrirCaja() {
    if (points >= this.price) {
      this.descuentoDePuntos();
      const AZAR = (probabilidad) => Math.round(Math.random() * probabilidad);
      const ABRIENDO = NOTIFICATIONS.showToast(`Abriendo ${this.name}...`);
      const JUEGO = setTimeout(() => {
        // this.caseAnimation;
      }, 250);
      if (AZAR(1000) == 1) {
        this.rewardTargetAnimation(this.premios[4]);
      } else if (AZAR(100) == 1) {
        this.rewardTargetAnimation(this.premios[3]);
      } else if (AZAR(10) == 1) {
        this.rewardTargetAnimation(this.premios[2]);
      } else if (AZAR(10) > 1 && AZAR(10) < 7) {
        this.rewardTargetAnimation(this.premios[1]);
      } else {
        this.rewardTargetAnimation(this.premios[0]);
      }
    } else {
      const NO_POINTS = NOTIFICATIONS.showToast("Puntos insuficientes");
    }
  }
  caseAnimation() {
    const wheel = $(".cajas__inner--layout");
    wheel.css({
      "transition-duration": "500ms",
      transform: "translateX(-" + 33.33 + "%)",
    });

    setTimeout(function () {
      wheel.css({
        "transition-duration": "",
      });

      wheel.css("transform", "translateX(" + 0 + "%)");
    }, 950);
  }

  rewardTargetAnimation(target) {
    const wheel = $(".cajas__inner--layout");
    const POSITION = this.premios.indexOf(target);
    const LANDING_POSITION = POSITION * 6 + 17.5;
    wheel.css({
      "transition-duration": "600ms",
      "animation-timing-duration": "ease",
      transform: "translateX(-" + LANDING_POSITION + "%)",
    });
    console.log(target);
    console.log(POSITION);
    console.log(-POSITION + 38.3);

    setTimeout( () => {
      wheel.css({
        "transition-duration": ""
      });

      wheel.css("transform", "translateX(" + 0 + "%)");
      
    }, 1500);
    this.objetoPopup(target)
  }

  descuentoDePuntos() {
    points -= this.price;
    const QUITAR_PUNTOS = new Puntos();
    QUITAR_PUNTOS.actualizarPuntos(points);
  }
  objetoPopup(articulo) {
    setTimeout(() => {
      const PREMIO_POPUP = document.createElement("section");
      const POPUP_HTML = this.nodo.append(PREMIO_POPUP);
      const POPUP_CLASS = $(PREMIO_POPUP).addClass(
        "popup--size popup--position popup--layout popup--bg popup--show"
      );
      const POPUP_CONTENT = (PREMIO_POPUP.innerHTML = `
              <article id='popUp'>
                  <p>GANASTE ${articulo.name}</p>
                  <img class='popup__img--size' src="${articulo.img}">
                  <p>Precio: $${articulo.price}</p>
              </article>
              <article>
                  <button id="venderArt">Vender</button>
                  <button id="guardarArt">Al inventario</button>
              </article>
              
          `);
      this.popupEvent(articulo);
      
    }, 1000);
  }
  popupEvent(articulo) {
    const POPUP_NODE = $(".popup--size");
    const DECISION = $(POPUP_NODE).click((event) => {
      if (event.target.id == "venderArt") {
        this.venderoObjetoGanado(articulo);
      } else if (event.target.id == "guardarArt") {
        this.guardarObjetoGanado(articulo);
      }
    });
  }
  venderoObjetoGanado(objeto) {
    NOTIFICATIONS.showToast(`Vendiste tu ${objeto.name.toLowerCase()}`);
    points += objeto.price;
    const ADD_POINTS = new Puntos();
    ADD_POINTS.actualizarPuntos(points);
    const POPUP_NODE = $(".popup--show");
    $(POPUP_NODE).remove();
  }
  guardarObjetoGanado(articulo) {
    const TO_INVENTARIO = inventario.push(articulo);
    NOTIFICATIONS.showToast(
      `Ahora tu ${articulo.name.toLowerCase()} esta en tu inventario`
    );
    const GUARDAR_INVENTARIO = sessionStorage.setItem(
      "inventario",
      JSON.stringify(inventario)
    );
    const POPUP_NODE = document.querySelector(".popup--show");
    $(POPUP_NODE).remove();
  }
}
