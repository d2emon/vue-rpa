<template>
  <v-dialog
    v-model="show"
  >
    <v-card>
      <v-card-title class="text-h5">
        Новый Персонаж
      </v-card-title>

      <v-stepper v-model="stepId">
        <v-stepper-header>
          <template
            v-for="step in steps"
          >
            <v-stepper-step
              :key="`step-${step.stepId}-title`"
              :complete="stepId > step.stepId"
              :step="step.stepId"
            >
              {{ step.title }}
            </v-stepper-step>

            <v-divider
              v-if="step.stepId < 5"
              :key="`step-${step.stepId}-divider`"
            />
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            step="1"
          >
            <v-container>
              <select-item-form
                v-model="raceId"
                title="Раса"
                :values="races"
              >
                {{ raceId }}
              </select-item-form>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                :disabled="!raceId"
                @click="stepId += 1"
              >
                Далее
              </v-btn>

              <v-btn
                color="warning"
                text
                @click="resetCharacter"
              >
                Отменить
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content
            step="2"
          >
            <v-container>
              <v-card>
                {{ raceId }}
              </v-card>
              <select-item-form
                v-model="classId"
                title="Класс"
                :values="classes"
              >
                {{ raceId }}
                {{ classId }}
              </select-item-form>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                :disabled="!raceId"
                @click="stepId += 1"
              >
                Далее
              </v-btn>

              <v-btn
                color="warning"
                text
                @click="resetCharacter"
              >
                Отменить
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content
            step="3"
          >
            <v-container>
              <v-card>
                {{ raceId }}
                {{ classId }}
              </v-card>
              <select-item-form
                v-model="raceId"
                title="Раса"
                :values="races"
              >
                {{ raceId }}
                {{ classId }}
              </select-item-form>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                :disabled="!raceId"
                @click="stepId += 1"
              >
                Далее
              </v-btn>

              <v-btn
                color="warning"
                text
                @click="resetCharacter"
              >
                Отменить
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content
            step="4"
          >
            <v-container>
              <v-card>
                {{ raceId }}
                {{ classId }}
              </v-card>
              <select-item-form
                v-model="backgroundId"
                title="Предыстория"
                :values="backgrounds"
              >
                {{ raceId }}
                {{ classId }}
                {{ backgroundId }}
              </select-item-form>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                :disabled="!raceId"
                @click="stepId += 1"
              >
                Далее
              </v-btn>

              <v-btn
                color="warning"
                text
                @click="resetCharacter"
              >
                Отменить
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content
            step="5"
          >
            <v-container>
              <v-card>
                {{ raceId }}
                {{ classId }}
                {{ backgroundId }}
              </v-card>
              <select-item-form
                v-model="raceId"
                title="Раса"
                :values="races"
              >
                {{ raceId }}
                {{ classId }}
                {{ backgroundId }}
              </select-item-form>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </v-card-text>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="saveCharacter"
              >
                Сохранить
              </v-btn>

              <v-btn
                color="warning"
                text
                @click="resetCharacter"
              >
                Отменить
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Race } from '@/services/races';
import { Background } from '@/services/backgrounds';
import { CharacterClass } from '@/services/classes';

@Component({
  components: {
    SelectItemForm: () => import('@/components/forms/SelectItemForm.vue'),
  },
})
export default class AddCharacterModal extends Vue {
  stepId = 1;

  raceId: string | null = null;

  classId: string | null = null;

  backgroundId: string | null = null;

  steps = [
    {
      stepId: 1,
      title: 'Раса',
    },
    {
      stepId: 2,
      title: 'Класс',
    },
    {
      stepId: 3,
      title: 'Характеристики',
    },
    {
      stepId: 4,
      title: 'Описание',
    },
    {
      stepId: 5,
      title: 'Снаряжение',
    },
  ];

  @Prop({ type: Boolean })
  value!: boolean;

  @Prop()
  races!: Race[];

  @Prop()
  classes!: CharacterClass[];

  @Prop()
  backgrounds!: Background[];

  get show(): boolean {
    return this.value;
  }

  set show(value: boolean) {
    this.$emit('input', value);
  }

  resetCharacter(): void {
    this.show = false;
  }

  saveCharacter(): void {
    this.show = false;
  }
}
</script>
