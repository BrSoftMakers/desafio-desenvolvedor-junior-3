import axios from "axios";

const LivrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

function getLivros() {
    const response = LivrosAPI.get('/')

    return response.data
}

export {
    getLivros
}