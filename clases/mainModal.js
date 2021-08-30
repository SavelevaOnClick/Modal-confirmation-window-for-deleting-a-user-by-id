class MainModal {
  constructor(width, height) {
    this.mainWrapper = document.body.appendChild(document.createElement("div"));
    this.mainWrapper.className = "main-wrapper";
    this.mainWrapper.innerHTML = this.templateMane;
    this.mainModal = document.querySelector(".main-modal");
  }
}

MainModal.prototype.templateMane = `
<div class="main-modal"></div>
`;
