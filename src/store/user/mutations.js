const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = state.users.filter(user => user.id !== userId);
    },
    ADD_USER: (state, newUser) => {
        state.users.push({ ...newUser, id: state.users.length });
    },
};

export default mutations;