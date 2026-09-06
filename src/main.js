// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";
const form = document.querySelector(".form");
form.addEventListener ("submit", hundlerSubmit)

function hundlerSubmit (event) {
    event.preventDefault();
    const query = event.currentTarget.elements["search-text"]
    if (query.value.trim() === "") {
        iziToast.show({
    message: 'Please enter search word',
    color: 'red',
    position: 'topRight',
    timeout: 5000,
})
        return
    } 

        const respons = getImagesByQuery (query.value)
    .then (data => {
       clearGallery()
       showLoader()
        if (data.length <=0) {
iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    position: 'topRight',
    timeout: 5000,
})
        }
     else {
        createGallery(data)
    }} 
   )
        .catch (error => {
            console.log(error);
        iziToast.show({
            message: 'Ops... try again!',
    color: 'red',
    position: 'topRight',
    timeout: 5000,    
        })    
        } )
        .finally (() => {
            hideLoader()
                form.reset()
                }) 
           
    }
    