const loginPopup = () => {
  const GET_ACCES = sessionStorage.getItem("acceso");
  if (!GET_ACCES) {
    Swal.fire({
      icon: "warning",
      title: "¡Debes loguear para poder jugar!",
    });
  }
};

const CASE1 = new Case(
  "Caja 1",
  500,
  OSITO,
  STEAMGC,
  AURIS,
  MOUSE_GAMER,
  JORDANS
);

const CASE2 = new Case(
  "Caja 2",
  2400,
  CAMARA,
  APPLE_WATCH,
  SMARTPHONE_SAMSUNG,
  IPAD,
  MAC
);

const CASE3 = new Case(
  "Caja 3",
  10000,
  SMART,
  PS5,
  PC,
  OBJETO_NO_DEFINIDO,
  AUTO
);

new Inicio();
loginPopup();
new Sidebar();
