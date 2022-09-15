<template>
    <div class="verify-token">
      <div v-if=ok>
        Verified!
      </div>
      <div v-else><br/>
      </div>
    </div>
  </template>
  
  <script>
  
  import axios from "axios"
  let headers = {'Access-Control-Allow-Origin' : '*'}
  
  export default {
    name: 'VerifyEmailToken',
    data(){
      return {
        token: this.$route.params.token,
        errors: [],
        ok: false,
        backend: process.env.VUE_APP_BACKEND_URL,
        auth_endpoint: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
      }
    },
    created(){
        var token = this.token
        axios
        .post(`${this.backend}/${this.auth_endpoint}/verify`,{
            token
        }, headers)
        .then(res => {
            this.ok = true
            console.log(res.data)
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
  }
  </script>
  