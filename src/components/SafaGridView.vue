<template>
  <div :class="loadAlign">
    <button @click.prevent="onSearchItem">SEARCH ITEM</button>
    <button @click.prevent="onEditItem">EDIT ITEM</button>
    <button v-if="!showForm" @click.prevent="onShowForm">CREATE ITEM</button>
    <form v-if="showForm" @submit.prevent="onCreateRow" style="margin-top: 20px;">
      <div class="form-group" v-for="col in columnDefs" :key="col.name">
        <label for="name">name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    <ag-grid-vue
      style="width: 90%; height: 90vh;"
      class="ag-theme-material"
      :columnDefs="loadColumn"
      :rowData="rowData"
      rowSelection="multiple"
    >
      <slot v-for="item in ourItems" :key="item" :name="ourItems"></slot>
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
    defineCols: {
      type: Array,
      required: true,
      defualt: [],
      validator: function() {
        return;
      }
    },
    definerows: {
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
      showGrid: false,
      sideBar: false,
      rowCount: null,
      newRow: {},
      searchTerm: "",
      formProps: {},
      showForm: false
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
      let info = this.defineCols;
      for (let i = 0; i < info.length; i++) {
        arr.push({ headerName: info[i].label, field: info[i].field });
      }
      return (this.columnDefs = arr);
    },

    loadRows() {
      let arr = [];
      let info = this.definerows;
      for (let i = 0; i < info.length; i++) {
        arr.push({ text: "add logic here" });
      }
      return (this.rowData = arr);
    }
  },
  created() {
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  },
  methods: {
    onCreateRow() {
      this.$emit(
        "onCreateRow",
        this.$set(this.definerows, this.rowData.length, this.newRow)
      );
      this.showForm = false;
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
