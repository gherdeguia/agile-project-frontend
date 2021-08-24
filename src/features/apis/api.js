import axios from "axios";
import config from "../../config"

const api = axios.create({
//    baseURL: 'http://localhost:8080',
    baseURL: config.url.API_URL
});


export default api;