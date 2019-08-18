<template>
  <div>
    <button @click="getSelectedRows()">Get Selected Rows</button>
    <ag-grid-vue
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
      @grid-ready="onGridReady"
    ></ag-grid-vue>
  </div>
</template>


//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
// import SafaGrid from "./components/SafaGrid.vue";
<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null
    };
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    // this.columnDefs = [
    //   { headerName: "Make", field: "make", sortable: true, filter: true },
    //   { headerName: "Model", field: "model", sortable: true, filter: true },
    //   { headerName: "Price", field: "price", sortable: true, filter: true }
    // ];
    this.columnDefs = [
      { headerName: "Make", field: "make", checkboxSelection: true },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];
    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 }
    // ];
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      const selectedDataStringPresentation = selectedData
        .map(node => node.make + " " + node.model)
        .join(", ");
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
  }
};
</script>


<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
