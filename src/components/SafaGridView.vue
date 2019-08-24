<template>
  <div class="safa-grid" :class="onLoadAlign" style="height: 100vh;">
    <div class="button-row" style="margin-bottom: 5px;">
      <button v-on:click="setDataValue()">Create</button>
      <button v-on:click="setData()">Set</button>
      <button v-on:click="updateRowData()">Update</button>
    </div>
    <ag-grid-vue
      class="ag-theme-balham"
      style=" height: 100%;"
      rowSelection="multiple"
      :gridOptions="gridOptions"
      :rowAnimation="true"
      :rowClassRules="rowClassRules"
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
          rowStyle: {},
          editable: true,
          rowCount: null,
          sideBar: false,
          showForm: false
        },
        gridApi: null,
        columnApi: null,
        // statusBar: {
        //   statusPanels: []
        // },
        rowClassRules: null,
        enableCellChangeFlash: true,
        defaultColGroupDef: {},
        columnTypes: {},
        columnDefs: null,
        rowData: null
      }
    };
  },
  beforeMount() {
    this.rowClassRules = {};
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
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
      params.api.sizeColumnsToFit();
    },
    setDataValue() {
      this.gridApi.forEachNode(function(rowNode) {
        rowNode.setDataValue("sickDays", randomInt());
      });
    },
    setData() {
      this.gridApi.forEachNode(function(rowNode) {
        var newData = {
          employee: rowNode.data.employee,
          sickDays: randomInt()
        };
        rowNode.setData(newData);
      });
    },
    updateRowData() {
      var itemsToUpdate = [];
      this.gridApi.forEachNode(function(rowNode) {
        var data = rowNode.data;
        data.sickDays = randomInt();
        itemsToUpdate.push(data);
      });
      this.gridApi.updateRowData({ update: itemsToUpdate });
    },
    onGridReady(params) {}
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
.safa-grid {
  .button-row {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      cursor: pointer;
      margin: 1rem 0 0.4rem 2rem;
      border: none;
      min-width: 90px;
      border-radius: 6px;
      background-color: rgb(0, 75, 105);
      padding: 0.5rem 1rem;
      color: white;
      transition: background-color 0.3s ease-in-out;
      outline: none;
      &:hover {
        background-color: rgb(0, 115, 160);
      }
    }
  }
}
.righted {
  text-align: left;
  background-color: rgb(255, 254, 237);
}
.lefted {
  text-align: left;
  background-color: rgb(78, 78, 201);
}
</style>
