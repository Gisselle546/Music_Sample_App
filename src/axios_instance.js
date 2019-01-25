import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.napster.com/v2.2/'
});

export default instance;
