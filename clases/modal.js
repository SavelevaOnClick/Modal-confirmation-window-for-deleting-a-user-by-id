class Modal extends MainModal {
  constructor() {
    super();
    this.mainModal.innerHTML = this.template;
    this.btnTru = document.getElementById("btn-tru");
    this.btnFalse = document.getElementById("btn-false");

    this.btnFalse.onclick = function (event) {
      this.classList.toggle("first");
    }.bind(this.mainWrapper);

    this.btnTru.onclick = async function (event) {
      this.classList.toggle("first");

      (async function (event) {
        let userId = this.value;
        this.value = "";
        await await fetch(`https://garevna-rest-api.glitch.me/user/${userId}`, {
          method: "DELETE",
        });
      }.bind(document.getElementById("user-id"))());
    }.bind(this.mainWrapper);
  }
}

Modal.prototype.template = `
  <div class="body-modal">
    <h3>Are you sure?</h3>
  </div>
  <div class="footer-modal">
    <button id="btn-tru">ОК</button>
    <button id="btn-false">CANSEL</button>
  </div>
`;
