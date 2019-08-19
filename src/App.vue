<template>
  <div class="app">
    <EditedAgGrid :items="items" />
  </div>
</template>

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import EditedAgGrid from "./components/EditedAgGrid";
import { Sh_ManagerConfirm_List } from "./assets/info";
export default {
  name: "App",
  components: {
    EditedAgGrid
  },
  data() {
    return {
      items: Sh_ManagerConfirm_List
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
