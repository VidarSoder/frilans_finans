const actions = {
    removeUser({ commit }, userId) {
        commit('REMOVE_USER', userId);
    },
    addUser({ commit }, user) {
        commit('ADD_USER', user);
    }
};

export default actions;