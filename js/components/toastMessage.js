class Mesage{
    constructor(){
        this.nodo = document.createElement('div');
        this.toastHtml();
    }
    toastHtml(){
        const TOAST_CLASSES = $(this.nodo).addClass('toast');
        document.body.appendChild(this.nodo);
    }
    showToast(text){
        const TOAST_CONTENT = this.nodo.innerHTML = text;
        const TOAST_VISIBLE = $(this.nodo).addClass('toast--visible');
        this.hideToast();
    }
    hideToast(){
        const time = setTimeout( () => {
            $(this.nodo).removeClass('toast--visible')
        }, 3000)
    }
}