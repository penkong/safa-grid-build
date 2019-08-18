<template>
  <div>
    <ag-grid-vue
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      columnDefs
      rowData
      rowSelection="multiple"
    ></ag-grid-vue>
  </div>
</template>


//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
// import SafaGrid from "./components/SafaGrid.vue";
<script>
import { AgGridVue } from "ag-grid-vue";
import { Sh_ManagerConfirm_List } from "./assets/info";
export default {
  name: "App",
  props: ["Sh_ManagerConfirm_List"],
  data() {
    return {
      columnDefs: 2,
      rowData: 2
    };
  },
  components: {
    AgGridVue
  },
  computed: {
    cons() {
      console.log(props);
    }
  },
  created() {
    // this.columnDefs = Sh_ManagerConfirm_List.forEach(
    //   ({ name, field, sortable }) => {
    //     return [
    //       {
    //         headerName: name,
    //         field: field,
    //         sortable: sortable,
    //         filter: true
    //       }
    //     ];
    //   }
    // );
    // this.columnDefs = [
    //   { headerName: "Make", field: "make", checkboxSelection: true },
    //   { headerName: "Model", field: "model" },
    //   { headerName: "Price", field: "price" }
    // ];
    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 }
    // ];
    // @grid-ready="onGridReady"
    // fetch("https://api.myjson.com/bins/15psn9")
    //   .then(result => result.json())
    //   .then(rowData => (this.rowData = rowData));
  },
  methods: {
    // loadColumn() {
    //   this.columnDefs = Sh_ManagerConfirm_List.forEach(el => {
    //     return {
    //       headerName: el.name,
    //       field: el.field,
    //       sortable: el.sortable,
    //       filter: true
    //     };
    //   });
    // },
    // loadRow() {
    //   this.rowData = Sh_ManagerConfirm_List.forEach(el => {
    //     return {
    //       [el.field]: "3"
    //     };
    //   });
    // }
    // onGridReady(params) {
    //   this.gridApi = params.api;
    //   this.columnApi = params.columnApi;
    // },
    // getSelectedRows() {
    //   const selectedNodes = this.gridApi.getSelectedNodes();
    //   const selectedData = selectedNodes.map(node => node.data);
    //   const selectedDataStringPresentation = selectedData
    //     .map(node => node.make + " " + node.model)
    //     .join(", ");
    //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
    // }
  }
};
</script>


<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
// @import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
// @import "../node_modules/ag-grid-community/src/styles/ag-theme-balham-dark/sass/ag-theme-balham-dark.scss";
</style>
