<template>
  <div :class="onLoadAlign">
    <div class="form">
      <button @click.prevent="onSearchItem">SEARCH ITEM</button>
      <button @click.prevent="onEditItem">EDIT ITEM</button>
      <button v-if="!showForm" @click.prevent="onShowForm">CREATE NEW</button>
      <form v-if="showForm" @submit.prevent="onCreateRow" style="margin-top: 20px;">
        <div class="form-group" v-for="rowLabel in rowLabels" :key="rowLabel">
          <SInput />
          <SLabel :rowLabel="rowLabel"></SLabel>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <ag-grid-vue
      style="width: 100%; height: 90vh;"
      class="ag-theme-material"
      :gridOptions="gridOptions"
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

// components created by developers
import SInput from "./Input/SInput";
import SLabel from "./Label/SLabel";

// helper functions help us to maintain clean code.
import { loadColumnsBaseOnProps } from "../helpers/loadColumnsBaseOnProps";
import { loadRowsBaseOnProps } from "../helpers/loadRowsBaseOnProps";
import { loadOneRowBaseOnProps } from "../helpers/loadOneRowBaseOnProps";

export default {
  name: "SafaGridView",
  components: {
    SLabel,
    SInput,
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
      gridOptions: {},
      columnDefs: null,
      rowData: null,
      rowCount: null,
      sideBar: false,
      showForm: false,
      rowLabels: null,
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
      return this.$set(
        this,
        "rowData",
        loadRowsBaseOnProps(this.definedCols, this.definedrows, this.rowData)
      );
    },
    onLoadOneRow() {
      return this.$set(
        this,
        "rowLabels",
        loadOneRowBaseOnProps(this.definedCols)
      );
    }
  },
  created() {
    onLoadColumns();
    onLoadRows();
    onLoadOneRow();
  },
  watch: {
    columnDefs: "onLoadColumns",
    rowData: "onLoadRows",
    rowLabels: "onLoadOneRow"
  },
  methods: {
    onShowForm() {
      this.showForm = !this.showForm;
    },
    onCreateRow(formProps) {
      this.rowData.push({
        // bring form props in it;
        // id: this.nextTodoId++,
        // title: this.newTodoText
      });
      this.$emit("onCreateRow", this.formProps);
      this.formProps = [];
      this.showForm = !this.showForm;
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
  div > .form {
    margin: 1rem auto;
    padding: 0.5rem;
    button {
      cursor: pointer;
      color: white;
      font-size: 1.1rem;
      letter-spacing: 3px;
      margin: 0 auto;
      margin-top: 1rem;
      text-align: center;
      display: block;
      width: 20%;
      height: 40px;
      border-radius: 10px;
      background-color: rgb(2, 173, 159);
      border: none;
      box-shadow: 0px 6px 5px 2px rgb(0, 80, 100);
      transition: all 0.3s ease-in;
      &:hover {
        transform: scaleX(1.1);
      }
    }
    form {
      background-color: #eee;
      padding: 1rem;
      border-radius: 5px;
      width: 50%;
      text-align: center;
      margin: 0 auto;
      .form-group {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        input {
          border-radius: 3px;
          min-width: 1rem;
          padding: 0.25rem;
        }
      }
      div > button {
        margin-top: 1rem;
        background-color: rgb(0, 153, 255);
        width: 40%;
        border-radius: 3rem;
        outline: none;
      }
    }
  }
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
