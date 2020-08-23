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

let passwordInput = document.querySelector("#passwordInput");
let passwordConfirmInput = document.querySelector("#passwordConfirmInput");

function validatePasswordMatch () {
  if (passwordInput.value != passwordConfirmInput.value) {
    passwordConfirmInput.setCustomValidity("Passwords do not match");
    document.querySelector("#passwordConfirmFeedback").textContent = "Passwords do not match";
  } else { 
    passwordConfirmInput.setCustomValidity("");
    document.querySelector("#passwordConfirmFeedback").textContent = "";
  }
}

passwordInput.addEventListener("input", validatePasswordMatch);
passwordConfirmInput.addEventListener("input", validatePasswordMatch);

let allInputs = document.querySelectorAll("input");

allInputs.forEach(function (input) {
  input.addEventListener("input", function() {
    if (form.classList.contains("was-validated")) {
      document.querySelector("button").disabled = true;
    } else {
      document.querySelector("button").disabled = false;
    }
  })
});