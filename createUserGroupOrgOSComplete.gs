

function allSCH(){
//SHEETTEMPLATE();  
//createUserSCH(); 
//listUsersSCH();  
//updateUserSCH();
//changeUserOrgSCH();  
//updateUserPassSCH(); 
//addGroupMemberSCH();
//removeGroupMemberSCH();  
//suspendUserSCH();  
//createGroupSCH();
//listGroupSCH(); 
//listUsersInGroupSCH();  
//editGroupConfigSCH();
//editGroupInfoSCH();
//deleteGroupSCH();  
//createOrgSCH();
//listOrgSCH();  
//editOrgSCH();
//deleteOrgSCH();
//listChromeOsSCH();
//moveChromeOsSCH();  
//editChromeOsSCH();  
//suspendChromeOsSCH();
}



function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('Scripts');
s.addItem('TEMPLATE', 'SHEETTEMPLATE').addToUi();  
s.addItem('CREATE USER', 'createUserSCH').addToUi(); 
s.addItem('LIST USERS', 'listUsersSCH').addToUi();  
s.addItem('UPDATE USER', 'updateUserSCH').addToUi();
s.addItem('CHANGE USER ORG', 'changeUserOrgSCH').addToUi();  
s.addItem('CHANGE USER PASS', 'updateUserPassSCH').addToUi();
s.addItem('ADD USER GROUP', 'addGroupMemberSCH').addToUi();
s.addItem('REMOVE USER GROUP', 'removeGroupMemberSCH').addToUi();  
s.addItem('SUSPEND USER', 'suspendUserSCH').addToUi();
s.addItem('CREATE GROUP', 'createGroupSCH').addToUi();
s.addItem('LIST GROUPS', 'listGroupSCH').addToUi();
s.addItem('LIST USERS GROUPS', 'listUsersInGroupSCH').addToUi();  
s.addItem('EDIT GROUP CONFIG', 'editGroupConfigSCH').addToUi();
s.addItem('EDIT GROUP INFO', 'editGroupInfoSCH').addToUi();
s.addItem('DELETE GROUP','deleteGroupSCH').addToUi();  
s.addItem('CREATE ORG', 'createOrgSCH').addToUi();
s.addItem('LIST ORGS', 'listOrgSCH').addToUi();  
s.addItem('EDIT ORG', 'editOrgSCH').addToUi();
s.addItem('DELETE ORG', 'deleteOrgSCH').addToUi(); 
s.addItem('LIST CHROMEOS', 'listChromeOsSCH').addToUi();
s.addItem('MOVE CHROMEOS', 'moveChromeOsSCH').addToUi();  
s.addItem('EDIT CHROMEOS', 'editChromeOsSCH').addToUi();
s.addItem('SUSPEND CHROMEOS', 'suspendChromeOsSCH').addToUi();
}



function createUserSCH() {
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
        
      var userEmail = d[x][0];
      var groupKey = d[x][9];
      var resource = {email: userEmail, role: 'MEMBER'};
      var gr = AdminDirectory.Members.insert(resource, groupKey);  
        
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(1000);
      }
      catch (e){continue;}
    }
     
  }  
}



function listUsersSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
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
        var id  =ur.id;
        arr.push([email,first,last,pass,pass2,gl,org,sus,id]); 
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
      includeInGlobalAddressList: d[x][5]};
      var org = AdminDirectory.Users.update(resource, user);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
      Utilities.sleep(1000);
        }
      catch (e){continue;}
    }
     
  }  
}



function changeUserOrgSCH() {
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



function addGroupMemberSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x; 
  
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{ 
    var userEmail = d[x][0];
    var groupKey = d[x][9];
    var resource = {email: userEmail, role: 'MEMBER'};
    var gr = AdminDirectory.Members.insert(resource, groupKey);
    var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');
    Utilities.sleep(1000); 
      }
      catch (e){continue;}
      
    }
  }
}



function removeGroupMemberSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x; 
  
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{ 
    var userEmail = d[x][0];
    var groupKey = d[x][9];
    var resource = {email: userEmail, role: 'MEMBER'};
    var gr = AdminDirectory.Members.remove(groupKey, userEmail);
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
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  var pageToken = null, grs = [];
 
  do{
    var gr = AdminDirectory.Groups.list({domain: 'SCH.edu.mx', pageToken: pageToken, pageSize:100});
    pageToken = gr.nextPageToken;
    grs = grs.concat(gr.groups);  
  } while(pageToken);
  
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
      


function listUsersInGroupSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){
    var l = 1 + x;
    var colors = s.getRange(l,1).getBackground();
  if (colors !== '#d0e0e3') {
      try{
        var s1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('USERSINGROUPS');
        var pageToken;
        var gr = AdminDirectory.Members.list(d[x][0], {domain: 'SCH.edu.mx', maxResults: 500, pageToken: pageToken});
        var grs = gr.members; 
        var arr = [];
        for (i = 0; i < grs.length; i++) {
          var or = grs[i]; 
          var email = or.email;
          arr.push([email]); 
        }
        s1.getRange(2, d[x][4], arr.length, arr[0].length).setValues(arr);  
      }
    catch (e){continue;} 
  }
var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3');                     
 }
}



function editGroupConfigSCH(){
  
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{
        var groupId = d[x][0]; // This is ONLY the email username, NOT the ID.
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
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ORGS');
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
        var path = or.orgUnitPath;
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


// There might be a bug or change here. Do not put the / for root at the beginning of the path to delete.

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



function listChromeOsSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CHROMEOS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  var pageToken;
 var me = 'ID';
  
  var pageToken = null, orgs = [];
   do{
    var org = AdminDirectory.Chromeosdevices.list(me,{domain: 'SCH.edu.mx', pageToken: pageToken, pageSize:100});
    pageToken = org.nextPageToken;
    orgs = orgs.concat(org.chromeosdevices);  
  } while (pageToken);

  var arr = [];
      for (i = 0; i < orgs.length; i++) {
        var or = orgs[i]; 
        var ids = or.deviceId;
        var ser = or.serialNumber;
        var user = or.annotatedUser;
        var mac = or.macAddress;
        var mod = or.model;
        var path = or.orgUnitPath;
        var note = or.notes;
        var stat = or.status;
        var ver = or.osVersion;
        var use = or.recentUsers;
        
        arr.push([ids,ser,user,mac,mod,path,note,stat,ver,use]); 
      }
      s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);  
}




function moveChromeOsSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CHROMEOS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var cb = {deviceIds: [d[x][0]]};  
      var orgUnitPath = d[x][5];
      var me = 'ID';
      var org = AdminDirectory.Chromeosdevices.moveDevicesToOu(cb, me, orgUnitPath);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000);  
      }
      catch (e){continue;}  
    }
     
  }  
}



function editChromeOsSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CHROMEOS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var resource = {annotatedUser: d[x][2], notes: d[x][6], orgUnitPath: d[x][5]} 
      var me = 'ID';
      var deviceId = d[x][0];
      var org = AdminDirectory.Chromeosdevices.update(resource, me, deviceId);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000);  
      }
      catch (e){continue;}  
    }
     
  }  
}



function suspendChromeOsSCH() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CHROMEOS');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  
  for (x=1; x<nr; x++){
    var l = 1 + x;  
   
    if (s.getRange(l,1).getBackground() !== '#d0e0e3') {
      try{  
      var resource = {action: d[x][7],deprovisionReason: d[x][10]} 
      // action can take: "deprovision","disable","reenable". deprovisionReason can take "different_model_replacement","retiring_device","same_model_replacement"
      // You can comment out deprovisionReason if you are only going to use action.
      var me = 'ID';
      var deviceId = d[x][0];   
      var org = AdminDirectory.Chromeosdevices.action(resource, me, deviceId);
      var color = s.getRange(l,1,1,s.getLastColumn()).setBackground('#d0e0e3'); 
      Utilities.sleep(2000);  
      }
      catch (e){continue;}  
    }
     
  }  
}






function SHEETTEMPLATE() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getActiveSheet().setName('USERS');
  spreadsheet.insertSheet(1);
  spreadsheet.getActiveSheet().setName('GROUPS');
  spreadsheet.insertSheet(2);
  spreadsheet.getActiveSheet().setName('USERSINGROUPS');
  spreadsheet.insertSheet(3);
  spreadsheet.getActiveSheet().setName('ORGS');
  spreadsheet.insertSheet(4);
  spreadsheet.getActiveSheet().setName('CHROMEOS');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('USERS'), true);
  spreadsheet.getRange('K:K').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('GROUPS'), true);
  spreadsheet.getRange('F:F').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('ORGS'), true);
  spreadsheet.getRange('E:E').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  var nextSheetIndex = spreadsheet.getActiveSheet().getIndex() + 1;
  if (nextSheetIndex > spreadsheet.getSheets().length) { nextSheetIndex = 1; }
  spreadsheet.setActiveSheet(spreadsheet.getSheets()[nextSheetIndex - 1], true);
  spreadsheet.getRange('L:L').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setHorizontalAlignment('center')
  .setBackground('#00ffff');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('ORGS'), true);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setHorizontalAlignment('center')
  .setBackground('#00ffff');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('USERSINGROUPS'), true);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setBackground('#00ffff')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('GROUPS'), true);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setBackground('#00ffff')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('USERS'), true);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setBackground('#00ffff')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('EMAIL');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('FIRST');
  spreadsheet.getRange('C1').activate();
  spreadsheet.getCurrentCell().setValue('LAST');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('PASS');
  spreadsheet.getRange('E1').activate();
  spreadsheet.getCurrentCell().setValue('CHANGE PASS');
  spreadsheet.getRange('F1').activate();
  spreadsheet.getCurrentCell().setValue('GLOBAL ADDRESS');
  spreadsheet.getRange('G1').activate();
  spreadsheet.getCurrentCell().setValue('ORG');
  spreadsheet.getRange('H1').activate();
  spreadsheet.getCurrentCell().setValue('SUSPEND');
  spreadsheet.getRange('I1').activate();
  spreadsheet.getCurrentCell().setValue('ID');
  spreadsheet.getRange('J1').activate();
  spreadsheet.getCurrentCell().setValue('GROUP');
  spreadsheet.getRange('A:A').activate();
  spreadsheet.getActiveSheet().setColumnWidth(1, 320);
  spreadsheet.getRange('B:C').activate();
  spreadsheet.getActiveSheet().setColumnWidths(2, 2, 200);
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getActiveSheet().setColumnWidth(4, 200);
  spreadsheet.getActiveSheet().autoResizeColumns(5, 1);
  spreadsheet.getActiveSheet().autoResizeColumns(6, 1);
  spreadsheet.getRange('G:G').activate();
  spreadsheet.getActiveSheet().setColumnWidth(7, 200);
  spreadsheet.getRange('I:I').activate();
  spreadsheet.getActiveSheet().setColumnWidth(9, 200);
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getActiveSheet().setColumnWidth(10, 300);
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('GROUPS'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('EMAIL');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('DESCIPTION')
  .setValue('NAME');
  spreadsheet.getRange('C1').activate();
  spreadsheet.getCurrentCell().setValue('DESCRIPTIN')
  .setValue('DESCRIPTION');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('ID');
  spreadsheet.getRange('E1').activate();
  spreadsheet.getCurrentCell().setValue('C');
  spreadsheet.getRange('E2').activate();
  spreadsheet.getCurrentCell().setValue('1');
  spreadsheet.getRange('E3').activate();
  spreadsheet.getCurrentCell().setValue('2');
  spreadsheet.getRange('E4').activate();
  spreadsheet.getCurrentCell().setValue('3');
  spreadsheet.getRange('E5').activate();
  spreadsheet.getCurrentCell().setValue('4');
  spreadsheet.getRange('E6').activate();
  spreadsheet.getCurrentCell().setValue('5');
  spreadsheet.getRange('E7').activate();
  spreadsheet.getCurrentCell().setValue('6');
  spreadsheet.getRange('E8').activate();
  spreadsheet.getCurrentCell().setValue('7');
  spreadsheet.getRange('E9').activate();
  spreadsheet.getCurrentCell().setValue('8');
  spreadsheet.getRange('E10').activate();
  spreadsheet.getCurrentCell().setValue('9');
  spreadsheet.getRange('E2:E10').activate();
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('E2:E1000'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('E2:E1000').activate();
  spreadsheet.getActiveSheet().autoResizeColumns(5, 1);
  spreadsheet.getRange('E:E').activate();
  spreadsheet.getActiveSheet().hideColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getRange('A:C').activate();
  spreadsheet.getActiveSheet().setColumnWidths(1, 3, 320);
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getActiveSheet().setColumnWidth(4, 200);
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('USERSINGROUPS'), true);
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 26);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 26).activate();
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 52);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 52).activate();
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 104);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 104).activate();
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 208);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 208).activate();
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 416);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 416).activate();
  spreadsheet.getRange('AEZ:AEZ').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.PREVIOUS).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getRange('AAG:AEZ').activate();
  spreadsheet.setCurrentCell(spreadsheet.getRange('AEZ1'));
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 124);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 124).activate();
  spreadsheet.getRange('AJT:AJT').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.PREVIOUS).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getRange('K10').activate();
  spreadsheet.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.NEXT).activate();
  spreadsheet.getRange('AIM:AJT').activate();
  spreadsheet.setCurrentCell(spreadsheet.getRange('AJT1'));
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 34);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 34).activate();
  spreadsheet.getRange('ALB:ALB').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.PREVIOUS).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getRange('K7').activate();
  spreadsheet.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.NEXT).activate();
  spreadsheet.getRange('AKS:ALB').activate();
  spreadsheet.setCurrentCell(spreadsheet.getRange('ALB1'));
  spreadsheet.getActiveSheet().insertColumnsAfter(spreadsheet.getActiveRange().getLastColumn(), 10);
  spreadsheet.getActiveRange().offset(0, spreadsheet.getActiveRange().getNumColumns(), spreadsheet.getActiveRange().getNumRows(), 10).activate();
  spreadsheet.getCurrentCell().getNextDataCell(SpreadsheetApp.Direction.PREVIOUS).activate();
  spreadsheet.getCurrentCell().setFormula('=TRANSPOSE(GROUPS!A2:A1000)');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('ORGS'), true);
  spreadsheet.getRange('D:D').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getCurrentCell().setValue('NAME');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('DESCRIPTION');
  spreadsheet.getRange('C1').activate();
  spreadsheet.getCurrentCell().setValue('PATH');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('ID');
  spreadsheet.getRange('A:D').activate();
  spreadsheet.getActiveSheet().setColumnWidths(1, 4, 320);
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('CHROMEOS'), true);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('DEVICE');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('SERIAL');
  spreadsheet.getRange('C1').activate();
  spreadsheet.getCurrentCell().setValue('USER');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('MAC');
  spreadsheet.getRange('E1').activate();
  spreadsheet.getCurrentCell().setValue('MODEL');
  spreadsheet.getRange('F1').activate();
  spreadsheet.getCurrentCell().setValue('PATH');
  spreadsheet.getRange('G1').activate();
  spreadsheet.getCurrentCell().setValue('NOTES');
  spreadsheet.getRange('H1').activate();
  spreadsheet.getCurrentCell().setValue('STATUS');
  spreadsheet.getRange('I1').activate();
  spreadsheet.getCurrentCell().setValue('OS');
  spreadsheet.getRange('J1').activate();
  spreadsheet.getCurrentCell().setValue('RECENT USERS');
  spreadsheet.getRange('K1').activate();
  spreadsheet.getCurrentCell().setValue('REASON');
  spreadsheet.getRange('F:G').activate();
  spreadsheet.getActiveSheet().setColumnWidths(6, 2, 320);
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getActiveSheet().setColumnWidth(10, 320);
  spreadsheet.getRange('C:C').activate();
  spreadsheet.getActiveSheet().setColumnWidth(3, 320);
  spreadsheet.getRange('A:A').activate();
  spreadsheet.getActiveSheet().setColumnWidth(1, 200);
  spreadsheet.getRange('C14').activate();
};

