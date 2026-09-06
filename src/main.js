// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", hundlerSubmit);

function hundlerSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"];
  const searchValue = query.value.trim();

  if (searchValue === "") {
    iziToast.show({
      message: "Please enter search word",
      color: "red",
      position: "topRight",
      timeout: 5000,
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(data => {
      const images = Array.isArray(data) ? data : data.hits;

      if (!images || images.length === 0) {
        iziToast.show({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          color: "red",
          position: "topRight",
          timeout: 5000,
        });

        return;
      }

      createGallery(images);
    })
    .catch(error => {
      console.log(error);

      iziToast.show({
        message: "Ops... try again!",
        color: "red",
        position: "topRight",
        timeout: 5000,
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}