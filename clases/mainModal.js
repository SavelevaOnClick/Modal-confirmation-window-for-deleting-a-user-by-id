class MainModal {
  constructor(width, height) {
    this.mainWrapper = document.body.appendChild(document.createElement("div"));
    this.mainWrapper.className = "main-wrapper";
    this.mainWrapper.innerHTML = this.templateMane;
    this.mainModal = document.querySelector(".main-modal");
    const style = document.head.appendChild(document.createElement("style"));
    style.innerHTML = this.templateCss;
  }
}

MainModal.prototype.templateMane = `
<div class="main-modal"></div>
`;

MainModal.prototype.templateCss = `
.footer-modal {
  display: flex;
  justify-content: space-around;
}
.main-modal {
  width: 30%;
  background-color: #fff;
  box-shadow: 10px 10px 10px #808080;
  height: 25%;
  border-radius: 10px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.main-wrapper {
  position: fixed;
  background-color: #00000020;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  z-index: -100;
}
.main-wrapper.first {
  visibility: visible;
  z-index: 100;
}
.main-modal button {
  cursor: pointer;
  width: 30%;
  text-align: center;
  border-radius: 10px;
  padding: 10px 15px;
}
.main-modal h3 {
  font-size: 28px;
  color: #808080;
}
.body-modal {
  text-align: center;
}
`;
