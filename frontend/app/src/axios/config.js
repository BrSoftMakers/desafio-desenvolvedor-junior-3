import axios from 'axios';

const blogFetch = axios.create({
    baseURL: 'http://localhost:8000'
})

export default blogFetch;