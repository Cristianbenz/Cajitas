class InfoContenedor {
  constructor() {
    this.node = document.querySelector("#perfilInfo");
    this.infoAppend();
    this.uploadImg();
    this.infoImg();
  }
  infoHtml() {
    const INFO_POINTS = sessionStorage.getItem("points") || 0;
    const INFO_USERNAME = sessionStorage.getItem("username") || "";
    return `
        <div id='infoImg' class='infoImg--layout infoImg--size infoImg--position'></div>
        <input type='text' id='addImg' placeholder='URL de la foto'></input>
        <p>Username: ${INFO_USERNAME}</p>
        <p>Puntos: ${JSON.parse(INFO_POINTS)}</p>
        `;
  }
  infoAppend() {
    $(this.node).html(this.infoHtml());
  }
  uploadImg() {
    $("#addImg").change(() => {
      sessionStorage.setItem("profilePicture", $("#addImg").val());
      this.infoImg();
    });
  }
  infoImg() {
    const GET_IMG =
      sessionStorage.getItem("profilePicture") ||
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
    $("#infoImg").html(`<img class='perfilImg' src=${GET_IMG} />`);
  }
}
