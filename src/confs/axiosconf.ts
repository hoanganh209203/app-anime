import axios from 'axios'
export const axiosservice = axios.create({
    baseURL: 'https://nodejs-fe.vercel.app'
})