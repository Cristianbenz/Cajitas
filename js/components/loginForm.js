class Usuario {
    constructor() {
        this.form = document.querySelector('#loginForm');
        this.submit();
        
    }
    ingreso(event) {
        event.preventDefault();
        const USERNAME = document.querySelector('#username').value;
        const AGE = document.querySelector('#age').value;
        if (AGE >= 18 && USERNAME != "") {
            window.location.href = "index.html";
            const GUARDAR_ACCESO = sessionStorage.setItem('acceso', true);
            const GUARDAR_USERNAME = sessionStorage.setItem('username', USERNAME);
        } else {
            
            alert("Edad o usuario no valido")
        }
    }
    submit() {
        const SUBMIT = this.form.addEventListener('submit', this.ingreso);
    }
    
}