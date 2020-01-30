import axios from "axios";
let API_URL = '';

if (process.env.NODE_ENV === 'production') {
    API_URL = "http://186.249.51.18/api"
}else{
    API_URL = "http://localhost:3001/api"
}

const api = axios.create({
    baseURL: API_URL
});


export default api;