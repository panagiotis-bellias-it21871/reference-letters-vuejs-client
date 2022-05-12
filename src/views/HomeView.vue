<template>
  <div class="home">
    <img alt="Reference Letter Logo" src="../assets/logo.jpg">
    <!--     <AddReferenceLetterRequest v-on:add-reference-letter-request="addRlRequest"/> -->
    <AddReferenceLetterRequest />
    <!--     <ReferenceLetterRequestList v-on:del-rl-request="deletePost" v-bind:rl_requests="rl_requests"/> -->
    <ReferenceLetterRequestList v-bind:rl_requests="rl_requests"/>
  </div>
</template>

<script>

import axios from "axios"

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
      errors: []
    }
  },
  methods(){ /*
    addRlRequest(newRlRequest) { 
      const { title, completed } = newRlRequest;
      axios
      .post(`${process.env.VUE_APP_BACKEND_URL}/todos`, {
        title,
        completed
      })
      .then(res => (this.rl_requests = [...this.rl_requests, res.data]))
      .catch(err => console.log(err));
    },
    deleteRlRequest(id) {
      axios
        .delete(`${process.env.VUE_APP_BACKEND_URL}/todos/${id}`)
        .then(res => {
          this.rl_requests = this.rl_requests.filter(rl_request => rl_request.id !== id)
        })
        .catch(err => {
          console.log(err);
        })
    } */
  },
  created(){
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/todos?_limit=5`)
    .then(res => {
      this.rl_requests = res.data;
    })
    .catch(e => {
      this.errors.push(e);
    })
  }
}
</script>
