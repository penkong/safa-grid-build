export function loadColumnsBaseOnProps(colProps) {
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
  return arr;
}