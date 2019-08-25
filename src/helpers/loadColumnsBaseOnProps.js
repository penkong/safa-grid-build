export function loadColumnsBaseOnProps(colProps) {
    let arr = [];
    // let colProps = this.definedCols;
    for (let i = 0; i < colProps.length; i++) {
        arr.push({
            colId: i,
            headerName: colProps[i].label,
            field: colProps[i].field,
            minWidth: colProps[i].width,
            type: "numericColumn",
        });
    }
    return arr;
}