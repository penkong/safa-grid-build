export function loadColumn(colProps, target) {
    let arr = [];
    // let colProps = this.definedCols;
    for (let i = 0; i < colProps.length; i++) {
        arr.push({
            headerName: colProps[i].label,
            field: colProps[i].field,
            sortable: true,
            filter: true
        });
    }
    return (target = arr);
}

// loadColumn() {
//   let arr = [];
//   let info = this.definedCols;
//   for (let i = 0; i < info.length; i++) {
//     arr.push({
//       headerName: info[i].label,
//       field: info[i].field,
//       sortable: true,
//       filter: true
//     });
//   }
//   return (this.columnDefs = arr);
// },