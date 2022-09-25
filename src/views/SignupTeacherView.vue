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
import AuthService from '../services/auth-service.js';
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
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      signupteacher() {
        if(this.password != this.password2) {
          alert("Passwords don't match");
          return;
        }
        const teacher = {
          username: this.username,
          email: this.email,
          fullname: this.fullname,
          description: this.description,
          password: this.password
        }
        AuthService.registerTeacher(teacher).then(
            (res) => {
              if(res.status == 202){
                console.log(res);
                alert("Check your email account to follow the account verification link.")
                this.$router.push("/")
              }
            },
            (err) => {
              console.log(err);
              alert("Something went wrong! Try again...")
              this.$router.push("/signup/teacher");
            }
          );
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