const modal = new Modal();

const sendSubmit = function (event) {
  if (this.value) modal.mainWrapper.classList.toggle("first");
}.bind(document.getElementById("user-id"));
