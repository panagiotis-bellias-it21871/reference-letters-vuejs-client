//import config from 'config';
import { authHeader } from "../__helpers/auth-header";
import axios from "axios";

let headers = {
    'Access-Control-Allow-Origin' : '*',
  }

const backend=process.env.VUE_APP_BACKEND_URL
const base_endpoint=process.env.VUE_APP_BASE_ENDPOINT_PREFIX
//const rl_letters_endpoint=process.env.VUE_APP_RL_LETTERS_ENDPOINT
const auth_endpoint=process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
const login_endpoint=process.env.VUE_APP_AUTH_LOGIN_ENDPOINT

async function login(username, password) {
    return new Promise((resolve)=>{
        let ok = false;
        const formData = new FormData();
            formData.set('username', username);
            formData.set('password', password);
        axios
        .post(`${backend}/${login_endpoint}`, formData, headers+={'Content-Type': 'multipart/form-data'})
        .then(res => {
            let jwt = handleResponse(res)
            if (res.status == 200) ok = true
            console.log(ok, res.status)
            console.log(jwt)
            // login successful if there's a jwt in the response
            if (jwt) {
                // store jwt in local storage 
                // to keep user logged in between page refreshes
                localStorage.setItem('token', jwt);
            }
            return ok
        })
        .catch(err => console.log(err));
        setTimeout(()=>{
            resolve();
        } , 5000
        );
    })
}

function logout() {
    // remove jwt from local storage to log user out
    axios.post(`${backend}/auth/jwt/logout`, headers).catch(err => console.log(err));
    localStorage.removeItem('token');
}

function handleResponse(response) {
    return response.data['access_token'];
}

async function getuser() {
    return new Promise((resolve)=>{
        let user={}
        headers = headers + authHeader() + { 'Content-Type': 'application/json' }
        console.log(headers)
        axios.get(`${backend}/users/me`, 
            {   'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        )
        .then(res => {
            console.log(res)
            user=res.data["user"]
            console.log(user)
            return user;
        }).catch(err => console.log(err))

        
        setTimeout(()=>{
            resolve();
        } , 5000
        );
    })

}

function signupstudent(
   username, email, full_name, school, school_id, grades_url, password, password2 
) {
    if (password != password2) {
        alert("Passwords don't match! Try again...")
        return false;
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
        return true
    }
    )
    .catch(err => console.log(err));
}

export const userService = {
    login,
    logout,
    signupstudent, //,
    getuser,
    //getAll
};