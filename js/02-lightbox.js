import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');

const galleryImage = galleryItems.map(({ preview, original, description }) => {
  const photoE = `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" title="${description}"
    />
  </a></li>`;
  return photoE;
});

// console.log(galleryImage);
// Перевести с массива в строку
const stringGallery = galleryImage.join('');
// Добавил динамически  из JS  в HTML есть несколько методов, тк массив был пустой .innerHTML
galleryUl.innerHTML = stringGallery;
// console.log(gallaryImage.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

// // Добавляю слушателей по клику, чтобы открывалась в модальном окне, пишу функцию, с помощью библиотеки с помощью cdn
// galleryDiv.addEventListener('click', onGalleryClick);

// // Відкриття модалки
// function onGalleryClick(e) {
//   // Запрещение от браузера действие по умолчанию
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   // код из библиотеки, адрес поставить динамически
//   const instance = basicLightbox.create(`
//     <img src=${e.target.getAttribute('data-source')} width="800" height="600"
// >
// `);

//   instance.show();
//   console.log(e.target);
//   galleryDiv.addEventListener('keydown', e => {
//     if (e.key === 'Escape') {
//       instance.close();
//     }
//   });
// }
