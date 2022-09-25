import axios from 'axios';
import UserService from './user-service';

const API_URL = process.env.VUE_APP_BACKEND_URL + "/";

class AuthService {

    login(user) {
        const formData = new FormData();
                formData.set('username', user.email);
                formData.set('password', user.password);
        console.log({
            formData
        })
        return axios
          .post(API_URL + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/" + process.env.VUE_APP_AUTH_LOGIN_ENDPOINT, formData)
          .then(response => {
            if (response.data.access_token) {
              localStorage.setItem('user', JSON.stringify(response.data));
            }
    
            return response.data;
          })
          .catch(e => {
            console.log(e);
          });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(email, password, username, full_name, student, teacher) {
        return axios.post(API_URL + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/register", {
          email: email,
          password: password,
          username: username,
          full_name: full_name,
          student: student,
          teacher: teacher
        });
    }

    registerStudent(student) {
        this.register(student.email, student.password, student.username, student.fullname, true, false).then(
          res => {
            console.log(res);
            axios.post(API_URL + process.env.VUE_APP_BASE_ENDPOINT_PREFIX + "/students", {
              full_name: student.fullname,
              school: student.school,
              school_id: student.schid,
              grades_url: student.gradesurl,
              user_username: student.username
            }).then(
              (res) => {
                console.log(res);
              }
            );
          }
        ).catch(err => {
          console.log(err);
          return err;
        });
        return axios.post(API_URL + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/request-verify-token", {
          email: student.email
        })
    }

    registerTeacher(teacher) {
        this.register(teacher.email, teacher.password, teacher.username, teacher.fullname, false, true).then(
          res => {
            console.log(res);
            axios.post(API_URL + process.env.VUE_APP_BASE_ENDPOINT_PREFIX + "/teachers", {
              full_name: teacher.fullname,
              description: teacher.description,
              user_username: teacher.username
            }).then(
              (res) => {
                console.log(res);
              }
            );
          }
        ).catch(err => {
          console.log(err);
          return err;
        });
        return axios.post(API_URL + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/request-verify-token", {
          email: teacher.email
        })
    }

    verifyToken(token) {
        console.log(token);
        return axios.post(API_URL + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/verify", {
          token: token
        });
    }

    username() {
        return UserService.getUserBoard()
          .then(response => {
            console.log("HERE: " + JSON.stringify(response.data.username));
            localStorage.setItem('username', JSON.stringify(response.data.username));
    
            return response.data.username;
          })
          .catch(e => {
            console.log(e);
          });
    }

}

export default new AuthService();