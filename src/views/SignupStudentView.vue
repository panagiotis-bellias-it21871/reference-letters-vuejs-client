<template>
    <div class="signupstudent">
      <div class="row">
        <div class="col-md-8 col-sm-10 col-12">
          <h2>Sign up as a student</h2>
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
                <label>School ID</label>
                <input v-model="schid" type="text" name="schid" id="schid" class="form-control" placeholder="Enter your school id number">
              </div>
              <div class="form-group">
                <label>Grading File (Upload your latest grading)</label>
                <input type="file" @change="uploadFile" ref="grades">
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
    name: "SignupStudentView",
    data(){
    },/*
    methods : {
      uploadFile(){
        this.Images = this.$refs.grades.files[0];
      },
      submitFile() {
        const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
      }
    }*/
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