class Usuario {
    constructor() {
        this.form = document.querySelector('#loginForm');
        this.submit();

    }
    ingreso(event) {
        event.preventDefault();
        const USERNAME = $('#username').val();
        const AGE = $('#age').val();
        if (USERNAME != '' && AGE >= 18) {
            NOTIFICATIONS.showToast('Ingreso Exitoso!');
            const GUARDAR_ACCESO = sessionStorage.setItem('acceso', true);
            const GUARDAR_USERNAME = sessionStorage.setItem('username', USERNAME);
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500)
        }
        if (USERNAME === "") {
            $('#usernameError').show();
        } else {
            $('#usernameError').hide();
        }
        if (AGE < 18) {
            $('#ageError').show();
        } else{
            $('#ageError').hide();
        }
    }
    submit() {
        const SUBMIT = $(this.form).submit(this.ingreso);
    }

}
const POST_URL = '/data/username.json';