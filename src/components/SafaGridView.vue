<template>
  <div :class="loadAlign">
    <form @submit.prevent="rowCreatorIcon" style="margin-top: 20px;">
      <input type="text" id="name" />
      <label for="name">نام</label>
      <button>create ICON</button>
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
      rowCount: null
    };
  },
  computed: {
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
    rowCreatorIcon() {
      this.$emit("rowCreate", this.set(this.definerows, index, obj));
    }
  }
};
</script>


<style lang="scss">
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material.scss";
div {
  form {
    text-align: right;
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
  text-align: right;
  background-color: rgb(209, 157, 157);
}
.lefted {
  text-align: left;
  background-color: rgb(78, 78, 201);
}
</style>
