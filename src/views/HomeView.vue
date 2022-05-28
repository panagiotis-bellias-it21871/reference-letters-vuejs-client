<template>
  <div class="home">
    <img alt="Reference Letter Logo" src="../assets/logo.jpg">
    <AddReferenceLetterRequest v-on:add-reference-letter-request="addRlRequest"/>
    <ReferenceLetterRequestList v-on:del-rl-request="deletePost" v-bind:rl_requests="rl_requests"/>
  </div>
</template>

<script>

import axios from "axios"
let headers = {'Access-Control-Allow-Origin' : '*'}

// @ is an alias to /src
import AddReferenceLetterRequest from "@/views/AddReferenceLetterRequest.vue"
import ReferenceLetterRequestList from "@/views/ReferenceLetterRequestList.vue"

export default {
  name: 'HomeView',
  components: {
    AddReferenceLetterRequest,
    ReferenceLetterRequestList
  },
  data(){
    return {
      rl_requests: [],
      errors: [],
      backend: process.env.VUE_APP_BACKEND_URL
    }
  },
  methods : {
    addRlRequest(newRlRequest) { 
      const { title, completed } = newRlRequest;
      axios
      .post(`${this.backend}/todos`, {
        title,
        completed
      })
      .then(res => (this.rl_requests = [...this.rl_requests, res.data]))
      .catch(err => console.log(err));
    },
    deleteRlRequest(id) {
      axios
        .delete(`${this.backend}/todos/${id}`, headers)
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
    axios.get(`${this.backend}/rl_requests`, headers)
    .then(res => {
      alert(res.data["name"])
      this.rl_requests = res.data;
    })
    .catch(e => {
      this.errors.push(e);
    })

    axios.get(`${this.backend}/ping`, {
      headers: headers
    })
    .then(res => {
      console.log(res);
      alert("Ping " + res.data["ping"]);
    })
    .catch(e => {
      this.errors.push(e);
    })

  }
}
</script>
