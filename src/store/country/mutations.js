const mutations = {
    CHANGE_ACTIVE_COUNTRY: (state, countryId) => {
        state.selectedCountryId = countryId;
    },
};

export default mutations;