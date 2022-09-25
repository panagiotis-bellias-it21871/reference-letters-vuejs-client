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
        </div>
    </div>
</template>

<script>
import DataService from "../services/data-service.js";
export default {
    name: "ReferenceLetterRequestDetails",
    data() {
        return {
            id: this.$route.params.id,
            errors: [],
            rl_request: [],
            student_name: "",
            teacher_name: "",
        }
    },
    mounted(){
        DataService.getRlRequestById(this.id).then(
            (res) => {
                this.rl_request = res.data;
                console.log(this.rl_request);
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
        console.log(this.teacher_name);
    }
}
</script>

<style>

</style>