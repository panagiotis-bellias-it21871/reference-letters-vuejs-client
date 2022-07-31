<template>
    <div class="signup">
      <button class="btn btn-block btn-stud" @click="$router.push('signupstudent')">Sign Up As Student</button>
      <button class="btn btn-block btn-teac" @click="$router.push('signupteacher')">Sign Up As Teacher</button><br/>
      <h5>If you have already an account click button below to login</h5>
      <button class="btn btn-block btn-login" @click="$router.push('login')">Login</button>
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

</style>