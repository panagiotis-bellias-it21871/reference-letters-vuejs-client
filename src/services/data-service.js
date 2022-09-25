import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_BACKEND_URL + "/" + process.env.VUE_APP_BASE_ENDPOINT_PREFIX + "/";

class DataService {

    createRlRequest(carrier_name, carrier_email, status, text, teacher_id, student_id) {
        const request_body = {
            carrier_name,
            carrier_email,
            status,
            text,
            teacher_id,
            student_id
        }
        return axios.post(API_URL + process.env.VUE_APP_RL_LETTERS_ENDPOINT + "/", request_body, { headers: authHeader() })
    }

    getRlRequestsForStudent(student_id) {
        return axios.get(API_URL + process.env.VUE_APP_RL_LETTERS_ENDPOINT + "/s/" + student_id, { headers: authHeader() })
    }

    getRlRequestById(id) {
        return axios.get(`${API_URL}${process.env.VUE_APP_RL_LETTERS_ENDPOINT}/${id}`, { headers: authHeader() })
    }

    updateRlRequestById(id, carrier_name, carrier_email, status, text) {
        const request_body = {
            carrier_name,
            carrier_email,
            status,
            text
        }
        return axios.put(API_URL + process.env.VUE_APP_RL_LETTERS_ENDPOINT + "/" + id, request_body, { headers: authHeader() })
    }
    
    getPendingRlRequestsForTeacher(teacher_id) {
        return axios.get(`${API_URL}${process.env.VUE_APP_RL_LETTERS_ENDPOINT}/t/pending/${teacher_id}`, { headers: authHeader() })
    }

    approveRlRequestById(id, text) {
        return axios.put(API_URL + process.env.VUE_APP_RL_LETTERS_ENDPOINT + "/t/" + id + "/approve", {
          text: text
        }, { headers: authHeader() })
    }

    declineRlRequestById(id) {
        return axios.delete(API_URL + process.env.VUE_APP_RL_LETTERS_ENDPOINT + "/t/" + id + "/decline", { headers: authHeader() })
    }

    getStudentById(id){
        console.log(id);
        return axios.get(`${API_URL}students/${id}`, { headers: authHeader() })
    }

    getTeacherById(id){
        return axios.get(`${API_URL}teachers/${id}`, { headers: authHeader() })
    }

    getTeachers(){
        return axios.get(API_URL + "teachers", { headers: authHeader() })
    }

    getTeacherUsernames(){
        let teachers, teachers_data = {};
        this.getTeachers().then( res => {
            console.log(res.data);
            teachers = res.data;
            console.log(teachers[0]);
            let i=0, teacher;
            for (let t in teachers) {
                teacher = t[i];
                console.log(teacher);
                let id = teacher.id;
                let name = teacher.full_name;
                teachers_data+={
                    "id": id,
                    "name": name,
                }
                i++;
            }
            return teachers_data;
        });
        
    }
    
}

export default new DataService();