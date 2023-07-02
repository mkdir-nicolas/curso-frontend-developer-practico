export default function mobileMenu(id, parent) {
  let state;
  const menuMobile = () => {
    state = 1;
    return `
            <div class="mobile-menu" id=mobileMenu >
            <ul >
              <li >
                <a href="/">CATEGORIES</a>
              </li>
              <li >
                <a href="/">All</a>
              </li>
              <li >
                <a href="/">Clothes</a>
              </li>
              <li >
                <a href="/">Electronics</a>
              </li>
              <li >
                <a href="/">Furnitures</a>
              </li>
              <li >
                <a href="/">Toys</a>
              </li >
              <li >
                <a href="/">Other</a>
              </li>
            </ul >
            <ul >
              <li >
                <a href="/">My orders</a>
              </li>
              <li >
                <a href="/">My account</a>
              </li>
            </ul>
            
            <ul data-type="menuMobile">
              <li data-type="menuMobile">
                <a href="/" class="email">platzi@example.com</a>
              </li>
              <li data-type="menuMobile">
                <a href="/" class="sign-out">Sign out</a>
              </li>
            </ul >
            </div>
        `;
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("#mobileMenu")) return;
    if (e.target.matches(id) && state !== 1) {
      return parent.insertAdjacentHTML("afterend", menuMobile());
    }
    if (state === 1) {
      state = 0;
      return document.getElementById("mobileMenu").remove();
    }
    e.stopPropagation();
  });
}
