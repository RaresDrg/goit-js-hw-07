import { galleryItems } from "./gallery-items.js";

const galleryLIstEl = document.querySelector(".gallery");


galleryItems.forEach((item) => {
  const markup = `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      >
    </a>
  </li>`;

  galleryLIstEl.insertAdjacentHTML("beforeend", markup);
});


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
