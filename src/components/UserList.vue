<template>
  <table class="table-auto mx-auto my-10">
    <thead>
      <th class="px-4 py-2" v-text="'Namn'" />
      <th class="px-4 py-2" v-text="'Date of Birth'" />
      <th class="px-4 py-2" v-text="'Age'" />
      <th class="px-4 py-2" v-text="'Profession'" />
      <th class="px-4 py-2" v-text="'Country'" />
      <th class="px-4 py-2" v-text="'Favorite Quote'" />
      <th class="px-4 py-2" v-text="''" />
    </thead>
    <tbody>
      <tr v-for="(user, key) in allUsers" :key="key">
        <td class="border px-4 py-2" v-text="user.firstName + ' ' + user.lastName" />
        <td class="border px-4 py-2" v-text="user.birthDate" />
        <td class="border px-4 py-2" v-text="userAge(user)" />
        <td class="border px-4 py-2" v-text="getProfessionName(user.professionId)" />
        <td class="border px-4 py-2" v-text="getCountryName(user.countryId)" />
        <td class="border px-4 py-2" v-text="user.quote" />
        <td class="px-4 py-2">
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user.id)" :button-text="'Remove'" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonComponent from './Button.vue';
import { calculateAge } from './_helpers';

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
  },
  computed: {
    ...mapGetters([
      'allUsers',
      'professionById',
      'countryById',
    ]),
  },
  methods: {
    ...mapActions([
      'removeUser',
    ]),
    removeRow(user) {
      this.removeUser(user);
    },
    getProfessionName(professionId) {
      return this.professionById(professionId);
    },
    getCountryName(countryId) {
      return this.countryById(countryId);
    },
    userAge(user) {
      return calculateAge(user.birthDate);
    },
  },
}
</script>