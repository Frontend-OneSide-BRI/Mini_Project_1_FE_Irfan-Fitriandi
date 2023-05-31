import Navbar from "../components/navbar.js";
import CardGallery from "../components/card-gallery.js";
import Footer from "../components/footer.js";
import { galleryData } from "../constants/gallery-list.js";
import { DOMUtils } from "../utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  Footer();
  CardGallery();

  const navCats = DOMUtils.findAll(".categories .nav-link");

  for (let navCat of navCats) {
    navCat.addEventListener("click", function (e) {
      e.preventDefault();

      const prevAct = DOMUtils.find(".categories .nav-link.active");

      if (prevAct) {
        prevAct.classList.remove("active");
      }

      e.target.classList.add("active");

      const categoryName = e.target.text.toLowerCase();

      const filteredData = galleryData.filter((el) =>
        el.category.includes(categoryName)
      );

      console.log(filteredData);

      CardGallery(0, filteredData.length, filteredData);
    });
  }
});
