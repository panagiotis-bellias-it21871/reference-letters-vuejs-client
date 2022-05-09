<template>
    <div class="reference-letter-request-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <div class="card-body">
                <h3>{{todo.title}}</h3>
                <p>{{todo.completed}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ReferenceLetterRequestDetails",
    data() {
        return {
            id: this.$route.params.id,
            todo: []
        }
    },
    created(){
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
            //process.env.VUE_APP_BACKEND_URL
            .then(res => {
                this.todo = res.data
                //this.rl_request = res.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>

<style>

</style>