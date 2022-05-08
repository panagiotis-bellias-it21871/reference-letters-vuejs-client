<template>
  <div id="app">
    <a href="https://github.com/pan-bellias/Reference-Letters-Client.git">
      <img style="position: absolute; top: 0; right: 0; border: 0;"
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png">
    </a>
    <div> 
      <div>
        <div>
          <div> 
            <a v-bind:href="root">
              <img alt="Reference Letters logo" src="./assets/logo.jpg">
              <h1>
                {{title}}
              </h1>
            </a>
          </div>
          <div> 
            <p v-if="user().username != null">
              Logged in as <strong>{{user().username}}</strong>. <a v-bind:href="logout">Log out</a>
            </p>
            <p v-else>
              <a v-bind:href="login">Login</a>
              <a v-bind:href="signup">Sign Up</a>
            </p>
          </div>
        </div>
        <div id="nav">
          <a href="/"> HomePage </a> <!-- 
          <router-link to="/">HomePage</router-link> --> |
          <a href="/rl_requests"> ReferenceLetterRequests </a>
          <!-- <router-link to="/rl_requests">ReferenceLetterRequests</router-link> -->
        </div>
        <router-view/>
        <!-- <HomePage msg="Welcome to Reference-Letters App"/> -->
      </div>
      <ul>
        <li>
          <a
            href="https://www.hua.gr/index.php/en/"
            target="_blank"
          >
            Harokopio University
          </a>
        </li>
        <li>
          <a
            href="https://www.dit.hua.gr/index.php/en/"
            target="_blank"
          >
            Department of Informatics and Telematics
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pan-bellias/Reference-Letters-Client.git"
            target="_blank"
          >
            GitHub repository
          </a>
        </li>
        <li>
          <a
            href="/about"
            target="_blank"
          >
            App Documentation
          </a>
        </li>
        <br>
      </ul>
    </div>
  </div>
</template>

<script>
//import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    // HomePage
  },
  data () {
    return {
      title: 'Reference Letters Application @HUA-DIT',
      root: '/',
      logout: '/logout',
      profile: '/profile',
      login: '/login',
      signup: '/signup',
      userData: {}
    }
  },
  methods: {
    dotenv_test: function () {
      console.log(process.env.VUE_APP_SOMEKEY)
    },
    user: function() {
      this.userData = {
        'username': 'it21871',
        'type': 'student'
      }
      console.log(this.userData)
      /*
      if (this.userData.username != null) {
        if (this.userData.type === 'admin') {
          this.$router.push('/admin')
        }
        this.$router.push('/main')
      }*/
      return this.userData
    }
    /*
    ,
    upload_file: function () {
      var Minio = require('minio')
      var minioClient = new Minio.Client({
        endPoint: 'play.min.io',
        port: 9000,
        useSSL: true,
        accessKey: process.env.VUE_APP_MINIO_ACCESS_KEY,
        secretKey: process.env.VUE_APP_MINIO_SECRET_KEY'
      });
    }
    */
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  font-size: 1.25rem;
  margin: 2rem;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<!-- source: https://blog.logrocket.com/dynamic-routing-using-vue-router/ -->