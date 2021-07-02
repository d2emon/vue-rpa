<template>
  <v-app id="dashboard-view">
    <nav-bar
      :title="title"
    />

    <side-drawer />

    <v-main>
      <v-container container--fluid>
        <characters-party
          :characters="characters || []"
        />

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
import { mapActions, mapState } from 'vuex';
import { Character } from '@/services/characters';

@Component({
  components: {
    CharactersParty: () => import('@/components/dashboard/CharactersParty.vue'),
    NavBar: () => import('@/components/core/NavBar.vue'),
    SideDrawer: () => import('@/components/core/SideDrawer.vue'),
  },
  computed: {
    ...mapState(['title']),
    ...mapState('characters', ['characters']),
  },
  methods: {
    ...mapActions('characters', ['fetchCharacters']),
  },
})
export default class DashboardView extends Vue {
  title!: string;

  characters!: Character[] | null;

  fetchCharacters!: () => Promise<null>;

  mounted() {
    this.fetchCharacters();
  }
}
</script>

<style scoped>

</style>
