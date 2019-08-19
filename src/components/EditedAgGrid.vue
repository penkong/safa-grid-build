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
export default {
  name: "App",
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
  components: {
    AgGridVue
  },
  computed: {
    loadColumn() {
      let columns;
      for (let i = 0; i < this.gridProps.length - 1; i++) {
        columns = [{ headerName: this.gridProps[i].label }];
      }
      return columns;
    }
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: thi[0].label },
      { headerName: this.gridProps[1].label },
      { headerName: this.gridProps[2].label },
      { headerName: this.gridProps[3].label },
      { headerName: this.gridProps[4].label },
      { headerName: this.gridProps[5].label }
    ];
    this.rowData = [
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      },
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      },
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      },
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      },
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      },
      {
        [this.gridProps[0].label]: "33",
        [this.gridProps[1].label]: "33",
        [this.gridProps[2].label]: "33",
        [this.gridProps[3].label]: "33",
        [this.gridProps[4].label]: "33",
        [this.gridProps[5].label]: "33"
      }
    ];
  },
  watch: {}
};
</script>


<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
