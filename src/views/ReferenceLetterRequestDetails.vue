<template>
    <div class="reference-letter-request-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <div class="card-body">
                <h3>{{rl_request['name']}}</h3>
                <p>Pending : {{rl_request['is_pending']}}</p>
                <p>Approved : {{rl_request['is_approved']}}</p>
                <p>Declined : {{rl_request['is_declined']}}</p>
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
            rl_request: []
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
    }
}
</script>

<style>

</style>