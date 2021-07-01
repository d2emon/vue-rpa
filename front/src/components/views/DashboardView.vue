<template>
  <v-app id="dashboard-view">
    <nav-bar
      :title="title"
    />

    <v-main>
      <v-container container--fluid>
        <characters-party />

        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>

    <!-- turns off footer in the maps component -->
    <!-- core-footer v-if="$route.meta.name !== 'Maps'" / -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  components: {
    NavBar: () => import('@/components/core/NavBar.vue'),
    CharactersParty: () => import('@/components/dashboard/CharactersParty.vue'),
  },
  computed: {
    ...mapState([
      'title',
    ]),
  },
})
export default class DashboardView extends Vue {
  title!: string;
}
</script>

<style scoped>

</style>
