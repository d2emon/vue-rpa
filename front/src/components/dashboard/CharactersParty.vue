<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg4
      >
        <v-card>
          <h4 class="text-h6 font-weight-light">
            Daily StackOverflow Visits
          </h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp; increase in today's
            visits
          </p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span
              class="text-caption grey-lighten-1--text font-weight-light"
            >updated 4 minutes ago</span>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CharactersParty extends Vue {
  headers = [];

  items = [];

  tabs = null;

  list = [
    '1',
    '2',
    '3',
  ];

  complete(value: number) {
    console.log(this.tabs, value);
  }
}
</script>

<style scoped>

</style>
