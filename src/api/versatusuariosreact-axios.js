import axios from 'axios';

export const versatusuariosapi = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000,
    baseURL: '/api/',
});

const versatusuariosapiwithtoken = versatusuariosapi;
versatusuariosapiwithtoken.interceptors.request.use(config => {
    config.headers.common['Context-Type'] = 'application/json';
    config.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('versatusuariosToken')}`;
    return config;
});

export default versatusuariosapiwithtoken;
