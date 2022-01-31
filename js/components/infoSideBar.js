class Sidebar {
    constructor() {
        this.node = document.createElement('section');
        this.url = './data/objetos.json';
        this.sideBarHTML();
        this.button();
        this.showSideBar();
    }
    button(){
        const CREATE_BUTTON = document.createElement('button');
        const BUTTON_CLASSES = $(CREATE_BUTTON).addClass('infoButton')
        const BUTTON_TEXT = $(CREATE_BUTTON).html('Informacion');
        const APPEND_BUTTON = $('body').prepend(CREATE_BUTTON);
    }
    showSideBar(){
        $('.infoButton').click(() => {
            $('.slideBar').slideToggle().css({'display': 'flex'});
        })
    }
    sideBarHTML() {
        $(this.node).addClass('slideBar slideBarStatus')
        $('body').prepend(this.node);
        $.getJSON(this.url, (data, status) => {
            $.each (data, (object, props) => {
                const ARTICLE = document.createElement('article');
                const INFO = ARTICLE.innerHTML = `
                <p><b>Nombre:</b> ${props.name}</p>
                <p><b>Precio:</b> ${props.price}</p>
                `;
                this.node.append(ARTICLE);
            })
        })
    }
}