const elBtnDec = document.querySelector('[data-action*="decrement"]');
console.log(elBtnDec);
const elBtnInc = document.querySelector('[data-action*="increment"]');
const elSpan = document.querySelector("#value");
let counterValue = 0;
console.log(elSpan);

elBtnDec.addEventListener("click", () => {
  counterValue--;
  //console.log(counterValue);
  elSpan.innerHTML = counterValue;
});
elBtnInc.addEventListener("click", () => {
  counterValue++;
  //console.log(counterValue);
  elSpan.innerHTML = counterValue;
});
