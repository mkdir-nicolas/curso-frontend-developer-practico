import productListArray from "../component/data.js";
export default function productDetail() {
  let state;
  const productDetail = (name, price, image) => {
    state = 1;
    return `
    <aside id="product-detail" class="product-detail">
      <div id="btnProductDetailClose" class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img
        src="${image}"
        alt="bike"
      />
      <div class="product-info-secondary">
        <p>$ ${price}</p>
        <p>${name}</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
             `;
  };
  const productList = document.querySelectorAll(".product-card");
  const parent = document.querySelector(".main-container");
  productList.forEach((product, index) => {
    product.addEventListener("click", () => {
      // console.log(product);
      if (state === 1) {
        document.querySelector(
          `#product-detail .product-info-secondary p:nth-child(1)`
        ).innerText = `$ ${productListArray[index].price}`;
        document
          .querySelector("#product-detail.product-detail > img:nth-child(2)")
          .setAttribute("src", `${productListArray[index].image}`);
        document.querySelector(
          `#product-detail .product-info-secondary p:nth-child(2)`
        ).innerText = productListArray[index].name;

        return;
      }
      parent.insertAdjacentHTML(
        "beforeend",
        productDetail(
          productListArray[index].name,
          productListArray[index].price,
          productListArray[index].image
        )
      );
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnProductDetailClose, #btnProductDetailClose>*")) {
      document.getElementById("product-detail").remove();
      state = 0;
    }
    if (
      state === 1 &&
      !e.target.closest(".product-card") &&
      !e.target.closest(".product-detail")
    ) {
      document.getElementById("product-detail").remove();
      state = 0;
    }
  });
}
