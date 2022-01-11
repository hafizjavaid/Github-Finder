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
        `${process.env.VUE_APP_GITHUB_URL}/search/users?q=${text}`,
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

    async getUserAndRepos({ commit }, userName) {
      commit("SET_LOADING", true);

      try {
        const [user, repos] = await Promise.all([
          await fetch(`${process.env.VUE_APP_GITHUB_URL}/users/${userName}`, {
            method: "GET",
            headers: {
              Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
            },
          }),
          await fetch(
            `${process.env.VUE_APP_GITHUB_URL}/users/${userName}/repos`,
            {
              method: "GET",
              headers: {
                Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
              },
            }
          ),
        ]);
        commit("SET_REPOS", await repos.json());
        commit("SET_USER", await user.json());
        commit("SET_LOADING", false);
      } catch (e) {
        commit("SET_ALERT", {
          type: "error",
          msg: e,
        });
        console.log(e);
        commit("SET_LOADING", false);
      }
    },
  },
  modules: {},
});
