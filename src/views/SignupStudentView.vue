<template>
    <div class="signupstudent">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-12">
          <h2>Sign up as a student</h2>
          <form @submit.prevent="signupstudent">
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
                <input v-model="fullName" type="text" name="fullName" id="fullName" class="form-control" placeholder="Enter your full name">
              </div>
              <div class="form-group">
                <label>School / Department (Select from the list)</label>
                <select v-model="school" name="school" id="school" class="form-control">
                  <option value="dit">Informatics and Telematics</option>
                  <option value="geo">Geography</option>
                  <option value="ddns">Nutrition and Dietetics</option>
                  <option value="dhee">Economics & Sustainable Development</option>
                </select>
              </div>
              <div class="form-group">
                <label>School ID</label>
                <input v-model="schid" type="text" name="schid" id="schid" class="form-control" placeholder="Enter your school id number">
              </div>
              <div class="form-group">
                <label>Grading File (Give public URL)</label>
                <input v-model="grades" type="text" name="grades" id="grades" class="form-control" placeholder="Enter URL for your grading">              
              </div>
              <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" name="password" class="form-control" placeholder="Enter your password" size="1">
              </div>
              <div class="form-group">
                <label>Password Confirmation</label>
                <input v-model="password2" type="password" name="password2" class="form-control" placeholder="Confirm your password" size="1">
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
import AuthService from "../services/auth-service.js";
import axios from "axios";
export default {
    name: "SignupStudentView",
    data(){
      return {
        username: "",
        email: "",
        fullName: "",
        school: "",
        schid: "",
        grades: "",
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
      signupstudent() {
        if(this.password != this.password2) {
          alert("Passwords don't match");
          return;
        }
        const student = {
          username: this.username,
          email: this.email,
          fullname: this.fullName,
          school: this.school,
          schid: this.schid,
          gradesurl: this.grades,
          password: this.password
        }
        AuthService.registerStudent(student).then(
          (res) => {
            if(res.status == 202){
              alert("Check your email account to follow the account verification link.")
              this.$router.push("/")
            }
          },
          (err) => {
            console.log(err);
            alert("Something went wrong! Try again...")
            this.$router.push("/signup/student");
          }
        );
        axios.post(process.env.VUE_APP_BACKEND_URL + "/" + process.env.VUE_APP_AUTH_ENDPOINT_PREFIX + "/request-verify-token", {
          email: this.email
        }).then((res) => console.log(res))
        .catch((e) => console.log(e));
      }
    }
}
</script>

<style scoped>
.signupstudent {
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