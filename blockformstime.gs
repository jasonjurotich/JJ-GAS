function blockForms() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('FORMS MC');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='AS'){
var form = FormApp.openById(d[x][5]).setAcceptingResponses(false);} 
}}

function timeBlock(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('FORMS MC');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='AS'){  
var dt = new Date (d[x][14]);  
ScriptApp.newTrigger('blockForms').timeBased().at(dt).create();
}
}
}
