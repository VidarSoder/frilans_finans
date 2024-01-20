const mutations = {
  CHANGE_ACTIVE_PROFESSION: (state, professionId) => {
    state.selectedProfessionId = professionId;
  },
};

export default mutations;