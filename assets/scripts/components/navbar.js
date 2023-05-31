import { navMenu } from "../constants/nav-menu.js";
import { DOMUtils, URLUtils } from "../utils/utils.js";

const Navbar = () => {
  const nav = DOMUtils.find(".nav-list"); //ul
  const isActive = (path) =>
    URLUtils.isActivePage(path) ? "link-light" : "link-secondary";

  const navEl = navMenu
    .map(
      (data, idx) =>
        `<li>
    <a key=${idx} href="${data.link}" class="nav-link px-2 ${isActive(
          data.link
        )}">${data.title}</a>
  </li>`
    )
    .join("");

  nav.innerHTML = navEl;
};

export default Navbar;
