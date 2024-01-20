const actions = {
    activeCountry({ commit }, countryId) {
        commit('CHANGE_ACTIVE_COUNTRY', +countryId);
    },
};

export default actions;