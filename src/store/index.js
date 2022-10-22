import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getDefaultState = () => ({
  profileClicked: false,
  logout: false,
  selectedProfile: null,
  currentHoverItem: null,
  manageProfilesClicked: false,
});

export default new Vuex.Store({
  state: getDefaultState(),
  getters: {
    getProfileClicked(state) {
      return state.profileClicked;
    },
    getSelectedProfile(state) {
      return state.selectedProfile;
    },
    getLogout(state) {
      return state.logout;
    },
    getCurrentHoverItem(state) {
      return state.currentHoverItem;
    },
    getManageProfilesClicked(state) {
      return state.manageProfilesClicked;
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

    UPDATE_SELECTED_PROFILE(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.selectedProfile = payload;
    },
    UPDATE_CURRENT_HOVER_ITEM(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.currentHoverItem = payload;
    },

    UPDATE_MANAGE_PROFILES_CLICKED(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.manageProfilesClicked = payload;
    },
    UPDATE_INITIAL_STATE(state) {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    setProfileClicked(context, payload) {
      context.commit("UPDATE_PROFILE_CLICKED", payload);
    },
    setValueToStore(context, payload) {
      context.commit(payload.mutation, payload.value);
    },
  },
  modules: {},
});
