<template>
  <input
    type="checkbox"
    v-model="checkedValue"
    :name="name"
    :value="value"
    :indeterminate.prop="indeterminate"
  >
</template>

<script lang="ts">
import {
  Vue, Component, ModelSync, Prop,
} from 'vue-property-decorator';

@Component
export default class BaseCheckbox extends Vue {
  @Prop() private value!: string | number;

  @Prop() private name!: string;

  @Prop() private indeterminate!: boolean;

  @ModelSync('checked', 'change', { type: Boolean }) readonly checkedValue!: boolean;
}
</script>

<style scoped>

</style>
