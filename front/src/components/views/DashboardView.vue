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
          :races="races"
          :classes="classes"
          :backgrounds="backgrounds"
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
import { Race } from '@/services/races';
import { CharacterClass } from '@/services/classes';
import { Background } from '@/services/backgrounds';

@Component({
  components: {
    CharactersParty: () => import('@/components/dashboard/CharactersParty.vue'),
    NavBar: () => import('@/components/core/NavBar.vue'),
    SideDrawer: () => import('@/components/core/SideDrawer.vue'),
  },
  computed: {
    ...mapState(['title']),
    ...mapState('characters', ['characters']),
    ...mapState('races', ['races']),
    ...mapState('classes', ['classes']),
    ...mapState('backgrounds', ['backgrounds']),
  },
  methods: {
    ...mapActions('characters', ['fetchCharacters']),
    ...mapActions('races', ['fetchRaces']),
    ...mapActions('classes', ['fetchClasses']),
    ...mapActions('backgrounds', ['fetchBackgrounds']),
  },
})
export default class DashboardView extends Vue {
  title!: string;

  characters!: Character[] | null;

  races!: Race[];

  classes!: CharacterClass[];

  backgrounds!: Background[];

  fetchCharacters!: () => Promise<null>;

  fetchRaces!: () => Promise<null>;

  fetchClasses!: () => Promise<null>;

  fetchBackgrounds!: () => Promise<null>;

  mounted() {
    this.fetchCharacters();
    this.fetchRaces();
    this.fetchClasses();
    this.fetchBackgrounds();
  }
}
</script>

<style scoped>

</style>
