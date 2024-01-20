const getters = {
    allCountries: state => state.countries,
    countryById: state => (id) => {
        const country = state.countries.find(c => c.value === id);
        return country ? country.text : '';
    },
};

export default getters;