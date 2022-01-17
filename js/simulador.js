const game1 = () => {
    const PREMIO_OBTENIDO = CAJA1.abrirCaja();
}



const game2 = () => {
    const PREMIO_OBTENIDO = CAJA2.abrirCaja();
}



const game3 = () => {
    const PREMIO_OBTENIDO = CAJA3.abrirCaja();
}

const GAME1_BTN = document.getElementById('game1Button');
const GAME1_INIT = GAME1_BTN.addEventListener('click', game1);

const GAME2_BTN = document.getElementById('game2Button');
const GAME2_INIT = GAME2_BTN.addEventListener('click', game2);

const GAME3_BTN = document.getElementById('game3Button');
const GAME3_INIT = GAME3_BTN.addEventListener('click', game3);

const NUEVO_INICIO = new Inicio();