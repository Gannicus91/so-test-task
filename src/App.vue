<template>
  <div id="app">
    <permissions-tree :nodes="permissions" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PermissionsTree from './components/PermissionsTree.vue';
import permissions from './assets/permissions';

@Component({
  components: {
    PermissionsTree,
  },
  data() {
    return {
      permissions,
    };
  },
})
export default class App extends Vue {}
</script>
