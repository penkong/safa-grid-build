<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 100vh;"
      class="ag-theme-material"
      :columnDefs="loadColumn"
      :rowData="rowData"
      rowSelection="multiple"
    ></ag-grid-vue>
  </div>
</template>

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import { AgGridVue } from "ag-grid-vue";
export default {
  name: "SafaGridView",
  components: {
    AgGridVue
  },
  props: {
    defineCol: {
      type: Array,
      required: true
    },
    itemsForRow: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  computed: {
    loadColumn() {
      let arr = [];
      let info = this.defineCol;
      for (let i = 0; i < info.length; i++) {
        arr.push({ headerName: info[i].label, field: info[i].field });
      }
      return (this.columnDefs = arr);
    }
  },
  created() {
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material.scss";
</style>
