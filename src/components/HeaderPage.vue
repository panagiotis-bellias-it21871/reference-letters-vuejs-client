<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark mb-3">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{siteTitle}}</router-link>
      <div class="col-6 text-right">
        <p></p>
        <p>Web system about reference letters handling</p>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/index" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
      <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system.git">
        <img style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
      <router-link to="/admin" class="btn btn-primary nav-link" >Admin Panel</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
  data(){
    return {
      siteTitle: "Reference Letters App"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: #1a1d24;
  color:#fff;
}
.navbar-nav a {
  color: #fff;
  padding: 0 15px;
  display: block;
}
</style>
