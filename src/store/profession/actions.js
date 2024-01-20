const actions = {
    activeProfession({ commit }, professionId) {
        commit('CHANGE_ACTIVE_PROFESSION', +professionId);
    },
};

export default actions;