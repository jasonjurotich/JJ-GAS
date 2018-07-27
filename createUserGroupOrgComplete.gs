

function allSCH(){
//createUserSCH(); 
//listUsersSCH();  
//updateUserSCH();
//updateUserPassSCH();  
//suspendUserSCH();  
//createGroupSCH();
//listGroupSCH();  
//editGroupConfigSCH();
//editGroupInfoSCH();
//deleteGroupSCH();  
//addGroupMemberSCH();
//addGroupToGroupSCH(); 
//createOrgSCH();
//listOrgSCH();  
//editOrgSCH();
//deleteOrgSCH();
}



function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('Scripts');
s.addItem('CREATE USER', 'createUserSCH').addToUi(); 
s.addItem('LIST USERS', 'listUsersSCH').addToUi();  
s.addItem('UPDATE USER', 'updateUserSCH').addToUi();
s.addItem('CHANGE USER PASS', 'updateUserPassSCH').addToUi();  
s.addItem('SUSPEND USER', 'suspendUserSCH').addToUi();  
s.addItem('CREATE GROUP', 'createGroupSCH').addToUi();
s.addItem('LIST GROUPS', 'listGroupSCH').addToUi();  
s.addItem('EDIT GROUP CONFIG', 'editGroupConfigSCH').addToUi();
s.addItem('EDIT GROUP INFO', 'editGroupInfoSCH').addToUi();
s.addItem('DELETE GROUP','deleteGroupSCH').addToUi();  
s.addItem('ADD USER TO GROUP', 'addGroupMemberSCH').addToUi();
s.addItem('ADD GROUP2GR', 'addGroupToGroupSCH').addToUi(); 
s.addItem('CREATE ORG', 'createOrgSCH').addToUi();
s.addItem('LIST ORGS', 'listOrgSCH').addToUi();  
s.addItem('EDIT ORG', 'editOrgSCH').addToUi();
s.addItem('DELETE ORG', 'deleteOrgSCH').addToUi();    
}



function createUserSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CREATEUSERS');
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



function listUsersSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LISTUSERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  var pageToken = null, urs = [];
 
  do{
    var us = AdminDirectory.Users.list({domain: 'SCH.edu.mx', pageToken: pageToken, pageSize:100});
    pageToken = us.nextPageToken;
    urs = urs.concat(us.users);  
  }while(pageToken);
 
  var arr = [];
      for (i = 0; i < urs.length; i++) {
        var ur = urs[i]; 
        var email = ur.primaryEmail;
        var first = ur.name.givenName;
        var last = ur.name.familyName;
        var pass = ur.password;
        var pass2 = ur.changePasswordAtNextLogin;
        var gl = ur.includeInGlobalAddressList;
        var org = ur.orgUnitPath;
        var sus = ur.suspended;
        arr.push([email,first,last,pass,pass2,gl,org]); 
      }
      s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);  
}



function updateUserSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3' ) {
      try{
      var user = d[x][0];
      var resource = {primaryEmail: d[x][0], name: {givenName: d[x][1],familyName: d[x][2]},
      includeInGlobalAddressList: d[x][5], orgUnitPath: d[x][6],    
      };
      var org = AdminDirectory.Users.update(resource, user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(1000);
        }
      catch (e){continue;}
    }
     
  }  
}



function updateUserPassSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3' ) {
      try{
      var user = d[x][0];
      var resource = {password: d[x][3],changePasswordAtNextLogin: d[x][4]};
      var org = AdminDirectory.Users.update(resource, user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(1000);
        }
      catch (e){continue;}
    }
     
  }  
}



function suspendUserSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3' ) {
      try{
      var user = d[x][0];
      var resource = {suspended: d[x][7]};
      var org = AdminDirectory.Users.update(resource, user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(1000);
        }
      catch (e){continue;}
    }
     
  }  
}


  
function createGroupSCH() {
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



function listGroupSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LISTGROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
 var pageToken;
 var gr = AdminDirectory.Groups.list({domain: 'SCH.edu.mx', maxResults: 300, pageToken: pageToken});
 var grs = gr.groups; 
  var arr = [];
      for (i = 0; i < grs.length; i++) {
        var or = grs[i]; 
        var ids = or.id;
        var names = or.name;
        var email = or.email;
        var des = or.description;
        
        arr.push([email,names,des,ids]); 
      }
      s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);  
}
      


// ** IMPORTANT: For "editGroupConfigSCH" function, the ""groupId" is the EMAIL of the group, NOT the unique ID.

function editGroupConfigSCH(){
  
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{
        var groupId = d[x][3]; 
        var group = AdminGroupsSettings.newGroups();
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
        
        var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
        AdminGroupsSettings.Groups.patch(group, groupId);
        Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}



function editGroupInfoSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3'){
      try{
      var groupKey = d[x][3];  
        var gr = {email: d[x][0], name: d[x][1], description: d[x][2]}
      var gro = AdminDirectory.Groups.update(gr, groupKey);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}



function deleteGroupSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3'){
      try{
      var groupKey = d[x][3];  
      var gro = AdminDirectory.Groups.remove(groupKey);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000); 
      }
      catch (e){continue;}
    }
     
  }  
}




function addGroupMemberSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x; 
  
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{ 
    var userEmail = d[x][0];
    var groupKey = d[x][8];
    var resource = { email: userEmail, role: 'MEMBER'};
    var gr = AdminDirectory.Members.insert(resource, groupKey);
    var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
    Utilities.sleep(1000); 
      }
      catch (e){continue;}
      
    }
  }
}



function addGroupToGroupSCH() {
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


/* IMPORTANT: The ID in each GAS below requires a special ID that you find under the 
Google Admin Console > Security > Set up single sign on (SSO) > Entity ID > id="ID HERE"
*/

function createOrgSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
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

  

function listOrgSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LISTORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
 var me = 'ID';
 var org = AdminDirectory.Orgunits.list(me, {orgUnitPath: '/', type: 'all'});
 var orgs = org.organizationUnits;  
  
  var arr = [];
      for (i = 0; i < orgs.length; i++) {
        var or = orgs[i]; 
        var ids = or.orgUnitId;
        var names = or.name;
        var des = or.description;
        var path = or.parentOrgUnitPath;
        arr.push([names,des,path,ids]); 
      }
      s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);  
}
        




function editOrgSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var or = {name: d[x][0], description: d[x][1], parentOrgUnitPath: d[x][2], blockInheritance: false}
      var orgUnitPath = d[x][3];
      var me = 'ID';
      var org = AdminDirectory.Orgunits.update(or, me, orgUnitPath);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(3000);  
      }
      catch (e){continue;}  
    }
     
  }  
}



function deleteOrgSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var orgUnitPath = d[x][3];
      var me = 'ID';
      var org = AdminDirectory.Orgunits.remove(me, orgUnitPath);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(3000);  
      }
      catch (e){continue;}  
    }
     
  }  
}

