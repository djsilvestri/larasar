/* eslint-disable */
import { LocalStorage } from 'quasar';
import { Dark } from 'quasar';

const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false,
    enableDarkMode: false
  },
};

const mutations = {
  setEnableDarkMode(state, value) {
    // state.settings.enableDarkMode = value;
    //this.$q.dark.set(true)
    state.settings.enableDarkMode = value;
    Dark.toggle()
  },
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value;
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value;
  },
  
  // how do we update the task in the state from this mutation?  Using Object.assign, which lets us copy the properties from one object to another.
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
};
 
// commit: pass in the commit method - commit a mutation to the same name.  dispatch:  trigger an action within an action
const actions = {
  
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('setShow12HourTimeFormat', value);
    dispatch('saveSettings');
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit('setShowTasksInOneList', value);
    dispatch('saveSettings');
  },
  setEnableDarkMode({commit, dispatch}, value) {
    commit('setEnableDarkMode', value);
    dispatch('saveSettings');
  },
  saveSettings({ state }) {
    LocalStorage.set('settings', state.settings);
  },
  getSettings({ commit }) {
    const settings = LocalStorage.getItem('settings');
    if (settings) {
      commit('setSettings', settings);
    }
  }
};

const getters = {
 
  settings: state => {
    return state.settings
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
