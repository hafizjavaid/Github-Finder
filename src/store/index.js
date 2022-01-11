import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: [],
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ALERT(state, payload) {
      state.alert = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_REPOS(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    async searchUsers({ commit }, text) {
      commit("SET_LOADING", true);

      const response = await fetch(
        `https://api.github.com/search/users?q=${text}`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const { items } = await response.json();

      commit("SET_USERS", items);
      commit("SET_LOADING", false);
    },
    async setAlert({ commit }, payload) {
      commit("SET_ALERT", payload);
      setTimeout(() => {
        commit("SET_ALERT", null);
      }, 3000);
    },

    async getSingleUser({ commit }, userName) {
      commit("SET_LOADING", true);
      try {
        const response = await fetch(`https://api.github.com/users/${userName}`, {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        });
        const user = await response.json();

        
        console.log(user);
        commit("SET_USER", user);
        commit("SET_LOADING", false);
      } catch (e) {
        console.log(e);
        commit("SET_ALERT", {
          type: "error",
          msg: e,
        });
        commit("SET_LOADING", false);
      }
    },

    async getUserRepos({ commit }, userName) {
      commit("SET_LOADING", true);
      try {
        const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
          },
        });
        const repos = await response.json();
        console.log(repos);
        commit("SET_REPOS", repos);
        commit("SET_LOADING", false);
      } catch (e) {
        console.log(e);
        commit("SET_ALERT", {
          type: "error",
          msg: e,
        });
        commit("SET_LOADING", false);
      }
    },
  },
  modules: {},
});
