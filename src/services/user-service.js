import axios from "axios";
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_BACKEND_URL + "/";

class UserService {

    /*
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }*/

    getUserBoard() {
        return axios.get(API_URL + "users/me", { headers: authHeader() });
    }

    getStudentInfo(username) {
        console.log(username);
        let user_username = username;
        return axios.get(`${API_URL}${process.env.VUE_APP_BASE_ENDPOINT_PREFIX}/students/u/${user_username}`, { headers: authHeader() });
    }

    /*
    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }*/

}

export default new UserService();