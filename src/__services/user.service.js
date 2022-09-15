//import config from 'config';
//import { authHeader } from '../_helpers';

import axios from "axios";

let headers = {
    'Access-Control-Allow-Origin' : '*'
  }

const backend=process.env.VUE_APP_BACKEND_URL
const base_endpoint=process.env.VUE_APP_BASE_ENDPOINT_PREFIX
//const rl_letters_endpoint=process.env.VUE_APP_RL_LETTERS_ENDPOINT
const auth_endpoint=process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
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
    return response.data['access_token'];
}

function signupstudent(
   username, email, full_name, school, school_id, grades_url, password, password2 
) {
    if (password != password2) {
        alert("Passwords don't match! Try again...")
        return;
    }
    let student = true
    let teacher = false
    axios
    .post(`${backend}/${auth_endpoint}/register`, {
        email, password, username, full_name, student, teacher
    }, headers+={'Content-Type': 'application/json'})
    .then(res => {
        if (res.data["email"] == email){
            axios
            .post(`${backend}/${auth_endpoint}/request-verify-token`, {
                email
            }, headers+={'Content-Type': 'application/json'})
            .then(res => console.log(res))
            .catch(err => console.log(err));
            
            var user_username = username
            axios
            .post(`${backend}/${base_endpoint}/students`, {
                school, school_id, grades_url, user_username
            }, headers+={'Content-Type': 'application/json'})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    })
    .catch(err => console.log(err));
}

export const userService = {
    login,
    logout,
    signupstudent, //,
    //getAll
};