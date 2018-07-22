

function onOpen() {
  var m = SpreadsheetApp.getUi().createMenu('Console');
  m.addItem('ORG', 'createOrg').addToUi();
  m.addItem('GROUP', 'createGroup').addToUi();


function createOrg() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORG');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#bad1d1"){
      var or = {name: d[x][0], description: d[x][1], parentOrgUnitPath: d[x][2], blockInheritance: false}
      Logger.log(or);
      var me = 'ID'; // This is your user ID and most likely should be an admin.
      var org = AdminDirectory.Orgunits.insert(or, me);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#bad1d1');  
    }
     
  }  

    
function createGroup() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#bad1d1"){
      var gr = {email: d[x][0], name: d[x][1], description: d[x][2], }
      var gro = AdminDirectory.Groups.insert(gr);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#bad1d1');  
    }
     
  }  
}    
    
    
// https://stackoverflow.com/questions/33493998/how-do-i-find-the-immutable-id-of-my-google-apps-account


