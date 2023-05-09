import axios from "axios";

const apiFetch = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    }
})

export default apiFetch;