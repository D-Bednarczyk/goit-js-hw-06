const elInput = document.querySelector("input#name-input");
console.log(elInput);
const elSpan = document.querySelector("span#name-output");
console.log(elSpan);

elInput.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value != "")
    elSpan.innerHTML = event.currentTarget.value;
  else elSpan.innerHTML = "Anonymous";
});
