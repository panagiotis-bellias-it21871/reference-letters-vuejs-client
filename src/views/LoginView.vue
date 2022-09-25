<template>
  <div class="login">
    <div class="card bg-dark mb-3">
      <div class="card-body">
          <form @submit.prevent="login">
              <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="text" name="email" id="email" class="form-control" placeholder="Enter your e-mail address">
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
export default {
    name: "LoginView",
    data(){
        return {
            email: "",
            password: "",
        }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push("/");
      }
    },
    methods : {
        login(){
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch("auth/login", user).then(
            (response) => {
              console.log(response)
              this.$store.dispatch("auth/username", user).then(
                (response) => {
                  console.log(response)
                  this.$router.push("/");
                },
                (error) => {
                  console.log(error);
                }
              );
            },
            (error) => {
              console.log(error);
            }
          );
        }
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