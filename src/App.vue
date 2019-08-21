<template>
  <div class="app">
    <SafaGridView
      :defineCols="defineCols"
      :definerows="definerows"
      :ourItems="ourItems"
      :gridAlign="gridAlign"
      @rowCreate="rowCreate"
    />
  </div>
</template>

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import SafaGridView from "./components/SafaGridView";
import { Sh_ManagerConfirm_List } from "./assets/info";
export default {
  name: "App",
  components: {
    SafaGridView
  },
  data() {
    return {
      defineCols: Sh_ManagerConfirm_List,
      definerows: null,
      ourItems: null,
      gridAlign: "righted"
    };
  },
  methods: {
    rowCreate(formProps) {}
  }
};
</script>
<style lang="scss">
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
  margin: 0 20px;
}
</style>
