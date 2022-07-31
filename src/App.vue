<template>
  <div id="app">
    <HeaderPage/>
    <div class="container">
      <router-view/>
      <br>
      <a data-cy="link" href="https://www.youtube.com/watch?v=-Pa3fUusLJ0&ab_channel=BasicsAdda">YouTube Tutorial</a>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'

export default ({
  name: 'App',
  props: ["keycloak"],
  components: {
    HeaderPage
  },
  setup() {
    
  },
  data() {
    return {
      user: "",
    }
  }
})
</script>


<style>
body {
  background: #222831;
}
.container {
  max-width: 900px;
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
