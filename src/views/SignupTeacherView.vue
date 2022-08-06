<template>
    <div class="signupteacher">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-12">
          <h2>Sign up as a teacher</h2>
          <form @submit.prevent="login">
              <div class="form-group">
                <label>Username</label>
                <input v-model="username" type="text" name="username" id="username" class="form-control" placeholder="Enter your username">
              </div>

              <div class="form-group">
                <label>Full Name</label>
                <input v-model="fullname" type="text" name="fullname" id="fullname" class="form-control" placeholder="Enter your full name">
              </div><!--
              <div class="form-group">
                <label>University (Select from the list)</label>
                <select v-model="university" name="university" id="university" class="form-control">
                  <option value="harokopio">Harokopio University of Athens</option>
                </select>
              </div> -->
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
                <label>Tell us a few words for yourself!</label>
                <textarea v-model="description" type="text" name="description" rows="9" cols="40"
                id="description" class="form-control" placeholder="Studies / Titles / Work / Projects"/>
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
export default {
    name: "SignupTeacherView",
    data(){
    },
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