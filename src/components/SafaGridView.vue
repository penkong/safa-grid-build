<template>
  <div class="safa-grid" :class="onLoadAlign" style="height: 100%">
    <ag-grid-vue
      style="width: 100%; height: 100vh;"
      class="ag-theme-balham"
      rowSelection="multiple"
      :gridOptions="gridOptions"
      :rowAnimation="true"
      @grid-ready="onGridReady"
    ></ag-grid-vue>
  </div>
</template>

<script>
//$ npm install --save ag-grid-community ag-grid-vue vue-property-decorator
import { AgGridVue } from "ag-grid-vue";

// helper functions help us to maintain clean code.
import { loadColumnsBaseOnProps } from "../helpers/loadColumnsBaseOnProps";

export default {
  name: "SafaGridView",
  components: {
    AgGridVue
  },
  props: {
    definedCols: {
      type: Array,
      required: true,
      defualt: []
    },
    definedrows: {
      type: Array,
      required: true,
      defualt: []
    },
    gridAlign: {
      type: String,
      required: true,
      defualt: "righted",
      validator: function(value) {
        return ["righted", "lefted"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      gridOptions: {
        defaultColDef: {
          sortable: true,
          resizable: true,
          filter: true,
          sort: "asc",
          rowStyle: { background: "black" },
          editable: true,
          rowCount: null,
          sideBar: false,
          showForm: false,
          gridApi: null,
          columnApi: null
        },
        statusBar: {
          statusPanels: []
        },
        enableCellChangeFlash: true,
        defaultColGroupDef: {},
        columnTypes: {},
        columnDefs: null,
        rowData: null
      },
      searchTerm: "",
      formProps: []
    };
  },
  computed: {
    onLoadAlign() {
      return this.gridAlign;
    },
    onLoadColumns() {
      return this.$set(
        this.gridOptions,
        "columnDefs",
        loadColumnsBaseOnProps(this.definedCols)
      );
    },
    onLoadRows() {
      return this.$set(this.gridOptions, "rowData", this.definedrows);
    }
  },
  watch: {
    columnDefs: "onLoadColumns",
    rowData: "onLoadRows"
  },
  methods: {
    onGridReady(params) {
      params.api.sizeColumnsToFit(3);
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
.safa-grid {
  padding: 0;
  margin: 0;
}
.righted {
  text-align: left;
  background-color: rgb(21, 56, 95);
}
.lefted {
  text-align: left;
  background-color: rgb(78, 78, 201);
}
</style>
