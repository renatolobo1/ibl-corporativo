import axios from "axios";
let API_URL = '';

if (process.env.NODE_ENV === 'production') {
    API_URL = "https://www.iblsemlegenda.com.br/api"
}else{
    API_URL = "http://localhost:3001/api"
}

const api = axios.create({
    baseURL: API_URL
});


export default api;
