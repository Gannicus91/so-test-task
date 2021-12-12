<template>
  <div class="tree-node">
    <base-checkbox
      v-model="node.checked"
      :value="node.id"
      :indeterminate="node.isIndeterminate"
      :name="treeName"
    />
    <span>
      {{ node.name }}
    </span>
    <div class="tree-node__children">
      <permissions-tree-node
        v-for="child in node.children"
        :key="`node-${child.id}`"
        :node="child"
        :tree-name="treeName"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import TreeNode from '@/utils/TreeNode';
import BaseCheckbox from '@/components/BaseCheckbox.vue';

@Component({
  name: 'PermissionsTreeNode',
  components: {
    BaseCheckbox,
  },
})
export default class PermissionsTreeNode extends Vue {
  @Prop() private node!: TreeNode;

  @Prop() private treeName!: string;
}
</script>

<style lang="sass" scoped>
.tree-node
  &__children
    padding-left: 20px
</style>
