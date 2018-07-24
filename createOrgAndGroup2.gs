

function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('Scripts');
s.addItem('USER', 'createUserOYG').addToUi();  
s.addItem('UPDATE USER', 'updateUserOYG').addToUi();
s.addItem('ADD USER', 'addGroupMemberOYG').addToUi();
s.addItem('GROUP', 'createGroupOYG').addToUi();
s.addItem('ORG', 'createOrgOYG').addToUi();
s.addItem('GROUP2GR', 'addGroupToGroupOYG').addToUi();  
  
}


function createUserOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try {
      var user = {primaryEmail: d[x][0], name: {givenName: d[x][1],familyName: d[x][2]},
      password: d[x][3],changePasswordAtNextLogin: d[x][4],
      includeInGlobalAddressList: d[x][5], orgUnitPath: d[x][6],    
      };
      
      var org = AdminDirectory.Users.insert(user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(1000);
      }
      catch (e){continue;}
    }
     
  }  
}


 

function updateUserOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try{
      var user = d[x][0];
      var resource = {orgUnitPath: d[x][6]};
      var org = AdminDirectory.Users.update(resource, user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(1000);
        }
      catch (e){continue;}
    }
     
  }  
}



  
function createGroupOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try{
      var gr = {email: d[x][0], name: d[x][1], description: d[x][2], }
      var gro = AdminDirectory.Groups.insert(gr);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}




function addGroupMemberOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x; 
  
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try{ 
    var userEmail = d[x][0];
    var groupKey = d[x][7];
    var resource = { email: userEmail, role: 'MEMBER'};
    var gr = AdminDirectory.Members.insert(resource, groupKey);
    var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
    Utilities.sleep(1000); 
      }
      catch (e){continue;}
      
    }
  }
}





function addGroupToGroupOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPTOGROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x; 
  
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try{  
    var userEmail = d[x][0];
    var groupKey = d[x][1];
    var resource = { email: userEmail, role: 'MEMBER'};
    var gr = AdminDirectory.Members.insert(resource, groupKey);
    var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
    Utilities.sleep(1000); 
      }
      catch (e){continue;}
    }
  }
}





function createOrgOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== "#d0e0e3"){
      try{
      var or = {name: d[x][0], description: d[x][1], parentOrgUnitPath: d[x][2], blockInheritance: false}
      var me = 'ID';
      var org = AdminDirectory.Orgunits.insert(or, me);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(3000);  
      }
      catch (e){continue;}  
    }
     
  }  
}
