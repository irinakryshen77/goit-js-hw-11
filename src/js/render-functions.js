import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
const loader = document.querySelector(".loader")

export function createGallery(images) {
const markup = images.map(({largeImageURL, previewURL, likes, views, comments, downloads, name
 }) => `<li class="gallery-item"><a href="${largeImageURL}"><img src="${previewURL}" alt="${name}"
      width="360" /></a><ul class = "descriprion"><li>Likes<spun>${likes
}</spun></li>
<li>Views<spun>${views}</spun></li>
<li>Comments<spun>${comments}</spun></li>
<li>Downloads<spun>${downloads}</spun></li>
</ul></li>
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
