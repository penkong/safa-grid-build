<template>
  <div>
    <ag-grid-vue
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
    ></ag-grid-vue>
  </div>
</template>


//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
<script>
import { AgGridVue } from "ag-grid-vue";
import { Sh_ManagerConfirm_List } from "./assets/info";
export default {
  name: "App",
  data() {
    return {
      gridProps: Sh_ManagerConfirm_List,
      columnDefs: null,
      rowData: null
    };
  },
  components: {
    AgGridVue
  },

  beforeMount() {
    this.columnDefs = [
      {
        headerName: this.gridProps[0].name,
        field: this.gridProps[0].field,
        checkboxSelection: true
      },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];
  },
  watch: {
    columnDefs: () =>
      Sh_ManagerConfirm_List.forEach(el => {
        return { headerName: el.name, field: el.field };
      }),
    rowData: () =>
      Sh_ManagerConfirm_List.forEach(el => {
        return { [el.name]: el.label };
      })
  }
};
</script>


<style lang="scss">
/* @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css"; */
@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
// @import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
// @import "../node_modules/ag-grid-community/src/styles/ag-theme-balham-dark/sass/ag-theme-balham-dark.scss";
</style>
