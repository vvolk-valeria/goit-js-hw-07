import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function galleryItemEl(arr) {
  arr.map(({ preview, original, description }) => {
    galleryEl.insertAdjacentHTML('afterbegin', `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`);
  });
}

galleryItemEl(galleryItems);

galleryEl.addEventListener('click', onModalOpen);


function onModalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG' ) {
    return;   
  }
  
  // создание модального окна 
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="1280" alt='${event.target.alt}'>
`)
  instance.show(); 

  // закрытие модального окна с помощью клавиши Esc
function onModalClose(event) {
  if (event.code === 'Escape') {
    instance.close();    
  }
}

window.addEventListener('keydown', onModalClose, {once:true});
}


  
//= -----------------------------------------------------
// const makeItemsEl = ({ preview, original, description }) => {
//      return `<div class="gallery__item">
//   <a class="gallery__link" href='${original}'>
//     <img
//       class="gallery__image"
//       src='${preview}'
//       data-source='${original}'
//       alt='${description}'
//     />
//   </a>
// </div>`;

// };
// console.log(makeItemsEl);   

// const createItemsEl = galleryItems.map(makeItemsEl).join("");

// console.log(createItemsEl); 

// galleryEl.insertAdjacentHTML('afterbegin', createItemsEl);
//= -----------------------------------------------------

//* через map
// const makeItemsEl = (items) => {
//   const result = items.map(item => 
//     `<li class="gallery__item">
//   <a class="gallery__link" href='${item.original}'>
//     <img
//       class="gallery__image"
//       src='${item.preview}'
//       data-source='${item.original}'
//       alt='${item.description}'/>
//   </a>
// </li>`).join('');
//   return result;
// };

// const makeItemsEl = (items) => items.map(item => 
//     `<li class="gallery__item">
//   <a class="gallery__link" href='${item.original}'>
//     <img
//       class="gallery__image"
//       src='${item.preview}'
//       data-source='${item.original}'
//       alt='${item.description}'/>
//   </a>
// </li>`).join('');

//* через reduce
// const makeItemsEl = (items) => items.reduce((acc, item) => acc + 
//     `<li class="gallery__item">
//   <a class="gallery__link" href='${item.original}'>
//     <img
//       class="gallery__image"
//       src='${item.preview}'
//       data-source='${item.original}'
//       alt='${item.description}'/>
//   </a>
// </li>`, '');
// console.log(makeItemsEl(galleryItems));

// const insertList = (string) => {
//   galleryEl.insertAdjacentHTML('beforeend', string);
// };

// insertList(makeItemsEl(galleryItems));

