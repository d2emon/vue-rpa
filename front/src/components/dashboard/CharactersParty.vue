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
          <v-card-title>Персонажи</v-card-title>

          <v-data-table
            :headers="charactersHeaders"
            :items="characters"
          >
            <template v-slot:item.name="{ item }">
              <router-link to="{{ item.link }}">{{ item.name }}</router-link>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Character } from '@/services/characters';

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

  charactersHeaders = [
    {
      text: 'Имя',
      value: 'name',
    },
    {
      text: 'Характеристики',
      value: 'stats',
    },
    {
      text: 'ХП',
      value: 'hp',
    },
    {
      text: 'КД',
      value: 'ac',
    },
    {
      text: 'Спасброски',
      value: 'savingThrows',
    },
    {
      text: 'Левая рука',
      value: 'leftHand',
    },
    {
      text: 'Правая рука',
      value: 'rightHand',
    },
    {
      text: 'Уровень',
      value: 'level',
    },
  ];

  @Prop()
  characters!: Character[];

  complete(value: number) {
    console.log(this.tabs, value);
  }
}
</script>

<style scoped>

</style>
