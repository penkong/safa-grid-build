export function loadOneRowBaseOnProps(colProps) {
  let arr = [];
  for (let item of colProps) {
    arr.push(item.label);
  }
  return arr;
}

// it give us an array. of header names.
// let newRowFromColumns = this.definedCols.map(({
//     headerName
//   }) =>
//   Object.values(headerName).join("")
// );
// for (let i of newRowFromColumns) {
//   this.newRowLabels[i] = "hello";
// }
