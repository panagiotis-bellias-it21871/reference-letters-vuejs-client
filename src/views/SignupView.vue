<template>
    <div class="signup">
        <h5>For a student account please click <a><router-link :to="`signupstudent`"> here</router-link></a>. </h5>
        <h5>For a teacher account please click <a><router-link :to="`signupteacher`"> here</router-link></a>. </h5>
    </div>
</template>

<script>
export default {
    name: "SignupView",
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