export default function shoppingCart(id, parent) {
  let state;
  const productDetail = () => {
    state = 1;
    return `
               <aside class="product-detail" id="productDetail" >
               <div class="title-container" >
                 <img src="./icons/flechita.svg" alt="arrow">
                 <p class="title" >My order</p>
               </div>

               <div class="my-order-content" >
                 <div class="shopping-cart" >
                   <figure >
                     <img  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
                   </figure>
                   <p >Bike</p>
                   <p >$30,00</p>
                   <img  src="./icons/icon_close.png" alt="close">
                 </div>

                 <div class="shopping-cart" >
                   <figure >
                     <img  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
                   </figure>
                   <p >Bike</p>
                   <p >$30,00</p>
                   <img  src="./icons/icon_close.png" alt="close">
                 </div>

                 <div class="shopping-cart" >
                   <figure >
                     <img  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
                   </figure >
                   <p >Bike</p>
                   <p >$30,00</p>
                   <img  src="./icons/icon_close.png" alt="close">
                 </div>

                 <div class="order">
                   <p>
                     <span>Total</span>
                   </p>
                   <p>$560.00</p>
                 </div>

                 <button class="primary-button">
                   Checkout
                 </button>
               </div>
              </div>
              </aside>
           `;
  };
  document.addEventListener("click", (e) => {
    if (e.target.closest("#productDetail")) return;
    if (e.target.matches(id) && state !== 1) {
      return parent.insertAdjacentHTML("afterend", productDetail());
    }
    if (state === 1) {
      state = 0;
      //   console.log(e.target);
      return document.getElementById("productDetail").remove();
    }
  });
}
