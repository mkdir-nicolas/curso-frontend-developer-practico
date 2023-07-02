import productList from "../component/data.js";
export default function productCards() {
  const fragment = document.createDocumentFragment();
  const mainContainer = document.createElement("section");
  const cardsContainer = document.createElement("div");
  mainContainer.setAttribute("class", "main-container");
  cardsContainer.setAttribute("class", "cards-container");
  document
    .getElementById("nav")
    .insertAdjacentElement("afterend", mainContainer);
  mainContainer.appendChild(cardsContainer);
  productList.forEach((e) => {
    const productCard = document.createElement("div");
    const img = document.createElement("img");
    const productInfo = document.createElement("div");
    const div = document.createElement("div");
    const price = document.createElement("p");
    const name = document.createElement("p");
    const figure = document.createElement("figure");
    const imgBt = document.createElement("img");
    productCard.setAttribute("class", "product-card");
    img.setAttribute("src", `${e.image}`);
    productInfo.setAttribute("class", "product-info");
    productCard.append(img, productInfo);
    price.textContent += `$ ${e.price}`;
    name.textContent += e.name;
    productInfo.append(div, figure);
    figure.appendChild(imgBt);
    imgBt.setAttribute("src", "./icons/bt_add_to_cart.svg");
    div.append(price, name);
    fragment.append(productCard);
  });
  cardsContainer.appendChild(fragment);
}
