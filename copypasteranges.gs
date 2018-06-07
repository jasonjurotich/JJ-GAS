function copyAnswers() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('FORMS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} 
                     
else if (i=='L1'){ 
var a = SpreadsheetApp.openById('ID').getSheets()[d[x][1]].getRange(d[x][19]).getValues();  
SpreadsheetApp.openById('ID').getSheetByName('LEVEL1').getRange(d[x][20]).setValues(a);
}  
else if (i=='L2'){                     
var b = SpreadsheetApp.openById('ID').getSheets()[d[x][1]].getRange(d[x][19]).getValues();
SpreadsheetApp.openById('ID').getSheetByName('LEVEL2').getRange(d[x][20]).setValues(b);
}
else if (i=='L3'){
var c = SpreadsheetApp.openById('ID').getSheets()[d[x][1]].getRange(d[x][19]).getValues();
SpreadsheetApp.openById('ID').getSheetByName('LEVEL3').getRange(d[x][20]).setValues(c);
}
else if (i=='L4'){
var c = SpreadsheetApp.openById('ID').getSheets()[d[x][1]].getRange(d[x][19]).getValues();
SpreadsheetApp.openById('ID').getSheetByName('LEVEL4').getRange(d[x][20]).setValues(c);
}
}
}
