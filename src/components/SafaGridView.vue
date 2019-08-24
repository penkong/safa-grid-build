<template>
  <div :class="onLoadAlign">
    <ag-grid-vue
      style="width: 100%; height: 90vh;"
      class="ag-theme-material"
      :gridOptions="gridOptions"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :rowAnimation="true"
      rowSelection="multiple"
    >
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
    ourItems: {
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
      gridOptions: {},
      defaultColDef: {
        // rowDrag: true
        sortable: true,
        resizable: true,
        filter: true,
        sort: "asc",
        cellStyle: {
          "background-color": "#fafaf7",
          "border-top": "1px solid #826313",
          "border-radius": "4px",
          "margin-top": "5px"
        }
      },
      columnDefs: null,
      rowData: null,
      rowCount: null,
      sideBar: false,
      showForm: false,
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
        this,
        "columnDefs",
        loadColumnsBaseOnProps(this.definedCols)
      );
    },
    onLoadRows() {
      return this.$set(this, "rowData", this.definedrows);
    }
  },
  watch: {
    columnDefs: "onLoadColumns",
    rowData: "onLoadRows"
    // rowLabels: "onLoadOneRow"
  },
  methods: {
    onShowForm() {
      this.showForm = !this.showForm;
    }
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
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material.scss";

div {
  .righted {
    text-align: left;
    background-color: rgb(21, 56, 95);
  }
  .lefted {
    text-align: left;
    background-color: rgb(78, 78, 201);
  }
}
</style>
