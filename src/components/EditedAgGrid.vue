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

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import { AgGridVue } from "ag-grid-vue";
// import axios from "axios";
export default {
  name: "App",
  components: {
    AgGridVue
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      item: null,
      columnDefs: null,
      rowData: null
    };
  },

  computed: {},
  beforeMount() {
    this.columnDefs = [
      { headerName: this.items[1].label },
      { headerName: this.items[2].label },
      { headerName: this.items[3].label },
      { headerName: this.items[4].label },
      { headerName: this.items[5].label }
    ];
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  },
  watch: {}
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
