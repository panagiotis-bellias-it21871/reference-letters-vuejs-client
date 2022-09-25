<template>
    <div class="approve-rl-request">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <p>Here we must expose info and input elements to enter the text</p>
            </div>
            <div>
            <button v-on:click="confirm" class="btn btn-clock btn-stud">Confirm</button>
            </div>
        </div>
</template>

<script>
import DataService from '../services/data-service';
export default {
    name: "ApproveRlRequest",
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        confirm(){
            DataService.approveRlRequestById(this.id);
            this.$router.push("/")
        }
    },
    mounted(){
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