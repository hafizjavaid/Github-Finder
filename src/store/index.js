import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    loading: false,
    alert: null,
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
  },
  actions: {
    async searchUsers({ commit }, text) {
      commit("SET_LOADING", true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${text}`,
        {
          method: "GET",
          headers: {
            Authorization: `token`,
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
  },
  modules: {},
});
