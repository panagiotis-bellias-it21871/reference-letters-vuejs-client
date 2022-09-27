<template>
    <div class="reference-letter-request-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <div class="card-body">
                <h3>{{rl_request.carrier_name}}</h3>
                <p>From: {{student_name}}</p>
                <p>To: {{teacher_name}}</p>
                <p>Status: {{rl_request.status}}</p>
            </div>
            <div v-if="rl_request.status=='approved'" class="card-body">
                <b>Text</b>
                <p v-if="rl_request.text">{{rl_request.text}}</p>
                <p v-else>No Text Available!</p>
            </div>
            <div v-if="user.teacher">
            <button v-on:click="approve" class="btn btn-clock btn-stud">Approve</button>
            <button v-on:click="decline" class="btn btn-clock btn-teac">Decline</button>
            </div>
        </div>
    </div>
</template>

<script>
import DataService from "../services/data-service.js";
import UserService from "../services/user-service.js";
export default {
    name: "ReferenceLetterRequestDetails",
    data() {
        return {
            id: this.$route.params.id,
            errors: [],
            rl_request: [],
            student_name: "",
            teacher_name: "",
            user: "",
        }
    },
    methods: {
        approve() {
            this.$router.push(`/approve_request/${this.id}`);
        },
        decline() {
            DataService.declineRlRequestById(this.id);
            this.$router.go(-1);
        }
    },
    created(){
        /*
        if (this.id == 1) {
            this.rl_request = {
                carrier_name: "Harokopio University of Athens",
                status: "pending",
            }
            this.student_name = "Panagiotis Bellias Student",
            this.teacher_name = "Panagiotis Bellias Teacher"
        }
        if (this.id == 2) {
            this.rl_request = {
                carrier_name: "Quintessential SFT IKE",
                status: "pending",
            }
            this.student_name = "Panagiotis Bellias Student",
            this.teacher_name = "Panagiotis Bellias Teacher"
        }*/
        UserService.getUserBoard().then(
        (response) => {
            this.user = response.data;
            },
              (error) => {
                console.log(error);
            });

        DataService.getRlRequestById(this.id).then(
            (res) => {
                this.rl_request = res.data;
                console.log(this.rl_request);
                DataService.getStudentById(this.rl_request.student_id).then(
                (res) => {
                    this.student_name = res.data.full_name;
                    console.log(this.student_name);
                },
                (error) => {
                    this.student_name =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                }
            )
            console.log(this.student_name);
            DataService.getTeacherById(this.rl_request.teacher_id).then(
                (res) => {
                    this.teacher_name = res.data.full_name;
                    console.log(this.teacher_name);
                },
                (error) => {
                    this.teacher_name =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                }
            )
            },
            (error) => {
                this.rl_request =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
            }
        );
        /*
        console.log(this.rl_request.student_id); 
        DataService.getStudentById(this.rl_request.student_id).then(
            (res) => {
                this.student_name = res.data.full_name;
                console.log(this.student_name);
            },
            (error) => {
                this.student_name =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
            }
        )
        console.log(this.student_name);
        DataService.getTeacherById(this.rl_request.teacher_id).then(
            (res) => {
                this.teacher_name = res.data.full_name;
                console.log(this.teacher_name);
            },
            (error) => {
                this.teacher_name =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
            }
        )
        console.log(this.teacher_name); */
    }
}
</script>

<style scoped>
.btn-stud {
  color: #fff;
  background-color: blue;
  width: 220px;
  
}
.btn-teac {
  color: #fff;
  background-color: rgb(148, 7, 61);
  width: 220px;
}
</style>