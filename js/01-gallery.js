import { galleryItems } from './gallery-items.js';

// Вытягиваю элемменты, Див из HTML с классом
const galleryDiv = document.querySelector('.gallery');

// Зарендорил фото разметку Перебирал массив пообъектно С помощью мапа деструктирузируем переменные
const galleryImage = galleryItems.map(({ preview, original, description }) => {
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
});

// Добавил динамически  из JS  в HTML есть несколько методов, тк массив был пустой .innerHTML
galleryDiv.innerHTML = galleryImage.join('');
// console.log(gallaryImage.join(''));

// Добавляю слушателей по клику, чтобы открывалась в модальном окне, пишу функцию, с помощью библиотеки с помощью cdn
galleryDiv.addEventListener('click', onGalleryClick);

// код из библиотеки, адрес поставить динамически
const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);
// Відкриття модалки
function onGalleryClick(e) {
  // Запрещение от браузера действие по умолчанию
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = e.target.dataset.source;

  instance.show();

  // console.log(e.target);
  galleryDiv.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}
