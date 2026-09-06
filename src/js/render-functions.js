import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
const loader = document.querySelector(".loader")

export function createGallery(images) {
const markup = images.map(({largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads
 }) => `<li class="gallery-item">
      <a href="${largeImageURL}">
        <img
          src="${webformatURL}"
          alt="${tags}"
          width="360"
        />
      </a>

      <ul class="descriprion">
        <li>Likes <span>${likes}</span></li>
        <li>Views <span>${views}</span></li>
        <li>Comments <span>${comments}</span></li>
        <li>Downloads <span>${downloads}</span></li>
      </ul>
    </li>
`).join("")
gallery.insertAdjacentHTML("beforeend", markup)
lightbox.refresh()
}

export function clearGallery() {
gallery.innerHTML = ""
}

export function showLoader() {
loader.classList.remove("is-hidden")
}

export function hideLoader(){
loader.classList.add("is-hidden")
}
