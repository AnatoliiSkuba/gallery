import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function renderList(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `).join('');
  
  galleryEl.insertAdjacentHTML('afterbegin', markup);
};

renderList(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// galleryEl.addEventListener('click', selectorImg);


// function selectorImg(event) {
//   event.preventDefault();

//   const galleryItem = galleryItems.find(galleryItem => galleryItem.preview === event.target.src);
//   event.target.src = galleryItem.original;

//   const modal = basicLightbox.create(`
//     <div class="modal">
//      <img width="1280" height="900" src="${galleryItem.original}">
//     </div>
// `).show();