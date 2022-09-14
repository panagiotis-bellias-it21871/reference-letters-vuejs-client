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
            username: "",
            password: "",
            backend: process.env.VUE_APP_BACKEND_URL,
            auth: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX,
            signin: process.env.VUE_APP_AUTH_LOGIN_ENDPOINT,
            returnUrl: '',
            error: ''
        }
    },
    methods : {
        login(){
          userService.login(this.username, this.password)
                .then(router.push(this.returnUrl),
                    error => {
                        this.error = error;
                    }
                );
          /*
          const formData = new FormData();
          formData.set('username', this.username);
          formData.set('password', this.password);
          axios.post(
              `${this.backend}/auth/jwt/login`,
              formData,
              {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  },
              },
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
              */
          /*
          const loginPayload = {
            username: this.username,
            password: this.password,
          }
          const {username, password} = loginPayload;
          console.log(`${this.backend}/${this.auth}/${this.signin}`);
          console.log(username);
          console.log(password)
          axios
          .post(`${this.backend}/${this.auth}/${this.signin}`, {
            username,
            password,
          })
          .then(res => {(this.username = [...this.username, res.data])
          console.log(res.data)
          router.push("/")
        })
          .catch(err => console.log(err));
          this.username = ""
          this.password = ""
        }*/}
    },
    created() {
      // reset login status
      userService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.$route.query.returnUrl || '/';
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