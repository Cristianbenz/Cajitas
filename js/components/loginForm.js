class Usuario {
    constructor() {
        this.form = document.querySelector('#loginForm');
        this.addEvent();

    }
    ingreso(event) {
        const USERNAME = $('#username').val();
        const AGE = $('#age').val();
        if (USERNAME != '' && AGE >= 18) {
            NOTIFICATIONS.showToast('Ingreso Exitoso!');
            sessionStorage.setItem('acceso', true);
            sessionStorage.setItem('username', USERNAME);
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
    addEvent() {
        $(this.form).submit((event) => {
            event.preventDefault();
            this.ingreso();
        });
    }

}