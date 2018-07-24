

function onOpen() {
  var m = SpreadsheetApp.getUi().createMenu('Console');
  m.addItem('ORG', 'createOrg').addToUi();
  m.addItem('GROUP', 'createGroup').addToUi();
  m.addItem('TEMPLATE', 'TEMPLATE').addToUi();
}


function createOrg() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORG');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      var or = {name: d[x][0], description: d[x][1], parentOrgUnitPath: d[x][2], blockInheritance: false}
      Logger.log(or);
      var me = 'ID'; // This is your user ID and most likely should be an admin.
      var org = AdminDirectory.Orgunits.insert(or, me);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(3000); // Will not run if you do not leave time here around 1 to 3 seconds. 
    }
     
  }  

    
function createGroup() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      var gr = {email: d[x][0], name: d[x][1], description: d[x][2], }
      var gro = AdminDirectory.Groups.insert(gr);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(3000);
    }
     
  }  
}    
    
    
// https://stackoverflow.com/questions/33493998/how-do-i-find-the-immutable-id-of-my-google-apps-account

  
function TEMPLATE() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().setName('ORG');
  spreadsheet.getRange('A1').activate(); spreadsheet.getCurrentCell().setValue('NAME');
  spreadsheet.getRange('B1').activate(); spreadsheet.getCurrentCell().setValue('DESCRIPTION');
  spreadsheet.getRange('C1').activate(); spreadsheet.getCurrentCell().setValue('PATH');
  spreadsheet.getRange('D:D').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('A1:C1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold').setHorizontalAlignment('center');
  spreadsheet.getRange('A:C').activate(); spreadsheet.getActiveSheet().setColumnWidths(1, 3, 300);
  spreadsheet.insertSheet(1); spreadsheet.getActiveSheet().setName('GROUP');
  spreadsheet.getRange('D:D').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('A1').activate(); spreadsheet.getCurrentCell().setValue('EMAIL');
  spreadsheet.getRange('B1').activate(); spreadsheet.getCurrentCell().setValue('NAME');
  spreadsheet.getRange('C1').activate(); spreadsheet.getCurrentCell().setValue('DECRIPTION');
  spreadsheet.getRange('A:C').activate();
  spreadsheet.getActiveSheet().setColumnWidths(1, 3, 300);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('A1:C1').activate();
  spreadsheet.getActiveRangeList().setHorizontalAlignment('center').setFontWeight('bold');
};
  
  
  

