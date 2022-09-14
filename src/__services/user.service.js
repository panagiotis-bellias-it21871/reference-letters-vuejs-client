//import config from 'config';
//import { authHeader } from '../_helpers';

import axios from "axios";

let headers = {
    'Access-Control-Allow-Origin' : '*' //,
    //'Content-Type': 'application/json'
  }

const backend=process.env.VUE_APP_BACKEND_URL
//const base_endpoint=process.env.VUE_APP_BASE_ENDPOINT_PREFIX
//const rl_letters_endpoint=process.env.VUE_APP_RL_LETTERS_ENDPOINT
//const auth_endpoint=process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
const login_endpoint=process.env.VUE_APP_AUTH_LOGIN_ENDPOINT

function login(username, password) {
    const formData = new FormData();
          formData.set('username', username);
          formData.set('password', password);
    axios
    .post(`${backend}/${login_endpoint}`, formData, headers+={'Content-Type': 'multipart/form-data'})
    .then(res => {
        let jwt = handleResponse(res)
        console.log(jwt)
        // login successful if there's a jwt in the response
        if (jwt) {
            // store jwt in local storage 
            // to keep user logged in between page refreshes
            localStorage.setItem('token', jwt);
        }

        return jwt;
    })
    .catch(err => console.log(err));
}

function logout() {
    // remove jwt from local storage to log user out
    localStorage.removeItem('token');
}

function handleResponse(response) {
    let data = response.data['access_token']
    /*
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }*/

    return data;
}

export const userService = {
    login,
    logout //,
    //getAll
};