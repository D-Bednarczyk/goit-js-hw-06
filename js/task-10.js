function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divInsert = "";
  let size = 20;
  for (let i = 1; i <= amount; i++) {
    size += 10;
    divInsert += `<div style="height: ${size}px; width: ${size}px; background-color:${getRandomHexColor()};"></div>`;
  }
  return divInsert;
}

//console.log(createBoxes(5));

const elInput = document.querySelector("#controls input");
//console.log(elInput);
const elBtnCreate = document.querySelector("#controls [data-create]");
//console.log(elBtnCreate.outerHTML);
const elBtnDestroy = document.querySelector("#controls [data-destroy]");
//console.log(elBtnDestroy.outerHTML);
const elBoxesDiv = document.querySelector("#boxes");
/* console.log(elBoxesDiv.style);
elBoxesDiv.style.height = "30px";
elBoxesDiv.style.width = "30px";
elBoxesDiv.style.backgroundColor = getRandomHexColor();
 */

/* elInput.addEventListener("input", (event) => {
  //return event.currentTarget.value;
}); */
//<div style="height: 30px; width: 30px; background-color: rgb(66, 201, 148);"></div>

elBtnCreate.addEventListener("click", () => {
  elBoxesDiv.innerHTML = createBoxes(elInput.value);
});

elBtnDestroy.addEventListener("click", () => {
  elBoxesDiv.innerHTML = "";
});
