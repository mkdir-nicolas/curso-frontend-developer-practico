export default function menuDesktop(id, parent) {
  let state;
  const menuDesktop = () => {
    state = 1;
    return `
            <div class="desktop-menu desktop" id="desktopMenu" >
              <ul>
                <li>
                  <a href="/" class="title">My orders</a>
                </li>
        
                <li>
                  <a href="/">My account</a>
                </li>
        
                <li>
                  <a href="/">Sign out</a>
                </li>
              </ul>
            </div>
            `;
  };
  document.addEventListener("click", (e) => {
    if (e.target.closest("#desktopMenu")) return;

    if (e.target.matches(id) && state !== 1) {
      return parent.insertAdjacentHTML("beforeend", menuDesktop());
    }
    if (state === 1) {
      state = 0;
      return parent.removeChild(desktopMenu);
    }
    // e.stopPropagation();
  });
}
