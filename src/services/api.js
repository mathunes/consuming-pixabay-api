import axios from 'axios';

const api = axios.create({baseURL: 'https://pixabay.com/get/52e7d243485bae14f6da8c7dda79367c1739dae450546c48702872d2964fc45cbd_1280.jpg'});

export default api;