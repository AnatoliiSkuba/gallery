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
  event.target.src = galleryItem.original;

  const modal = basicLightbox.create(`
    <div class="modal">
     <img width="1280" height="900" src="${galleryItem.original}">
    </div>
`).show();

  
//   const visible = basicLightbox.visible()
//   if (visible === true) {
//  document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
// });
//   }


// visible = modal.visible()

   console.log("visible", visible)

  
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.target.src);
  }

// console.log("visible", visible)

//   onClose: (modal) => {
//     document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
// });
//   }
  

