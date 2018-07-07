

function copyForms() {
    var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PROGRAM');
    var fol = DriveApp.getFolderById('ID');
    var r = s.getDataRange();
    var n = r.getNumRows();
    var d = r.getValues();
    
    for (x=0; x<n; x++) { var i = d[x][0]; var o=x+1; if (i=='') {continue;} else if (i=='D') {
    
        var fo = DriveApp.getFileById(d[x][6]).makeCopy(d[x][5],fol).getId();
        var f = FormApp.openById(fo);
        var arr = [];
          arr.push([f.getId(), f.getEditUrl(), f.getPublishedUrl()]);
          s.getRange(o, 8, arr.length, arr[0].length).setValues(arr);
          
        }
      }
    }
