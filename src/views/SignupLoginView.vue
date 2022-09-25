<template>
    <div class="signup">
      <div>
      <p class="lead">Select below the type of account you want to create</p>
      <button class="btn btn-block btn-stud" @click="$router.push('signup/student')">I am a student</button>
      <button class="btn btn-block btn-teac" @click="$router.push('signup/teacher')">I am a teacher</button><br/>
      </div>
      <div>
      <h5>If you have already an account click button below to login</h5>
      <button class="btn btn-block btn-login" @click="$router.push('login')">Login</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "SignupLoginView",
    data(){
      return {
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push("/");
      }
    },
}
</script>

<style scoped>
.lead {
  color: #cdcdc3;
}
h1 {
  color: #fff;
  padding: 0 15px;
  display: block;
}
h5 {
  color: rgb(226, 203, 203);
}
.btn-stud {
  color: #fff;
  background-color: blue;
  width: 220px;
  
}
.btn-teac {
  color: #fff;
  background-color: rgb(148, 7, 61);
  width: 220px;
}

.btn-login {
  color: #fff;
  background-color: rgb(128, 113, 119);
  width: 220px;
}
</style>