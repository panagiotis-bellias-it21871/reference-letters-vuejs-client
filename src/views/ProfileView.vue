<template>
    <div class="profile">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-12">
            <h1>
                <strong>{{content.username}}</strong> Profile
            </h1>
            <h5><strong>Full Name:</strong> {{content.full_name}}</h5>
            <h5><strong>Email:</strong> {{content.email}}</h5>  
            <h5><strong>Authority:</strong> {{role}}</h5>
            <!--
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
            </form>-->
        </div>
      </div>
    </div>
</template>

<script>
import UserService from "../services/user-service";

export default {
    name: "ProfileView",
    data(){
        return {
            content: "",
            role: "",
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        UserService.getUserBoard().then(
            (response) => {
                this.content = response.data;
                if (this.content.student)
                    this.role = "Student"
                else if(this.content.teacher)
                    this.role = "Teacher"
                console.log(this.content);
            },
            (error) => {
                this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            }
        );
    },
}
</script>

<style scoped>
.profile {
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