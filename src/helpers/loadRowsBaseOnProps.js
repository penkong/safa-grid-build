export function loadRowsBaseOnProps(colProps, rowProps, target) {
    let arr = [];
    let rv = {};
    let rowArr = [];
    for (let item of colProps) {
        arr.push(item.field);
    }
    // arr = ["EumManagerConfirmLicence", "UserName", "ConfirmationDate", "ConfirmationTime", "CI_ResourceManagerConfirm", "CI_ResourceManagerConfirmDetails", "Comments"]
    for (let i of arr) {
        rv[i] = "";
    }
    // rv = {EumManagerConfirmLicence: "", UserName: "", ConfirmationDate: "", ConfirmationTime: "", CI_ResourceManagerConfirm: "", …}
    // we need [rv, rv, rv];
    for (let i = 0; i < rowProps.length; i++) {
        rowArr.push(rv);
    }
    return (target = rowArr);
}