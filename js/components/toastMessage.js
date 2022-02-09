class Message{
    constructor(){
        this.nodo = document.createElement('div');
        this.toastHtml();
    }
    toastHtml(){
        $(this.nodo).addClass('toast');
        $('body').prepend(this.nodo);
    }
    showToast(text){
        this.nodo.innerHTML = text;
        $(this.nodo).addClass('toast--visible');
        this.hideToast();
    }
    hideToast(){
        const time = setTimeout( () => {
            $(this.nodo).removeClass('toast--visible')
        }, 3000)
    }
}