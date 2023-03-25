const elCategories = document.querySelector("#categories");
console.log(`Number of categories: ${elCategories.children.length}`);
const elItems = document.querySelectorAll("li.item");
//console.log(elItems);

//console.log(elItems[0].querySelector("h2").innerHTML);

elItems.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").innerHTML}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
//console.log(elItems[0].querySelectorAll("li").length);
