<template>
    <div class="reference-letter-request-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <div class="card-body">
                <h3>{{rl_request['carrier_name']}}</h3>
                <p>From: {{student['name']}}</p>
                <p>To: {{teacher['name']}}</p>
                <p>Status : {{rl_request['status']}}</p>
                <b>Text</b>
                <p>{{rl_request['text']}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "ReferenceLetterRequestDetails",
    data() {
        return {
            id: this.$route.params.id,
            errors: [],
            rl_request: [],
            student: [],
            teacher: []
        }
    },
    created(){
        axios
            .get(`${process.env.VUE_APP_BACKEND_URL}/rl_requests/${this.id}`)
            .then(res => {
                this.rl_request = res.data
            })
            .catch(e => {
                this.errors.push(e)
            })
        axios
            .get(`${process.env.VUE_APP_BACKEND_URL}/students/${this.id}`)
            .then(res => {
                this.student = res.data
            })
            .catch(e => {
                this.errors.push(e)
            })
        axios
            .get(`${process.env.VUE_APP_BACKEND_URL}/teachers/${this.id}`)
            .then(res => {
                this.teacher = res.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>

<style>

</style>