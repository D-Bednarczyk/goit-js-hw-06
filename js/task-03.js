const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const elGallery = document.querySelector(".gallery");
//console.log(elGallery);

const elImg = images
  .map((el) => `<li><img src="${el.url}" alt="${el.alt}" width="150"></li>`)
  .join("");

console.log(elImg);

//elGallery.innerHTML = elImg;
elGallery.insertAdjacentHTML("afterbegin", elImg);

elGallery.style.display = "flex";
elGallery.style.gap = "10px";
elGallery.style.listStyleType = "none";
