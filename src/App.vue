<template>
  <div class="app">
    <SafaGridView
      :definedCols="definedCols"
      :definedrows="definedrows"
      :ourItems="ourItems"
      :gridAlign="gridAlign"
      @onCreateRow="createRow"
      @onSearchItem="searchItem"
      @onEditItem="editItem"
    />
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
      ourItems: [],
      gridAlign: "righted"
    };
  },
  methods: {
    createRow(formProps) {
      console.log("created row");
    },
    editItem(formProps) {
      console.log("edit Item");
    },
    searchItem(formProps) {
      console.log("search item");
    }
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
