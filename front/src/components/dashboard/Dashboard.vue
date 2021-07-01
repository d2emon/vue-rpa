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
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <!-- material-stats-card -->
        <v-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Space"
          value="49/50"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <!-- material-stats-card -->
        <v-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <!-- material-stats-card -->
        <v-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <!-- material-card -->
        <v-card
          color="orange"
          title="Employee Stats"
          text="New employees on 15th September, 2016"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <!-- use a scoped slot to send data to child to be processed and returned -->
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-right">
                {{ item.salary }}
              </td>
              <td class="text-right">
                {{ item.country }}
              </td>
              <td class="text-right">
                {{ item.city }}
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <!-- material-card -->
        <v-card
          class="card-tabs"
          color="general"
        >
          <!-- v-tabs makes the name and icons for the todo list table/chart on the dash -->
          <v-flex slot="header">
            <!-- color is the text color of the card header -->
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <!-- v-tab-item -> v-tab , span is the card text span-->
              <span
                class="text-subtitle-1 font-weight-light mr-3"
                style="align-self: center"
              >
                Tasks:
              </span>
              <v-tab
                class="mr-3"
                eager
              >
                <v-icon class="mr-2">
                  mdi-bug
                </v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-code-tags
                </v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">
                  mdi-cloud
                </v-icon>
                Server
              </v-tab>
            </v-tabs>
          </v-flex>
          <!-- this is for the list items in the tod list card -->
          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-item @click="complete(0)">
                  <v-list-item-action>
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-item-action>
                  <v-list-item-title>
                    Sign contract for "What are afraid of?"
                  </v-list-item-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="success"
                          icon
                          v-on="on"
                        >
                          <v-icon color="primary">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-on="on"
                        >
                          <v-icon color="error">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>
                <v-divider />
                <v-list-item @click="complete(1)">
                  <v-list-item-action>
                    <v-checkbox
                      :value="list[1]"
                      color="success"
                    />
                  </v-list-item-action>
                  <v-list-item-title>
                    Lines From Great Russian Literature? Or E-mails From My
                    Boss?
                  </v-list-item-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="success"
                          icon
                          v-on="on"
                        >
                          <v-icon color="primary">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-on="on"
                        >
                          <v-icon color="error">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>
                <v-divider />
                <v-list-item @click="complete(2)">
                  <v-list-item-action>
                    <v-checkbox
                      :value="list[2]"
                      color="success"
                    />
                  </v-list-item-action>
                  <v-list-item-title>
                    Flooded: One year later, assessing what was lost and what
                    was found when a ravaging rain swept through metro Detroit
                  </v-list-item-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        class="v-btn--simple"
                        color="success"
                        icon
                        v-on="on"
                      >
                        <v-icon color="primary">
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <v-btn
                        class="v-btn--simple"
                        color="danger"
                        icon
                        v-on="on"
                      >
                        <v-icon color="error">
                          mdi-close
                        </v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
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
