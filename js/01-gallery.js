import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function galleryItemEl(arr) {
  arr.map((item) => {
    galleryEl.insertAdjacentHTML('afterbegin', `<div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
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

window.addEventListener('keydown', onModalClose);
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

