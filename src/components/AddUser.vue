<template>
  <form class="md:w-8/12 mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name"
          v-text="'First Name'" />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text" placeholder="Enter First Name" v-model="user.firstName">
        <p v-if="errors.firstName" class="text-red-500 text-xs italic">{{ errors.firstName }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"
          v-text="'Last Name'" />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name" type="text" placeholder="Enter Last Name" v-model="user.lastName">
        <p v-if="errors.lastName" class="text-red-500 text-xs italic">{{ errors.lastName }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date"
          v-text="'Date of Birth'" />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-date" type="date" v-model="user.birthDate">
        <p v-if="errors.birthDate" class="text-red-500 text-xs italic">{{ errors.birthDate }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-quote"
          v-text="'Favorite Quote'" />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-quote" type="text" placeholder="Enter Quote" v-model="user.quote">
      </div>
      <drop-down :options="allProfessions" label="Profession" v-model="user.professionId" :onChange="selectProfession" />
      <drop-down :options="allCountries" label="Country" v-model="user.countryId" :onChange="selectCountry" />
    </div>
    <button-component :on-click="saveUser" button-text="Save User" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { getInitialUserState, validateUser } from './_helpers';
import DropDown from './DropDown';
import ButtonComponent from './Button';

export default {
  name: 'AddUser',
  data() {
    return {
      user: getInitialUserState(),
      errors: {},
    };
  },
  components: {
    DropDown,
    ButtonComponent,
  },
  computed: {
    ...mapGetters([
      'allProfessions',
      'allCountries'
    ]),
  },
  methods: {
    ...mapActions([
      'addUser',
      'activeProfession',
      'activeCountry'
    ]),
    saveUser() {
      this.errors = validateUser(this.user);
      if (Object.keys(this.errors).length === 0) {
        this.addUser(this.user);
        this.resetForm();
      }
    },
    selectProfession(professionId) {
      this.activeProfession(+professionId);
    },
    selectCountry(countryId) {
      this.activeCountry(+countryId);
    },
    resetForm() {
      this.user = getInitialUserState();
      this.activeProfession(null);
      this.activeCountry(null);
    },
  },
}
</script>

<style scoped></style>