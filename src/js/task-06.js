const elInput = document.querySelector("#validation-input");
//console.log(elInput);
elInput.classList.add("validation-input");

elInput.addEventListener("blur", () => {
  //console.log(elInput.value.length);
  if (elInput.value.length == 6) {
    elInput.classList.remove("invalid");
    elInput.classList.add("valid");
  } else {
    elInput.classList.add("invalid");
    elInput.classList.remove("valid");
  }
});
