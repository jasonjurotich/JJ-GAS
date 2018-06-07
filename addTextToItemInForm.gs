function addLink() {
var s = SpreadsheetApp.openById('ID').getSheetByName('FORMS').getDataRange();
var n = s.getNumRows();
var d = s.getValues();
  
   for (x = 0; x < n; x++){
      var i = d[x][0];
      var a = d[x][5];
      var h = d[x][28];
     
      if (i == '') {
         continue;
      }
      else if (i == 'AS') {
        var t1 = FormApp.openById(a).getItems()[0].setHelpText(h);
      }
   }
}
