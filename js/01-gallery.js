import { galleryItems } from './gallery-items.js';

const galleryLIstEl = document.querySelector(".gallery");

// create DOM elements //
galleryItems.forEach((item) => {
  const liEl = document.createElement("li");
  galleryLIstEl.append(liEl);

  liEl.classList.add("gallery__item");
  liEl.innerHTML = `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    >
  </a>`;
});


// handle modal //
galleryLIstEl.addEventListener("click", handleModalImage)

function handleModalImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  const targetSrc = event.target.dataset.source;
  
  const instance = basicLightbox.create(`<img src="${targetSrc}">`);
  instance.show();

  // close modal with key: "esc" //
  document.addEventListener("keydown", handleEscClose)

  function handleEscClose(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleEscClose)
    };
  };
};