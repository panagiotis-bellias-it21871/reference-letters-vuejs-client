<template>
  <div id="app">
    <HeaderPage v-bind:username="username"/>
    <div class="container">
      <router-view v-bind:username="username"/>
      <br>
      <a data-cy="link" href="https://www.youtube.com/watch?v=-Pa3fUusLJ0&ab_channel=BasicsAdda">VueJS Tutorial</a> / 
      <a data-cy="link" href="https://www.hua.gr/index.php/en/">Harokopio University</a> /
      <a data-cy="link" href="https://www.dit.hua.gr/index.php/en/">Department of Informatics and Telematics</a> /
      <a data-cy="link" href="https://github.com/panagiotis-bellias-it21871/reference-letters-system.git">GitHub repository</a> /
      <a data-cy="link" href="/about">Documentation</a>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'

export default ({
  name: 'App',
  //props: ["keycloak"],
  components: {
    HeaderPage
  },
  setup() {
  },
  data() {
    return {
      username: "",
      errors: [],
    }
  },
  created() {
    this.username = ""
  }
})
</script>


<style>
body {
  background: #222831;
}
.container {
  max-width: 900px;
  color: #e9d9b2;
}
.card {
  background: #1a1d24;
}
.card-body {
  color: #f9ffee;
}
.card-body a {
  color: #efbb35;
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
