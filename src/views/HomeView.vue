<template>
  <div class="home">
    <img alt="Reference Letter Logo" src="../assets/logo.jpg">
    <AddReferenceLetterRequest v-on:add-reference-letter-request="addRlRequest"/>
    <ReferenceLetterRequestList v-bind:todos="todos"/> <!-- v-bind:rl_requests="rl_requests" -->
  </div>
</template>

<script>

import axios from "axios";

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
      todos: [],
      // rl_requests: [],
      errors: []
    }
  },
  methods(){
    addRlRequest(newRlRequest) {
      const { title, completed } = newRlRequest
      axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed
      })
      .then(res => (this.todos = [...this.todos, res.data]))
      .catch(err => console.log(err))
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    //process.env.VUE_APP_BACKEND_URL
    .then(res => {
      this.todos = res.data
      //this.rl_requests = res.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
