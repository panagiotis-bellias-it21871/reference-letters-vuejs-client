<template>
  <div id="app">
    <HeaderPage/>
    <div class="container">
      <router-view/>
      <br>
      <a href="https://www.youtube.com/watch?v=-Pa3fUusLJ0&ab_channel=BasicsAdda">YouTube Tutorial</a>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import axios from 'axios'

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
  },
  mounted() {
    axios
      .get(${process.env.VUE_APP_KEYCLOAK_URL}, {
        headers: {
          Authorization: "Bearer " + this.keycloak.token
        }
      })
      .then(response => (this.user = response));
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
</style>
