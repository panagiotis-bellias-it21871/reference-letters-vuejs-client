<template>
    <div id="adminstudents">
      <div>
        <AddStudent v-on:add-student="addStudent"/>
      </div>
    </div>
</template>

<script>

import axios from "axios"
//let headers = {'Access-Control-Allow-Origin' : '*'}

import AddStudent from "@/views/AddStudent.vue"

export default {
  name: 'AdminStudentView',
  components: {
    AddStudent
  },
  data(){
    return {
      students: [],
      errors: [],
      backend: process.env.VUE_APP_BACKEND_URL,
    }
  },
  methods : {
    addStudent(newStudent) {
      const { name } = newStudent;
      axios
      .post(`${this.backend}/students`, {
        name
      })
      .then(res => (this.students = [...this.students, res.data]))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style>
</style>