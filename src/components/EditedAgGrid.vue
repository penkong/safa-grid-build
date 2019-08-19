<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 100vh;"
      class="ag-theme-balham"
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
  name: "EditedAgGrid",
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
      columnDefs: null,
      rowData: null
    };
  },

  computed: {
    loadColumn() {
      let arr = [];
      let info = this.items;
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
  },
  watch: {}
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
