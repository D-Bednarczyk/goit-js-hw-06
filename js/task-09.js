function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elBtn = document.querySelector(".change-color");
//console.log(elBtn);
const elBody = document.querySelector("body");
////console.log(elBody.style);
//elBody.style.backgroundColor = getRandomHexColor();
elBtn.addEventListener("click", () => {
  elBody.style.backgroundColor = getRandomHexColor();
});
