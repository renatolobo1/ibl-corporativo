import axios from "axios";
let API_URL = '';

if (process.env.NODE_ENV === 'production') {
    API_URL = "http://www.iblsemlegenda.com.br/backoffice"
}else{
    API_URL = "http://localhost:3001/backoffice"
}

const api = axios.create({
    baseURL: API_URL
});


export default api;
