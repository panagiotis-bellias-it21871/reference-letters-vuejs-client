<template>
  <div id="app">
    <HeaderPage/>
    <div class="container">
      <router-view/>
      <br>
      <a data-cy="link" href="https://www.youtube.com/watch?v=-Pa3fUusLJ0&ab_channel=BasicsAdda">Tutorial 1</a> / 
      <a data-cy="link" href="https://www.google.com/url?q=https://www.bezkoder.com/vue-3-authentication-jwt/&sa=D&source=docs&ust=1664039034277234&usg=AOvVaw00dyzrYNL88J2O2hyr-D95">2</a> /
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
  components: {
    HeaderPage
  },
  data() {
    return {
      errors: [],
    }
  }
})
</script>


<style>
#app {
  background-color: #546276;
}
body {
  background: #222831;
}
p {
  color: #a89f8c;
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
