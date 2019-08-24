<template>
  <div class="app">
    <SafaGridView :definedCols="definedCols" :definedrows="definedrows" :gridAlign="gridAlign" />
  </div>
</template>

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import SafaGridView from "./components/SafaGridView";
import { Sh_ManagerConfirm_List } from "./assets/colInfo";
import { Sh_ManagerConfirm_Row } from "./assets/rowInfo";
export default {
  name: "App",
  components: {
    SafaGridView
  },
  data() {
    return {
      definedCols: Sh_ManagerConfirm_List,
      definedrows: Sh_ManagerConfirm_Row,
      gridAlign: "righted"
    };
  }
};
</script>
<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
