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
        <!-- material-chart-card -->
        <!-- :data="dailySalesChart.data" -->
        <!-- :options="dailySalesChart.options" -->
        <v-card
          color="warning"
          type="Line"
        >
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
      <v-flex
        md12
        sm12
        lg4
      >
        <!-- material-chart-card -->
        <!-- :data="emailsSubscriptionChart.data" -->
        <!-- :options="emailsSubscriptionChart.options" -->
        <!-- :responsive-options="emailsSubscriptionChart.responsiveOptions" -->
        <v-card
          color="red"
          type="Bar"
        >
          <h4 class="text-h6 font-weight-light">
            Emails telling you your code sucks
          </h4>
          <p class="category d-inline-flex font-weight-light">
            Last Campaign Performance
          </p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span
              class="text-caption blue-grey--text font-weight-light"
            >updated 10 minutes ago</span>
          </template>
        </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <!-- material-chart-card -->
        <!-- :data="dataCompletedTasksChart.data" -->
        <!-- :options="dataCompletedTasksChart.options" -->
        <v-card
          color="indigo"
          type="Line"
        >
          <h3 class="text-h6 font-weight-light">
            Completed Tasks
          </h3>
          <p class="category d-inline-flex font-weight-light">
            Last Last Campaign Performance
          </p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span
              class="text-caption grey--text font-weight-light"
            >campaign sent 26 minutes ago</span>
          </template>
        </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <!-- material-stats-card -->
        <v-card
          color="green"
          icon="mdi-store"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Dashboard extends Vue {
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
