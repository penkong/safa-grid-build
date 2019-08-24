<template>
  <div class="safa-grid" :class="onLoadAlign">
    <!-- <button v-on:click="saveState()">Save State</button> -->
    <ag-grid-vue
      style="width: 100%; height: 100vh;"
      class="ag-theme-material"
      rowSelection="multiple"
      :gridOptions="gridOptions"
      :rowAnimation="true"
      :animateRows="true"
      :enableRangeSelection="true"
      @grid-ready="onGridReady"
    >
      <!-- :sideBar="sideBar"
      :statusBar="statusBar"-->
      <!-- :defaultColDef="defaultColDef" -->
      <!-- :columnDefs="columnDefs"
      :rowData="rowData"-->
      <!-- <div v-slot:outItems="ourItems"></div> -->
    </ag-grid-vue>
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
      // validator: function() {
      //   return;
      // }
    },
    definedrows: {
      type: Array,
      required: true,
      defualt: []
      // validator: function() {
      //   return;
      // }
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
          // rowDrag: true,
          // enableRowGroup: true,
          // enablePivot: true,
          // enableValue: true,
          sortable: true,
          resizable: true,
          filter: true,
          sort: "asc",

          cellStyle: {
            "background-color": "#fafaf7",
            "border-top": "1px solid #826313",
            "border-radius": "4px",
            "margin-top": "5px",
            "border-bottm": "none"
          },
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
        columnTypes: {
          // can add type: ['nonEditableColumn'], in loadColumn funcs;
          // nonEditableColumn: { editable: false },
        },
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
    // rowLabels: "onLoadOneRow"
  },
  methods: {
    // onShowForm() {
    //   this.showForm = !this.showForm;
    // },
    onGridReady(params) {
      params.api.sizeColumnsToFit(3);
    }
    // saveState() {
    //   window.colState = this.gridColumnApi.getColumnState();
    //   window.groupState = this.gridColumnApi.getColumnGroupState();
    //   window.sortState = this.gridApi.getSortModel();
    //   window.filterState = this.gridApi.getFilterModel();
    // }
    // onCreateRow(formProps) {
    //   this.rowData.push({
    //     // bring form props in it;
    //     // id: this.nextTodoId++,
    //     // title: this.newTodoText
    //   });
    //   this.$emit("onCreateRow", this.formProps);
    //   this.formProps = [];
    //   this.showForm = !this.showForm;
    // },
    // onSearchItem() {
    //   this.$emit("onSearchItem", this.searchTerm);
    // },
    // onEditItem() {
    //   this.$emit("onEditItem", this.formProps);
    // }
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material.scss";
.safa-grid {
  padding: 0;
  margin: 0;
  // min-width: 100%;
  // min-height: 100%;
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
