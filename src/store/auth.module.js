import AuthService from '../services/auth-service';

const user = JSON.parse(localStorage.getItem('user'));
const username = JSON.parse(localStorage.getItem('username'));
const initialState = user
  ? { status: { loggedIn: true }, user, username }
  : { status: { loggedIn: false }, user: null, username: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    username({ commit }, user){
      return AuthService.username(user).then(
        username => {
          commit('defineUsername', username);
          return Promise.resolve(username);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      )
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
      //state.username = username;
      //console.log("state: " + username);
    },
    defineUsername(state, username) {
      state.status.loggedIn = true;
      state.username = username;
      console.log("state: " + username);
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
      state.username = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
      state.username = null;
    }
  }
};