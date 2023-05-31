import { carouselData } from "../constants/carousel-list.js";
import { DOMUtils } from "../utils/utils.js";

const Carousel = () => {
  const carouselIndicator = DOMUtils.find(".carousel-indicators");
  const carouselInner = DOMUtils.find(".carousel-inner");

  const carouselIndicatorEl = carouselData
    .map(
      (_, idx) =>
        `<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${idx}" class="${
          idx === 0 ? "active" : null
        }" aria-label="Slide ${idx + 1}" aria-current="true"></button>`
    )
    .join("");

  const carouselInnerEl = carouselData
    .map(
      (data) => `<div class="carousel-item ${data.id === 1 ? "active" : null}">
    <img src="${data.imageUrl}" alt="${data.title}" width="100%" height="500px" class="object-fit-cover">
    <div class="container">
      <div class="carousel-caption">
        <h1>${data.title}</h1>
        <p>${data.caption}</p>
      </div>
    </div>
  </div>`
    )
    .join("");

  carouselIndicator.innerHTML = carouselIndicatorEl;
  carouselInner.innerHTML = carouselInnerEl;
};

export default Carousel;
