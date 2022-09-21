<template>
    <div class="signupteacher">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-12">
          <h2>Sign up as a teacher</h2>
          <form @submit.prevent="signupteacher">
              <div class="form-group">
                <label>Username</label>
                <input v-model="username" type="text" name="username" id="username" class="form-control" placeholder="Enter your username">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="text" name="email" id="email" class="form-control" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="fullname" type="text" name="fullname" id="fullname" class="form-control" placeholder="Enter your full name">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" name="password" class="form-control" placeholder="Enter your password" size="1">
              </div>
              <div class="form-group">
                <label>Password Confirmation</label>
                <input v-model="password2" type="password" name="password2" class="form-control" placeholder="Confirm your password" size="1">
              </div>
              <div class="form-group">
                <label>Tell us a few words for yourself!</label>
                <textarea v-model="description" type="text" name="description" rows="9" cols="40"
                id="description" class="form-control" placeholder="Studies / Titles / Work / Projects"/>
              </div>
              <div class="row">
                  <div class="col-6 mx-auto">
                      <button class="btn btn-block btn-success">Sign Up</button>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { userService } from '../__services';
import router from '../router';
export default {
    name: "SignupTeacherView",
    data(){
      return {
        username: "",
        fullname: "",
        email: "",
        description: "",
        password: "",
        password2: "",
        backend: process.env.VUE_APP_BACKEND_URL,
        base_endpoint: process.env.VUE_APP_BASE_ENDPOINT_PREFIX,
        auth_endpoint: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
      }
    },
    methods: {
      signupteacher() {
        if(userService.signupteacher(
          this.username, this.fullname, this.email, this.description, this.password, this.password2 
        )){
          alert("Check your email account to follow the account verification link.")
          router.push("/")
        }
      }
    }
}
</script>

<style scoped>
.signupteacher {
  color: #fff;
}
h1 {
  color: #fff;
  padding: 0 15px;
  display: block;
}
h5 {
  color: #fff;
}
</style>