const getters = {
    allProfessions: state => state.professions,
    professionById: state => (id) => {
        const profession = state.professions.find(p => p.value === id);
        return profession ? profession.text : '';
    },
};

export default getters;