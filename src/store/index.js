import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileClicked: false,
    logout: false,
  },
  getters: {
    getProfileClicked(state) {
      return state.profileClicked;
    },
    getLogout(state) {
      return state.logout;
    },
  },
  mutations: {
    UPDATE_PROFILE_CLICKED(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.profileClicked = payload;
    },

    UPDATE_LOGOUT(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.logout = payload;
    },
  },
  actions: {
    setProfileClicked(context, payload) {
      context.commit("UPDATE_PROFILE_CLICKED", payload);
    },
    setValueToStore(context, payload) {
      console.log(payload.mutation, payload.value);
      context.commit(payload.mutation, payload.value);
    },
  },
  modules: {},
});
