import { galleryItems } from './gallery-items.js';
// Вытягиваю элемменты
const galleryDiv = document.querySelector('.gallery');
// const backdrop = document.querySelector('.gallery__link');
// const closeImage = document.querySelector('');

// Зарендорил фото разметку Перебирал массив пообъектно
const gallaryImage = galleryItems.map(({ preview, original, description }) => {
  const photoE = `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
  return photoE;

  // console.log(galleryItems);
});

console.log(gallaryImage);
// Перевести с массива в строку
const stringGallery = gallaryImage.join('');
// Добавил динамически  из JS  в HTML
galleryDiv.innerHTML = stringGallery;
console.log(gallaryImage.join(''));

// Добавляю слушателей
// galleryDiv.addEventListener('click', onGalleryClick);

// function onGalleryClick() {
//   galleryDiv.addEventListener('click', onGalleryClick);
//   document.body.classList('');
// }
