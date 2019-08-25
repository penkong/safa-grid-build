<template>
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
</template>
<!--

setDataValue() {
      this.gridApi.forEachNode(function(rowNode) {
        rowNode.setDataValue("sickDays", randomInt());
      });
    },
    setData() {
      this.gridApi.forEachNode(function(rowNode) {
        let newData = {
          employee: rowNode.data.employee,
          sickDays: randomInt()
        };
        rowNode.setData(newData);
      });
    }
// updateRowData() {
//       let itemsToUpdate = [];
//       this.gridApi.forEachNode(function(rowNode) {
//         let data = rowNode.data;
//         data.sickDays = randomInt();
//         itemsToUpdate.push(data);
//       });
//       this.gridApi.updateRowData({ update: itemsToUpdate });
//     }

<!-- <button v-on:click="saveState()">Save State</button> -->
          <!-- :sideBar="sideBar"
      :statusBar="statusBar"-->
      <!-- :defaultColDef="defaultColDef" -->
      <!-- :columnDefs="columnDefs"
      :rowData="rowData"-->
      <!-- <div v-slot:outItems="ourItems"></div>
          //       rowDrag: true,
          // enableRowGroup: true,
          // enablePivot: true,
          // enableValue: true,
             columnTypes: {
          // can add type: ['nonEditableColumn'], in loadColumn funcs;
          // nonEditableColumn: { editable: false },
        },
           -->
<style lang="scss" scoped>
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
</style>

