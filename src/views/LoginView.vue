<template>
  <div class="login">
    <div class="card bg-dark mb-3">
      <div class="card-body">
          <form @submit.prevent="login">
              <div class="form-group">
                <label>Username</label>
                <input v-model="username" type="text" name="username" id="username" class="form-control" placeholder="Enter your username">
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
    <h5>If you have not an account yet please click <a><router-link :to="` `"> here</router-link></a>. </h5>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "LoginView",
    data(){
        return {
            username: "",
            password: "",
            backend: process.env.VUE_APP_BACKEND_URL,
        }
    },
    methods : {
        login(){
          const loginPayload = {
            username: this.username,
            password: this.password,
          }
          const {username, password} = loginPayload;

          axios
          .post(`${this.backend}/login`, {
            username,
            password,
          })
          .then(res => (this.username = [...this.username, res.data]))
          .catch(err => console.log(err));
          this.username = ""
          this.password = ""
        }
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