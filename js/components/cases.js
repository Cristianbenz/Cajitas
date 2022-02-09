class Case {
  constructor(name, price, premio1, premio2, premio3, premio4, premio5) {
    this.main = document.querySelector("main");
    this.name = name;
    this.price = price;
    this.premios = [premio1, premio2, premio3, premio4, premio5];
    this.caseHtml();
  }
  caseHtml() {
    this.nodo = document.createElement("section");
    this.nodo.classList.add(
      "cajas--size",
      "cajas--position",
      "cajas--bg",
      "cajas--border",
      "cajas--layout"
    );
    const CASE = (this.nodo.innerHTML = `
            <h2 class="cajas__h2--position">${this.name}</h2>
            <ul class="cajas__inner--width cajas__inner--layout"></ul>
        `);
    this.main.appendChild(this.nodo);
    this.rewardsHtml();
    this.button();
  }
  rewardsHtml() {
    const INNER = this.nodo.querySelector(".cajas__inner--layout");
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
  button() {
    const BUTTON_NODO = document.createElement("button");
    BUTTON_NODO.innerHTML = `GIRAR - $${this.price}`;
    BUTTON_NODO.classList.add(
      "cajas__boton--width",
      "cajas__boton--position",
      "cajas__boton--border",
      "cajas__boton--bg",
      "cajas__boton--text"
    );
    this.nodo.append(BUTTON_NODO);
    $(this.nodo).click((evt) => {
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
      const JUEGO = setTimeout(() => {}, 250);
      if (AZAR(1000) == 1) {
        this.caseAnimation(this.premios[4]);
      } else if (AZAR(100) == 1) {
        this.caseAnimation(this.premios[3]);
      } else if (AZAR(10) == 1) {
        this.caseAnimation(this.premios[2]);
      } else if (AZAR(10) > 1 && AZAR(10) < 7) {
        this.caseAnimation(this.premios[1]);
      } else {
        this.caseAnimation(this.premios[0]);
      }
    } else {
      NOTIFICATIONS.showToast("Puntos insuficientes");
    }
  }
  caseAnimation(target) {
    const wheel = $(this.nodo).children(".cajas__inner--layout");
    const POSITION = this.premios.indexOf(target);
    const LANDING_POSITION = POSITION * 200 + 600;
    wheel.css({
      "transition-duration": "600ms",
      "animation-timing-duration": "ease",
      transform: "translateX(-" + LANDING_POSITION + "px)",
    });

    setTimeout(() => {
      wheel.css({
        "transition-duration": "",
      });

      wheel.css("transform", "translateX(" + 0 + "px)");
    }, 1500);
    this.objetoPopup(target);
  }

  descuentoDePuntos() {
    points -= this.price;
    new Puntos().actualizarPuntos(points);
  }
  objetoPopup(articulo) {
    setTimeout(() => {
      const PREMIO_POPUP = document.createElement("section");
      this.nodo.append(PREMIO_POPUP);
      $(PREMIO_POPUP).addClass(
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
    $(".popup--size").click((event) => {
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
    new Puntos().actualizarPuntos(points);
    $(".popup--show").remove();
  }
  guardarObjetoGanado(articulo) {
    inventario.push(articulo);
    NOTIFICATIONS.showToast(
      `Ahora tu ${articulo.name.toLowerCase()} esta en tu inventario`
    );
    sessionStorage.setItem("inventario", JSON.stringify(inventario));
    document.querySelector(".popup--show").remove();
  }
}
