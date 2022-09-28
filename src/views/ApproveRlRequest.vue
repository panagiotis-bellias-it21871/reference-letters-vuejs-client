<template>
    <div class="approve-rl-request">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-clock btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card bg-dark mb-3">
            <form @submit.prevent="confirm">
                <div class="form-group">
                    <label>Approval Text</label>
                    <textarea v-model="text" type="text" name="text" rows="9" cols="40"
                    id="text" class="form-control" placeholder="Enter your approval text"/>
                </div>
                <div>
                    <button class="btn btn-clock btn-teac">Confirm</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import DataService from '../services/data-service';
export default {
    name: "ApproveRlRequest",
    data() {
        return {
            text: "",
            id: this.$route.params.id,
        }
    },
    methods: {
        confirm(){
            DataService.approveRlRequestById(this.id, this.text);
            this.$router.push('/home');
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