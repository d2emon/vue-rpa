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
          <v-data-table
            class="elevation-q"
            :headers="charactersHeaders"
            :items="characters"
            multi-sort
            :search="search"
          >
            <template v-slot:top>
              <v-toolbar>
                <add-character-modal
                  v-model="showAddCharacter"
                  :backgrounds="backgrounds"
                  :classes="classes"
                  :races="races"
                />

                <v-toolbar-title>Персонажи</v-toolbar-title>

                <v-spacer />

                <v-text-field
                  single-line
                  hide-details
                  label="Искать"
                  append-outer-icon="mdi-magnify"
                  v-model="search"
                />

                <v-toolbar-items>
                  <v-btn
                    icon
                    @click="showAddCharacter = true"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
            </template>
            <template v-slot:item.name="{ item }">
              <router-link :to="item.link">{{ item.name }}</router-link>
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
import { Race } from '@/services/races';
import { CharacterClass } from '@/services/classes';
import { Background } from '@/services/backgrounds';

@Component({
  components: {
    AddCharacterModal: () => import('@/components/modals/AddCharacterModal.vue'),
  },
})
export default class CharactersParty extends Vue {
  headers = [];

  items = [];

  tabs = null;

  showAddCharacter = false;

  search = '';

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

  @Prop({ type: Array })
  characters!: Character[];

  @Prop()
  races!: Race[];

  @Prop()
  classes!: CharacterClass[];

  @Prop()
  backgrounds!: Background[];

  complete(value: number) {
    console.log(this.tabs, value);
  }
}
</script>

<style scoped>

</style>
