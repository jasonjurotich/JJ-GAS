

function copySynopsis() {
var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SYNTEMPLATE');
var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var fol = DriveApp.getFolderById(d[1][2]);
  for (x=1; x<n; x++){
  var l = 1 + x;

    if (s.getRange(l,1).getBackground() !== '#bad1d1'){
    var doc = DriveApp.getFileById(d[1][3]).makeCopy(d[x][0], fol).getId();
    var sy = SpreadsheetApp.openById(doc);
    var ti = sy.getSheetByName('EXERCISES').getRange('C1').setValue(d[x][1]);
    var c = s.getRange(l,1, 1, s.getLastColumn()).setBackground('#bad1d1');
    }
    
  }
}


