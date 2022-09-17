<template>
  <div class="home">
    <img alt="Reference Letter Logo" src="../assets/logo.jpg">
    <!-- <div v-if=user> --><!--
    <div>
      <AddReferenceLetterRequest v-on:add-reference-letter-request="addRlRequest"/>
      <ReferenceLetterRequestList v-on:del-rl-request="deleteRlRequest" v-bind:rl_requests="rl_requests" v-bind:errors="errors"/>
    </div>
    <div v-else><br/>-->
    <div><br/>
      <SignupLoginView/>
      <OwnerDetails/>
    </div>
  </div>
</template>

<script>

import axios from "axios"
let headers = {'Access-Control-Allow-Origin' : '*'}

// @ is an alias to /src
//import AddReferenceLetterRequest from "@/views/AddReferenceLetterRequest.vue"
//import ReferenceLetterRequestList from "@/views/ReferenceLetterRequestList.vue"
import SignupLoginView from "./SignupLoginView.vue"
import OwnerDetails from "./OwnerDetails.vue"

export default {
  name: 'HomeView',
  components: {
  //  AddReferenceLetterRequest,
  //  ReferenceLetterRequestList,
    SignupLoginView,
    OwnerDetails
  },
  data(){
    return {
      rl_requests: [],
      errors: [],
      backend: process.env.VUE_APP_BACKEND_URL,
      base_endpoint: process.env.VUE_APP_BASE_ENDPOINT_PREFIX,
      rl_letters_endpoint: process.env.VUE_APP_RL_LETTERS_ENDPOINT,
      auth_endpoint: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
    }
  },
  methods : { /* TODO Fix code below */
    addRlRequest(newRlRequest) { 
      const { name, is_approved, is_declined, is_pending } = newRlRequest;
      axios
      .post(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}`, {
        name,
        is_approved,
        is_declined,
        is_pending,
      })
      .then(res => (this.rl_requests = [...this.rl_requests, res.data]))
      .catch(err => console.log(err));
    },
    deleteRlRequest(id) {
      axios
        .delete(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/${id}`, headers)
        .then(res => {
          this.rl_requests = this.rl_requests.filter(rl_request => rl_request.id !== id)
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created(){
    this.rl_requests = [
        {
          "id": 1,
          "carrier_name": "Quintessential SFT",
          "status": "pending"
        }
      ] /*
    console.log(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/`)
    axios.get(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/`, headers)
    .then(res => {
      this.rl_requests = res.data;
      console.log(res.data)
      console.log(res.status)
    })
    .catch(e => {
      console.log(e);
    })*/

  }
}
</script>
