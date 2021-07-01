<template>
  <v-navigation-drawer
    v-model="showModel"
    app
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { mapMutations, mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('navigation', ['show']),
  },
  methods: {
    ...mapMutations('navigation', ['setShowDrawer']),
  },
})
export default class SideDrawer extends Vue {
  group = false;

  show!: boolean | null;

  setShowDrawer!: (value: boolean | null) => null;

  get showModel(): boolean | null {
    return this.show;
  }

  set showModel(value: boolean | null) {
    this.setShowDrawer(value);
  }
}
</script>

<style scoped>

</style>
