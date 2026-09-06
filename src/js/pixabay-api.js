import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api"
export function getImagesByQuery(query) {
return axios.get ("/", {params:{
    key: "57438008-644d4578100eb60c8f5ec14ee",
    q: query,
    image_type: "photo",
orientation: "horizontal",
safesearch: "true"
}}) .then (response => response.data.hits)
}

