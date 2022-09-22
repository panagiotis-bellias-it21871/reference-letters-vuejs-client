<template>
  <div class="home">
    <img alt="Reference Letter Logo" src="../assets/logo.jpg">
    <div v-if="user['email']">
      <AddReferenceLetterRequest v-on:add-reference-letter-request="addRlRequest"/>
      <ReferenceLetterRequestList v-on:del-rl-request="deleteRlRequest" v-bind:rl_requests="rl_requests" v-bind:errors="errors"/>
    </div>
    <div v-else><br/>
      <SignupLoginView/>
      <OwnerDetails/>
    </div>
  </div>
</template>

<script>

import axios from "axios"

// @ is an alias to /src
import AddReferenceLetterRequest from "@/views/AddReferenceLetterRequest.vue"
import ReferenceLetterRequestList from "@/views/ReferenceLetterRequestList.vue"
import SignupLoginView from "./SignupLoginView.vue"
import OwnerDetails from "./OwnerDetails.vue"
import { authHeader } from "../__helpers/auth-header";
import router from "../router"

const backend=process.env.VUE_APP_BACKEND_URL
export default {
  name: 'HomeView',
  components: {
    AddReferenceLetterRequest,
    ReferenceLetterRequestList,
    SignupLoginView,
    OwnerDetails
  },
  data(){
    return {
      user: [],
      student_id: 0,
      rl_requests: [],
      errors: [],
      backend: process.env.VUE_APP_BACKEND_URL,
      base_endpoint: process.env.VUE_APP_BASE_ENDPOINT_PREFIX,
      rl_letters_endpoint: process.env.VUE_APP_RL_LETTERS_ENDPOINT,
      auth_endpoint: process.env.VUE_APP_AUTH_ENDPOINT_PREFIX
    }
  },
  methods : {
    addRlRequest(newRlRequest) { 
      const { teacher_id, carrier_name, carrier_email } = newRlRequest;
      const status = "pending"
      const text = ""
      const student_id = this.student_id + 1
      console.log(this.student_id)

      axios
      .post(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}`, {
        carrier_name,
        carrier_email,
        status,
        text,
        teacher_id,
        student_id
      }, {
        headers: authHeader(),
      })
      .then(res => (this.rl_requests = [...this.rl_requests, res.data]))
      .catch(err => console.log(err));
    },
    deleteRlRequest(id) {
      axios
        .delete(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/${id}`)//, headers)
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
    axios.get(`${backend}/users/me`, {
      headers: authHeader(),
    }).then(response => {
      this.user = response.data
      console.log("Logged in user info fetched with status code: " + response.status)
    }).catch(e => {
      console.log(e);
    })

    if (this.user["student"]) {
      axios.get(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/s/1`, {
        headers: authHeader(),
      })
      .then(res => {
        this.rl_requests = res.data;
        console.log(res.data)
        if (this.rl_requests == []) alert("No reference letter requests yet!")
        console.log(res.status)
      })
      .catch(e => {
        if (e["response"]["status"] == 403){
          alert("Login as student to continue!")
          router.push("/login")
        }
        console.log(e["response"]["status"]);
      })

      this.student_id = function(){
        if (this.user["student"]){
          // GET STUDENT
          console.log(`${this.backend}/${this.base_endpoint}/students/u/${this.user["username"]}`)
          axios.get(`${this.backend}/${this.base_endpoint}/students/u/${this.user["username"]}`, {
            headers: authHeader(),
          })
          .then(res => {
            // GET ID
            let student = res.data
            console.log(res.data)
            console.log(student)
            console.log(student["id"])
            return student["id"]
          })
          .catch(e => {
            console.log(e);
            return 0;
          })
        }
      }
    }
    /*
    console.log(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/`)
    axios.get(`${this.backend}/${this.base_endpoint}/${this.rl_letters_endpoint}/`, {
      headers: authHeader(),
    })
    .then(res => {
      this.rl_requests = res.data;
      console.log(res.data)
      console.log(res.status)
    })
    .catch(e => {
      if (e["response"]["status"] == 403){
        alert("Login as admin to continue!")
        router.push("/login")
      }
      console.log(e["response"]["status"]);
    })
    */

  }
}
</script>
