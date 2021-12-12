<template>
  <div id="permissions-tree">
    <permissions-tree-node
      v-for="node in tree.nodes"
      :key="`node-${node.id}`"
      :node="node"
      tree-name="permissions-tree"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DefaultNode } from '@/utils/treeTypes';
import Tree from '@/utils/Tree';
import PermissionsTreeNode from '@/components/PermissionsTreeNode.vue';

@Component({
  components: {
    PermissionsTreeNode,
  },
})
export default class PermissionsTree extends Vue {
  @Prop() private nodes!: Array<DefaultNode>;

  tree = new Tree([])

  data(): { tree: Tree } {
    return {
      tree: new Tree(this.nodes),
    };
  }
}
</script>
