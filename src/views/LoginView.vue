<template>
  <div class="login">
    <div class="card bg-dark mb-3">
      <div class="card-body">
          <form @submit.prevent="login">
              <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="text" name="email" id="email" class="form-control" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" name="password" class="form-control" placeholder="Enter your password" size="1">
              </div>
              <div class="row">
                  <div class="col-6 mx-auto">
                      <button class="btn btn-block btn-success">Login</button>
                  </div>
              </div>
          </form>
      </div>
    </div>
  </div>
  <div class="signup">
    <h5>If you have not an account yet please click <a><router-link :to="`signup`"> here</router-link></a>. </h5>
  </div>
</template>

<script>
//import axios from "axios"
import { userService } from '../__services';
import router from "../router"

export default {
    name: "LoginView",
    data(){
        return {
            email: "",
            password: "",
            backend: process.env.VUE_APP_BACKEND_URL,
            auth: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX,
            signin: process.env.VUE_APP_AUTH_LOGIN_ENDPOINT,
            error: ''
        }
    },
    methods : {
        login(){
          var res = userService.login(this.email, this.password)
          if(res.status == 200){
            
            alert("Wrong credentials or internal error!")
          } else {
            router.push('/') 
          }
        }
    },
    created() {
      // reset login status
      userService.logout();
    }
}
</script>

<style scoped>
h1 {
  color: #fff;
  padding: 0 15px;
  display: block;
}
h5 {
  color: #fff;
}
</style>