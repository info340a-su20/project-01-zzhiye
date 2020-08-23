'use strict';

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    form.classList.add('d-none');
    document.querySelector("p").classList.remove("d-none");
  } else {
    form.classList.add("was-validated");
    document.querySelector("button").disabled = true;
  }
});
