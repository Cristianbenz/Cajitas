class WithdrawForm {
  constructor() {
    this.form = $("#informacionForm");
    this.formEvent();
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
    sessionStorage.setItem("withdrawInfo", JSON.stringify(WITHDRAW_INFO));
  }
  formEvent() {
    $(this.form).submit((event) => {
      event.preventDefault();
      this.getInfo();
    });
  }
}
