export function loadColumnsBaseOnProps(colProps) {
    let arr = [];
    // let colProps = this.definedCols;
    for (let i = 0; i < colProps.length; i++) {
        arr.push({
            headerName: colProps[i].label,
            field: colProps[i].field,
            sortable: true,
            filter: true,
            resizable: true,
            pinned: 'right',
            sort: 'asc',
            rowDrag: true,
            cellStyle: {
                "background-color": '	#ecfaff',
                "border-top": "1px solid #5d84a9",
                "border-left": "1px solid #5d84a9",
                "border-radius": "1px"
            }
        });
    }
    return arr;
}