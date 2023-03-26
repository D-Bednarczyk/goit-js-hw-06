const elInput = document.querySelector("#font-size-control");
//console.log(elInput);
const elSpan = document.querySelector("#text");
//console.log(elSpan);

//console.log(elSpan.style);

//elSpan.style.fontSize = "40px";

elInput.addEventListener("input", (event) => {
  //console.log(event.currentTarget.value);
  elSpan.style.fontSize = `${event.currentTarget.value}px`;
});
