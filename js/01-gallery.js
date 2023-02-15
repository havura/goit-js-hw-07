import { galleryItems } from './gallery-items.js';

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

galerryColection.insertAdjacentHTML('afterbegin', createGalleryItems);

const clickOnGalleryColection = event => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }
};

const instance = basicLightbox.create(
  `
    <img src= "${target.dataset.source}">
`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscapePress);
    },
    onclose: instance => {
      window.removeEventListener('keydown', onEscapePress);
    },
  }
);
instance.show();

function onEscapePress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

galerryColection.addEventListener('click', clickOnGalleryColection);
