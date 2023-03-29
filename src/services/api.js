// https://api.themoviedb.org/3/movie/now_playing?api_key=9ab1fbe9e58b9b8050df0316a4807952&language=pt-BR
// base url: https://api.themoviedb.org/3

import axios from "axios";

const api = axios.create({
    baseUrl: 'https://api.themoviedb.org/3'
});

export default api;