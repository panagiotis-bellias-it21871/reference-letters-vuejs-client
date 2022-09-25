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
            <router-link to="/" class="nav-link"><font-awesome-icon icon="home" /> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          </ul>
      </div>
      <!--
      <div class="navbar-nav mr-auto">
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
      </div>
      -->
      <div>
        <div>
          <router-link v-if="currentUser" to="/profile" class="pt-3"><font-awesome-icon icon="user" /> {{ username }}</router-link>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li v-if="currentUser" class="nav-item active">
            <a @click.prevent="logout" class="btn btn-primary nav-link"><font-awesome-icon icon="sign-out-alt" /> Logout</a>
          </li>
          <li v-if="!currentUser" class="nav-item active">
            <router-link  to="/signup" class="nav-link"><font-awesome-icon icon="user-plus" /> </router-link>
          </li>
          <li v-if="!currentUser" class="nav-item active">
            <router-link  to="/login" class="btn btn-primary nav-link"><font-awesome-icon icon="sign-in-alt" /> Login</router-link>
          </li>
        </ul>
      </div>
      <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system.git">
        <img style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
  data(){
    return {
      siteTitle: "Reference Letters App",
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    username() {
      this.$store.dispatch('auth/username')
      return this.$store.state.auth.username;
    } /*,
    showAdminBoard() {
      if (this.currentUser) {
        return this.currentUser['is_superuser'];
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }
      return false;
    }*/
  },
  methods : {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  color: lavender;
}
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
