<template>
    <div class="reference-letter-request-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <div class="card-body">
                <h3>{{rl_request.title}}</h3>
                <p>{{rl_request.completed}}</p>
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
            rl_request: []
        }
    },
    created(){
        axios
            .get(`${process.env.VUE_APP_BACKEND_URL}/todos/${this.id}`)
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