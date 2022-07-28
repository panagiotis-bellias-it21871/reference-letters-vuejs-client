<template>
    <div class="signup">
      <button class="btn btn-block btn-success btn-stud" @click="$router.push('signupstudent')">Sign Up As Student</button>
      <button class="btn btn-block btn-success btn-teac" @click="$router.push('signupteacher')">Sign Up As Teacher</button><br/>
      <h5>If you have already an account click button below to login</h5>
      <button class="btn btn-block btn-success btn-login" @click="$router.push('login')">Login</button>
    </div>
</template>

<script>
export default {
    name: "SignupLoginView",
    data(){
    },
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