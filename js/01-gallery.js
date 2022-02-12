import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function renderList(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`).join('');
  
  galleryEl.insertAdjacentHTML('afterbegin', markup);
};

renderList(galleryItems);

galleryEl.addEventListener('click', selectorImg);

function selectorImg(event) {
  event.preventDefault();

  const galleryItem = galleryItems.find(galleryItem => galleryItem.preview === event.target.src);

  const modal = basicLightbox.create(`
    <div class="modal">
    <img src="${galleryItem.original}">
    </div>`
    ,
  );
  
  const keydownClick = ({ key }) => {
    if (key === 'Escape') {
      modal.close();
      document.removeEventListener("click", handleClick);
    };
  };
  
  document.addEventListener("keydown", keydownClick);
  
  modal.show();
}