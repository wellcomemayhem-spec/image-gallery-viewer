import lightbox from 'lightbox2';

const galleryImages = [
    { src: 'images/nature1.jpg', category: 'nature' },
    { src: 'images/urban1.jpg', category: 'urban' },
    { src: 'images/portrait1.jpg', category: 'portraits' }
];

const gallery = document.querySelector('.gallery');

galleryImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.category;
    imgElement.setAttribute('data-lightbox', 'gallery');
    gallery.appendChild(imgElement);
});
