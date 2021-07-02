<template>
  <v-app-bar
    id="core-toolbar"
    app
    absolute
    dense
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      @click="drawerButton"
    />

    <v-app-bar-title
      shrink-on-scroll
    >
      {{ title }}
    </v-app-bar-title>

    <v-spacer />

    <v-btn
      elevation="2"
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('navigation', ['switchDrawer']),
  },
})
export default class NavBar extends Vue {
  @Prop()
  title!: string;

  switchDrawer!: () => null;

  drawerButton() {
    console.log('Switch Drawer');
    this.switchDrawer();
  }
}
</script>

<style scoped>
#core-toolbar a {
  text-decoration: none;
}
</style>
