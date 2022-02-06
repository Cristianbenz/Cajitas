class WithdrawForm {
  constructor() {
    this.form = $("#informacionForm");
    this.formSubmit();
  }
  getInfo() {
    this.name = $("#witdrawName").val();
    this.lastName = $("#withdrawLastName").val();
    this.mail = $("#witdrawMail").val();
    this.adress = $("#withdrawAdress").val();
    this.setInfo();
  }
  setInfo() {
    const WITHDRAW_INFO = {
      name: this.name,
      lastName: this.lastName,
      mail: this.mail,
      adress: this.adress,
    };
    const GUARDAR_INFO = sessionStorage.setItem(
      "withdrawInfo",
      JSON.stringify(WITHDRAW_INFO)
    );
  }
  formSubmit() {
    const EVENT = $(this.form).submit((event) => {
      event.preventDefault();
      this.getInfo();
    });
  }
}
