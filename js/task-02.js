const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elIngr = document.querySelector("#ingredients");
//console.log(elIngr);
//elIngr.innerHTML = "<li>test</li>";
/* const elInsert = document.createElement("li");
elInsert.textContent = "ccccfdd";
elInsert.classList.add("item");
elIngr.append(elInsert); */

const inserts = [];

ingredients.forEach((el, indx) => {
  inserts[indx] = document.createElement("li");
  inserts[indx].textContent = el;
  inserts[indx].classList.add("item");
});

//console.log(inserts);

elIngr.append(...inserts);
