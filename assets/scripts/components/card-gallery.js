import { galleryData } from "../constants/gallery-list.js";
import { DOMUtils } from "../utils/utils.js";

const CardGallery = (startIdx = 0, endIdx = galleryData.length, data = galleryData) => {
  const cardGallery = DOMUtils.find(".card-list");
  const cardGalleryEl = data.slice(startIdx, endIdx)
    .map(
      (data, idx) => `<div class="col">
  <div key=${idx} class="card shadow-sm">
    <img class="card-image" src="${data.image}" alt="${data.title}">

    <div class="card-body">
      <p class="card-text">
        ${data.caption}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <a href="${data.image}" class="btn btn-sm btn-outline-secondary" target="_blank">View</a>
        <small class="text-muted">${data.date}</small>
      </div>
    </div>
  </div>
</div>`
    )
    .join("");

  cardGallery.innerHTML = cardGalleryEl;
};

export default CardGallery;
