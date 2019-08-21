<template>
  <div class="app">
    <SafaGridView :defineCol="defineCol" :itemsForRow="itemsForRow" />
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
      defineCol: Sh_ManagerConfirm_List,
      itemsForRow: null
    };
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
</style>
