import axios from 'axios';
const API=axios.create({baseURL:process.env.URL_POST});
export const apiget=(user)=>API.post('/mail',user)