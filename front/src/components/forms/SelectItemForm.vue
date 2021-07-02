<template>
  <v-card>
    <v-layout>
      <v-col md="4">
        <v-list flat>
          <v-subheader>{{ title }}</v-subheader>
          <v-list-item-group
            v-model="model"
            v-if="values"
            active-class="primary text--accent-4"
          >
            <v-list-item
              v-for="item in values"
              :key="`class-${item.id}`"
              :value="item.id"
              :input-value="item.id"
            >
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col md="8">
        <slot />
      </v-col>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SelectItemForm extends Vue {
  @Prop({ type: String })
  title!: string;

  @Prop({ type: String })
  value!: string;

  @Prop()
  values!: { id: string, name: string }[];

  get model(): string | null {
    return this.value;
  }

  set model(value: string | null) {
    this.$emit('input', value);
  }
}
</script>
