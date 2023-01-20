import axios from 'axios'
import BASE_URL from '../constants/BASE_URL.js'
import { useState } from 'react';

export const Nome = () => {
    const [nome, setNome] = useState([])
    axios
        .get(`${BASE_URL}`)
        .then((response) => {
            setNome(response)
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        });
    return nome
};