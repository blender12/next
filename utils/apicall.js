import axios from 'axios';
const API=axios.create({baseURL:'https://mailerrr.herokuapp.com/'})

export const apiget=API.get('/get');