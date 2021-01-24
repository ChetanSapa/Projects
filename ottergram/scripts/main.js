var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

// Задаём изображение и название для увеличенного изображения
function setDetails(imageUrl, titleText) {
  'use strict'
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
// получаем URL изображения из атрибута данных миниатюры
function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
// получаем текст названия из атрибута данных миниатюры
function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}
// создаём аргументы для setDetails(доступ к миниатюрам)
function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
// создаём прослушиватель кликов по миниатюрам и вибираем миниатюру на какую кликнули
function addThumbClickHandler(thumb) {
  'use strict'
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetail();
  });
}
// создаем массив с данными всех миниатюр
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
// удаляем анимацию
function hiddeDetails() {
  'use strict'
  document.body.classList.add(HIDDEN_DETAL_CLASS);
}
// добавляем анимацию появления большого изображения
function showDetail() {
  'use strict'
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}
// добавляем прослушиватель который при нажатии эскеп возвращает исходнуую структуру документа
function addKeyPressHandler() {
  'use strict'
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hiddeDetails();
    }
  });
}
// получаем массив с миниатюрами
function initializeEvents() {
  'use strict'
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}
// инициализируем код
initializeEvents();
