<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  created() {
    /*
    this.$http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          if (this.$store.getters.authorized) {
            this.$store.dispatch("refreshtoken");
          } else {
            return Promise.reject(error);
          }
        } else {
          return Promise.reject(error);
        }
      }
    );
     */
  }
}
</script>

<style>
/*
$nprogress-color: #389df1;
$nprogress-height: 4px;
@import "@/styles/index.scss";
*/

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}

blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}
</style>

