

function separate() {
var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var r = s.getDataRange();
var n = r.getNumRows();
var d = r.getValues();

for (x=0;x<n;x++) {
var i = d[x][0];
var q = (x + 1) * 7;
s.getRange(q, 4, 1, 1).setValue(i);
}  
}


