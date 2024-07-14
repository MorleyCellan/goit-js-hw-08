import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const listGallery = array => {
  return array
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join('');
};
galleryContainer.insertAdjacentHTML('beforeend', listGallery(galleryItems));
const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryHandler.on('show.simplelightbox');
