

function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('Scripts');
s.addItem('USER', 'createUserOYG').addToUi();  
s.addItem('UPDATE USER', 'updateUserOYG').addToUi();
s.addItem('GROUP', 'createGroupOYG').addToUi();  
s.addItem('EDIT GROUP INFO', 'editGroupInfoOYG').addToUi();
s.addItem('EDIT GROUP NAME', 'editGroupNameOYG').addToUi();
s.addItem('ADD USER', 'addGroupMemberOYG').addToUi();
s.addItem('ADD GROUP2GR', 'addGroupToGroupOYG').addToUi();  
s.addItem('ORG', 'createOrgOYG').addToUi();
s.addItem('LIST ORGS', 'listOrgOYG').addToUi();  
s.addItem('EDIT ORG', 'editOrgOYG').addToUi();    
}



function createUserOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3' ) {
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
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3' ) {
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
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3'){
      try{
      var gr = {email: d[x][0], name: d[x][1], description: d[x][2]}
      var gro = AdminDirectory.Groups.insert(gr);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}



function editGroupInfoOYG(){
  
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{
        var groupId = d[x][5];
        var group = AdminGroupsSettings.newGroups();
        group.name = d[x][1]
        group.description = d[x][2];
        group.whoCanAdd = 'NONE_CAN_ADD';
        group.whoCanJoin = 'INVITED_CAN_JOIN';
        group.whoCanViewMembership = 'ALL_MEMBERS_CAN_VIEW';
        group.whoCanViewGroup = 'ALL_MEMBERS_CAN_VIEW';
        group.whoCanInvite = 'ALL_MANAGERS_CAN_INVITE';
        group.allowExternalMembers = false;
        group.whoCanPostMessage = 'ALL_MEMBERS_CAN_POST';
        group.allowWebPosting = true;
        group.showInGroupDirectory = false;
        group.allowGoogleCommunication = false;
        group.membersCanPostAsTheGroup = false;
        group.includeInGlobalAddressList = false;
        group.whoCanLeaveGroup = 'NONE_CAN_LEAVE';
        
        AdminGroupsSettings.Groups.patch(group, groupId);
        Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}



function editGroupNameOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3'){
      try{
      var groupKey = d[x][5];  
      var gr = {email: d[x][0]}
      var gro = AdminDirectory.Groups.update(gr, groupKey);
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
  
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
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
  
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
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
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{
      var or = {name: d[x][0], description: d[x][2], parentOrgUnitPath: d[x][3], blockInheritance: false}
      var me = 'ID'; // Admin ID 
      var org = AdminDirectory.Orgunits.insert(or, me);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(3000);  
      }
      catch (e){continue;}  
    }
     
  }  
}

  

function listOrgOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
 var me = 'ID';  // Admin ID
 var org = AdminDirectory.Orgunits.list(me, {orgUnitPath: '/', type: 'all'});
 var orgs = org.organizationUnits;  
  
  var arr = [];
      for (i = 0; i < orgs.length; i++) {
        var or = orgs[i]; 
        var ids = or.orgUnitId;
        var names = or.name;
        arr.push([names,ids]); 
      }
      s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);  
}
        




function editOrgOYG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var or = {name: d[x][0], description: d[x][2], parentOrgUnitPath: d[x][3], blockInheritance: false}
      var orgUnitPath = d[x][1];
      var me = 'ID'; // Admin ID
      var org = AdminDirectory.Orgunits.update(or, me, orgUnitPath);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(3000);  
      }
      catch (e){continue;}  
    }
     
  }  
}


