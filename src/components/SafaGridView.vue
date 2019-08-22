<template>
  <div :class="loadAlign">
    <button @click.prevent="onSearchItem">SEARCH ITEM</button>
    <button @click.prevent="onEditItem">EDIT ITEM</button>
    <button v-if="!showForm" @click.prevent="showForm=true">CREATE ITEM</button>
    <!-- <button :disabled="showGrid" >Create Grid</button> -->
    <form v-if="showForm" @submit.prevent="onCreateRow" style="margin-top: 20px;">
      <div class="form-group" v-for="newRowLabel in newRowLabels" :key="newRowLabel">
        <label :for="{newRowLabel}">{{ newRowLabel }}</label>
        <input type="text" :id="{newRowLabel}" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <ag-grid-vue
      style="width: 90%; height: 90vh;"
      class="ag-theme-material"
      :columnDefs="loadColumn"
      :rowData="rowData"
      rowSelection="multiple"
    >
      <slot :name="ourItems"></slot>
    </ag-grid-vue>
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
    definedCols: {
      type: Array,
      required: true,
      defualt: [],
      validator: function() {
        return;
      }
    },
    definedrows: {
      type: Array,
      required: true,
      defualt: [],
      validator: function() {
        return;
      }
    },
    ourItems: {
      type: Array,
      required: true,
      defualt: [],
      validator: function() {
        return;
      }
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
      gridOptions: null,
      columnDefs: null,
      rowData: null,
      rowCount: null,
      showGrid: false,
      sideBar: false,
      showForm: false,
      // [columnDefs.map(({ label }) => Object.values(label).join(""))]: String
      newRowLabels: {},
      searchTerm: "",
      formProps: {}
    };
  },
  computed: {
    onShowForm() {
      this.showForm = !this.showForm;
    },
    loadAlign() {
      return this.gridAlign;
    },

    loadColumn() {
      let arr = [];
      let info = this.definedCols;
      for (let i = 0; i < info.length; i++) {
        arr.push({
          headerName: info[i].label,
          field: info[i].field,
          sortable: true,
          filter: true
        });
      }
      return (this.columnDefs = arr);
    },

    loadARowForCreateForm() {
      // it give us an array. of header names.
      let newRowFromColumns = this.definedCols.map(({ headerName }) =>
        Object.values(headerName).join("")
      );
      for (let i of newRowFromColumns) {
        this.newRowLabels[i] = "hello";
      }
    },

    loadRowsBaseOnProps() {
      let arr = [];
      let rv = {};
      let rowArr = [];
      for (let item of this.definedCols) {
        arr.push(item.field);
      }
      // arr = ["EumManagerConfirmLicence", "UserName", "ConfirmationDate", "ConfirmationTime", "CI_ResourceManagerConfirm", "CI_ResourceManagerConfirmDetails", "Comments"]
      for (let i of arr) {
        rv[i] = "";
      }
      // rv = {EumManagerConfirmLicence: "", UserName: "", ConfirmationDate: "", ConfirmationTime: "", CI_ResourceManagerConfirm: "", …}
      // we need [rv, rv, rv];
      for (let i = 0; i < this.definedrows.length; i++) {
        rowArr.push(rv);
      }
      return (this.rowData = rowArr);
    }
  },
  methods: {
    onCreateRow() {
      this.$emit(
        "onCreateRow",
        this.$set(this.definedrows, this.rowData.length, this.newRowLabels)
      );
      // this.showForm = false;
      // this.formProps = {};
    },
    onSearchItem() {
      this.$emit("onSearchItem", this.searchTerm);
    },
    onEditItem() {
      this.$emit("onEditItem", this.formProps);
    }
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material.scss";
div {
  button {
    display: block;
    width: 30%;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(204, 133, 27);
  }
  form {
    button {
      display: block;
      width: 30%;
      height: 40px;
      border-radius: 10px;
      background-color: rgb(133, 80, 0);
    }
  }
}
.righted {
  text-align: left;
  background-color: rgb(209, 157, 157);
}
.lefted {
  text-align: left;
  background-color: rgb(78, 78, 201);
}
</style>
