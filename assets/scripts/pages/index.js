import Navbar from "../components/navbar.js";
import Carousel from "../components/carousel.js";
import CardGallery from "../components/card-gallery.js";
import Footer from "../components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  Carousel();
  CardGallery(0, 6);
  Footer();
});
