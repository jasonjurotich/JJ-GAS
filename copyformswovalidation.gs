function copyFormsWOV() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('FORMS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='AS'){

  var fol1 = s.getSheetByName("FORMS").getRange("K3").getValue();
  var folder = DriveApp.getFolderById(fol1);  
  var createForm = DriveApp.getFileById(d[x][10]).makeCopy(d[x][14], folder).getId();
  var fum = FormApp.openById(createForm);
  
    var its = fum.getItems();
     for (var w = 0; w < its.length; w+= 1){
         var ite = its[w];
         if (ite.getType() === ite.getType().TEXT){   
         ite.asTextItem().clearValidation();
    }}
  
    var list = [];
     var row = []
         row.push(fum.getId(),fum.getEditUrl(),fum.getPublishedUrl())
         list.push(row);
      sh.getRange(d[x][4],16,list.length,list[0].length).setValues(list);  

}}}
