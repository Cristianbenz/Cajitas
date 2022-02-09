class Inventario {
  constructor() {
    this.contendedor = document.querySelector("#inventarioContenedor");
    this.actionContainer = $(".inventario__acciones--size");
    this.invetarioEvents();
    this.actualizarInventario();
  }
  actualizarInventario() {
    const OBTENER_INVENTARIO =
      JSON.parse(sessionStorage.getItem("inventario")) || [];
    this.imprimirInventario(OBTENER_INVENTARIO);
  }
  imprimirInventario(inventario) {
    inventario.forEach((articulo) => {
      this.contendedor.innerHTML += `
            <div class='contenedor__object--size'>
                <img class='object__img--size' src="${articulo.img}">
                <p>Precio: ${articulo.price}</p>
            </div>
            `;
    });
  }
  invetarioEvents() {
    $(this.actionContainer).click((event) => {
      if (event.target.id === "sellAll") {
        this.venderInventario();
      }
      if (event.target.id === "withdraw") {
        this.withdrawNotification();
      }
    });
  }
  venderInventario() {
    const PRECIO_TOTAL = inventario.reduce(
      (total, precios) => total + precios.price,
      0
    );
    points += PRECIO_TOTAL;
    new Puntos().actualizarPuntos(points);
    sessionStorage.setItem("inventario", JSON.stringify([]));
    $(this.contendedor).html([]);
  }
  withdrawNotification() {
    const INFO_ARR =
      JSON.parse(sessionStorage.getItem("withdrawInfo")) || "sin informacion";
    if ($(this.contendedor).html() === []) {
      NOTIFICATIONS.showToast("❌ No tienes articulos en tu inventario");
    } else if (INFO_ARR === "sin informacion") {
      NOTIFICATIONS.showToast("❌ Debes completar el formulario completamente");
    } else {
      $(this.contendedor).html([]);
      sessionStorage.setItem("inventario", JSON.stringify([]));
      NOTIFICATIONS.showToast(
        `✅ Hola ${INFO_ARR.name} te contactamos a ${INFO_ARR.mail}`
      );
    }
  }
}

let inventario = JSON.parse(sessionStorage.getItem("inventario")) || [];
