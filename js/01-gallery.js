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
     <img src="${galleryItem.original}">
    </div>`
    , {
    onShow: (modal) => {
        const keydownClick = ({ key }) => {
        if (key === 'Escape') {
          modal.close();
          document.removeEventListener("keydown", keydownClick);
      };
    };
          document.addEventListener("keydown", keydownClick);
    },
    onClose: (modal) => {
      event.target.src = galleryItem.preview;
    }
  }
  );
  
  const handleClick = () => {
  if (basicLightbox.visible())
  {
    document.addEventListener("click", handleClick2);
    document.removeEventListener("click", handleClick);
    };
  };
  
document.addEventListener("click", handleClick);

  function handleClick2() {
  if (basicLightbox.visible())
  {
    modal.close();
    document.removeEventListener("click", handleClick2);
    };
  };
  
  modal.show();
}