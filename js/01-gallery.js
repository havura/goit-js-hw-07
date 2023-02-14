import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galerryColection = document.querySelector('.gallery');

const createGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview} "
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

const clickOnGalleryColection = (event) => {
    event.preventDefault();
    
    const { target } = event;

    if (target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src= "${target.dataset.source}">
`);
    instance.show();
    
};

galerryColection.insertAdjacentHTML('afterbegin', createGalleryItems);

galerryColection.addEventListener('click', clickOnGalleryColection);
