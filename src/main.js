import menuDesktop from "../component/desktop-menu.js";
import mobileMenu from "../component/mobile-menu.js";
import productCards from "../component/product-cards.js";
import productDetail from "../component/product-detail.js";
import shoppingCart from "../component/shopping-cart.js";

const $nav = document.getElementById("nav");

document.addEventListener("DOMContentLoaded", (e) => {
  menuDesktop("#email", $nav);
  shoppingCart("#btnShoppingCart", $nav);
  mobileMenu("#btnMenuMobile", $nav);
  productCards();
  productDetail();
});
