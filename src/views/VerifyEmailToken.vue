<template>
  <div class="verify-token">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import AuthService from "../services/auth-service.js";
export default {
  name: 'VerifyEmailToken',
  data(){
    return {
      token: this.$route.params.token,
      errors: [],
      message: "",
    }
  },
  mounted(){
      var token = this.token;
      AuthService.verifyToken(token).then(
          (response) => {
              this.message = "Verified!";
              console.log(response.data);
          },
          (error) => {
              this.message = "Something went wrong! Please try again!"
              console.log(error);
          }
      )
  }
}
</script>