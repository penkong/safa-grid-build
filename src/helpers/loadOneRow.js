export function loadOneRow(colProps, target) {
  let arr = [];
  let rv = {};
  for (let item of colProps) {
    arr.push(item.field);
  }
  // arr = ["EumManagerConfirmLicence", "UserName", "ConfirmationDate", "ConfirmationTime", "CI_ResourceManagerConfirm", "CI_ResourceManagerConfirmDetails", "Comments"]
  for (let i of arr) {
    rv[i] = "";
  }
  return(target = rv)
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