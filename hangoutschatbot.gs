// image of Jeeves the name of the bot https://i.imgur.com/jnPGigk.png

var i1 = 'ID';
//var i2 = 'ID';
var d1 = 'domain';
var a1 = 'ID';


function onAddToSpace(e) {
var mes = "Added and ready to serve."; 
return {"text": mes};  
} 
    
/* I had to change the indexOf to === because it was grabbing parts of other words and activating other functions. 
IndexOf is very good if you are going to have a conversation with the bot, but if you are only giving it commands, it is useless.
*/

function onMessage(e) {
var m = e.message.text;
var sp1 = m.split('_');
var sp2 = m.split(' ');
var email = e.user.email; 
  
  if (sp1[0] === 'cal') {  
    var r = sp1[1];
    bcal(r);  
  } 
  
 else if (sp1[0] === 'cdes'){
    var r = sp1[1];
    var s = sp1[2];
    var f = sp1[3];
    var d = sp1[4];
    var g = sp1[5];
    bcaldes(r,s,f,d,g);
  }
  
 else if (sp1[0] === 'email'){
    var em = sp1[1];
    var su = sp1[2];
    var me = sp1[3];
   sendMessage(em,su,me); 
  }
  
  else if (sp1[0] === 'fac'){
    var co = sp1[1];
    var ca = sp1[2];
    var re = sp1[3];
    sendFactura(i2,email,co,ca,re);
  }
  
  else if (sp2[0] === 'dd'){
    var em = sp2[1];
    deleteData(i1,em);
  }
  
  else if (sp2[0] === 'sd'){
    var em = sp2[1];
    var so = sp2[2];
    sortData(i1,em,so);
  }
  
  else if (sp2[0] === 'cc'){
    createCourse(i1,d1);
  }
  
  else if (sp2[0] === 'lc'){
    listCourses(i1);
  }
  
  else if (sp2[0] === 'ac'){
    archiveClass(i1);
  }
  
  else if (sp2[0] === 'dc'){
    deleteCourses(i1);
  }
  
  else if (sp2[0] === 'asp'){
    addStPro(i1);
  }
  
  else if (sp2[0] === 'ds'){
    delStu(i1);
  }
  
  else if (sp2[0] === 'la'){
    listAssign(i1);
  }
  
  else if (sp2[0] === 'lu'){
    listUsers(i1,d1);
  }
  
  else if (sp2[0] === 'cu'){
    creUse(i1);
  }
  
  else if (sp2[0] === 'mmg'){
    moveGroupMembers(i1);
  }
  
  else if (sp2[0] === 'upc'){
    changeUserPass(i1);
  }
  
  else if (sp2[0] === 'sru'){
    suspendUsers(i1);
  }
  
  else if (sp2[0] === 'pu'){
    var user = sp2[1];
    changeUserPassChat(user);
  }
  
  
  else if (sp2[0] === 'puf'){
    var user = sp2[1];
    var pass = sp2[2];
   changeUserPassFixedChat(user,pass);
  }
  
  
  else if (sp2[0] === 'sust'){
  var user = sp2[1];
  suspendUsersChat(user);
  }
  
  else if (sp2[0] === 'susf'){
  var user = sp2[1];
  unsuspendUsersChat(user);
  }
  
  else if (sp2[0] === 'amu'){
  var user = sp2[1];
  var gr1 = sp2[2];
  var gr2 = sp2[3];  
  addMoveUserGroup(user,gr1,gr2);
  }
  
  else if (sp2[0] === 'aru'){
  var user = sp2[1];
  var gr1 = sp2[2];  
  removeUserGroup(user,gr1);
  }
  
  else if (sp1[0] === 'uc'){
  var f1 = sp1[1];
  var l1 = sp1[2];
  var o1 = sp1[3];  
  createUserChat(i1,f1,l1,o1);
  }
   
  else if (sp2[0] === 'cbl'){
    listCb(i1,d1,a1);
  }
  
  else if (sp2[0] === 'mcb'){
    moveCb(i1,a1);
  }
  
  else if (sp2[0] === 'ecb'){
    editCb(i1,a1);
  }
  
  else if (sp2[0] === 'lo'){
    listOrgs(i1,a1);
  }
  
  else if (sp2[0] === 'co'){
    createOrgs(i1,a1);
  }
  
  else if (sp2[0] === 'eo'){
    editOrgs(i1,a1);
  }
  
  else if (sp2[0] === 'od'){
    deleteOrgs(i1,a1);
  }
  
  else if (sp2[0] === 'cg'){
    createGroups(i1);
  }
  
  else if (sp2[0] === 'lg'){
    listGroups(i1,d1);
  }
  
  else if (sp2[0] === 'ceg'){
    editGroupConfig(i1);
  }
  
  else if (sp2[0] === 'eg'){
    editGroupInfo(i1);
  }
  
  else if (sp2[0] === 'dg'){
    deleteGroups(i1);
  }
  
 else if (sp2[0] === 'ruc'){
    reports(i1);
  }
  
  else if (sp2[0] === 'lcal'){
    listCals(i1);
  }
  
  else if (sp2[0] === 'ecal'){
    editCals(i1);
  }
  
  else if (sp2[0] === 'cho'){
    changeOwner(i1);
  }
  
  else if (sp1[0] === 'cgc'){
    var na = sp1[1];
    var em = sp1[2];
   createGroupChat(i1,na,em); 
  }
  
  else if (sp1[0] === 'cegc'){
    var em = sp1[1];
   editGroupConfigChat(i1,em); 
  }
  
  else if (sp1[0] === 'ccc'){
  var na = sp1[1];
  var se = sp1[2];
  var ro = sp1[3]; 
  var pr = sp1[4];
  var gr = sp1[5];  
  createCourseChat(i1,d1,na,se,ro,pr,gr);
  }
  
  else if (sp2[0] === 'cf'){
    creForm(i1);
  }
  
  else if (sp2[0] === 'ca'){
    creAssign(i1);
  }
  
  else if (sp1[0] === 'cac'){
  var id = sp1[1];
  var te = sp1[2];
  var assignment = {state: 'PUBLISHED', text: te};
  var a = Classroom.Courses.Announcements.create(assignment, id);  
  }
  
// Be careful of the letters. If two commands start with the same letters, it will take the shorter one (if one is 'lc', and another 'lcb', it will run the first.
  else if (m.indexOf('cs') > -1){
   return {"text": " FROM CHAT \n amu = add and remove user from groups in chat \n cal = create event from description in chat \n ccc = create class add prof teachers in chat \n cdes = create event from info in chat \n cegc = edit group config in chat \n cgc = create group in chat \n email = send email with subject and text in chat \n fac = send factura in chat \n pu = change password user in chat  \n susf = unsuspend user in chat \n sust = suspend user in chat  \n uc = add user in chat \n  \n FROM SHEET \n ac = archive classes  \n asp = add students and professors  \n aru = remove user from group \n cbl = list cb  \n ca = create assignments \n cc = create courses \n ceg = edit groups config \n cf = create form \n cg = create groups \n cho = change owner \n co = create orgs  \n cac = create announcement in classroom \n cu = create users  \n dc = delete classes  \n dd = delete data  \n dg = delete groups  \n ds = remove all students from class \n ecal = edit calendars \n ecb = edit cb \n eg = edit group info  \n eo = edit orgs  \n la = list assignments  \n lc = list courses  \n lcal = lists calenadars \n lg = list groups  \n lo = list orgs  \n lu = list users  \n mcb = move cb \n mmg = move user to another group  \n od = delete orgs  \n ruc = reports \n sd = sort data  \n sru = suspend user"}; 
  }
  
return {"text": "Done."};   
}



// FUNCTIONS


function bcal(r) {
 var event = CalendarApp
 .createEventFromDescription(r);
}


function bcaldes(r,s,f,d,g){
 var event = CalendarApp.createEvent(r,
    new Date(s),
    new Date(f),
{description: d, guests:g, sendInvites: true}); 
}


function sendMessage(em,su,me){
  GmailApp.sendEmail(em,su,me);
}


function listAssign(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('la'); 
}


function addStPro(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('asp'); 
}


function delStu(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('ds'); 
}


function creUse(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('cu'); 
}


function creForm(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('cf'); 
}


function creAssign(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('ca'); 
}



function deleteData(i1,em){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName(em);  
var r = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()).setValue('');
}


function sortData(i1,em,so) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName(em);
var rr = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()); 
var int = parseInt(so, 10);  
rr.sort(int);
}


function changeUserPassChat(user) {
  var pass = user.substring(0, user.indexOf('@')) + "12345"; 
  var resource = {password: pass, changePasswordAtNextLogin: true};
  var org = AdminDirectory.Users.update(resource, user); 
}


function changeUserPassFixedChat(user,pass) { 
  var resource = {password: pass, changePasswordAtNextLogin: false};
  var org = AdminDirectory.Users.update(resource, user); 
}


function suspendUsersChat(user) {
  var resource = {suspended: true};
  var org = AdminDirectory.Users.update(resource, user);
}


function unsuspendUsersChat(user) {
  var resource = {suspended: false};
  var org = AdminDirectory.Users.update(resource, user);
}


function addMoveUserGroup(user,gr1,gr2){ 
var ad = AdminDirectory.Members;  
for (i=0; i<1; i++){ try {
  var resource = {email: user, role: 'MEMBER'};
  ad.insert(resource, gr1); ad.remove(gr2, user);
  } catch(e){continue;}  
}}


function removeUserGroup(user,gr1){ 
var ad = AdminDirectory.Members;  
for (i=0; i<1; i++){ try {
   ad.remove(gr1, user);
  } catch(e){continue;}  
}}


function createUserChat(i1,f1,l1,o1) { 
var s1 = SpreadsheetApp.openById(i1);  
var sh = s1.getSheetByName('CACHE'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();
sh.getRange('D2').setValue(f1);
sh.getRange('E2').setValue(l1);  
sh.getRange('F2').setValue(o1);  
var first = sh.getRange('D2').getValue();
var last = sh.getRange('E2').getValue(); 
var email = sh.getRange('G2').getValue();
var pass = sh.getRange('H2').getValue();
var group = sh.getRange('I2').getValue(); 
var or = sh.getRange('F2').getValue(); 
var orr = or.toUpperCase();  
var org = "/" + orr;  
 
  var user = { 
    primaryEmail: email, name: {givenName: first, familyName: last},
    password: pass, changePasswordAtNextLogin: true,
    includeInGlobalAddressList: true, orgUnitPath: org};
  var org = AdminDirectory.Users.insert(user);
       
  var userEmail = email; var groupKey = group;
       var resource = {email: userEmail, role: 'MEMBER'};
       var gr = AdminDirectory.Members.insert(resource, groupKey);      
}


function createGroupChat(i1,na,em) {
  for (i=0; i<1; i++){ try {
      var gr = {email: em, name: na, description: na};
      var gro = AdminDirectory.Groups.insert(gr);
    } catch (e){continue;}
}}


function editGroupConfigChat(i1,em) {
  for (i=0; i<1; i++){ try {
    var groupId = em; // This is ONLY the email username, NOT the ID.
    var group = AdminGroupsSettings.newGroups();
    group.whoCanAdd = 'NONE_CAN_ADD';
    group.whoCanJoin = 'INVITED_CAN_JOIN';
    group.whoCanViewMembership = 'ALL_MEMBERS_CAN_VIEW';
    group.whoCanViewGroup = 'ALL_MEMBERS_CAN_VIEW';
    group.whoCanInvite = 'ALL_MANAGERS_CAN_INVITE';
    group.allowExternalMembers = false;
    group.whoCanPostMessage = 'ALL_MEMBERS_CAN_POST';
    group.allowWebPosting = true;
    group.showInGroupDirectory = true;
    group.allowGoogleCommunication = false;
    group.membersCanPostAsTheGroup = false;
    group.includeInGlobalAddressList = true;
    group.whoCanLeaveGroup = 'NONE_CAN_LEAVE';
    AdminGroupsSettings.Groups.patch(group, groupId);
  } catch (e){continue;}
}}


function createCourseChat(i1,d1,na,se,ro,pr,gr) {
var course = Classroom.newCourse();
course.name = na; course.section = se;
course.room = ro; course.courseState = 'ACTIVE';
course.ownerId = 'me'; 
course = Classroom.Courses.create(course);
var c = course.id; var arr1 =[]; var pageToken;  
for (i=0; i<1;i++) { 
var prof1 = Classroom.Courses.Teachers.create({userId: pr}, c);
  var gr = AdminDirectory.Members.list(gr,
  {domain: d1, maxResults: 500, pageToken: pageToken});
  var grs = gr.members; 
  for (t = 0; t < grs.length; t++) {
    var or = grs[t]; var email = or.email;
    arr1.push(email);
  }
  for (k = 0; k < arr1.length; k++) {
    var list = arr1[k];
    try {Classroom.Courses.Students.create({userId: list}, c);
    } catch(e){continue;}} 
}}


function sendFactura(i2,email,co,ca,re){
// example "fac_IHI_ACS-EDU-AST:1,ACS-EDU-AST:1,ACS-EDU-AST:1_https://drive.google.com/open?id=ID";
   
var shurl = SpreadsheetApp.openById(i2).getSheetByName('Pre Factura');
var sheet = SpreadsheetApp.openById(i2).getSheetByName('Factura');
  
// co es colegio
// ca son los artículos por facturar  
// re es enlace al recibo
  
shurl.getRange('B3').setValue(co);
shurl.getRange('C37').setValue(re);
  
// esto toma ca y les pone en la hoja  
var result = [];
a = ca.split(','); 
while(a[0]) {result.push(a.splice(0,1));}
for(i=0;i<result.length;i++){
    result[i][0]=result[i][0].replace(/:/gi,","); 
  }
arr1 =[];
for(i=0;i<result.length;i++){
   b = result[i][0].split(','); arr1.push(b); 
 } 
for (i=0; i<arr1.length; i++){
  var lr = 16 + i;
  if (arr1[i][0] != '') {    
  shurl.getRange(lr,1).setValue(arr1[i][0]);
  shurl.getRange(lr,3).setValue(arr1[i][1]);  
  } else {continue;}     
}
   
// esto toma los datos de la hoja de la pre factura y les pone en la hoja de factura  
var rows = shurl.getDataRange();
var numRows = rows.getNumRows() - 1;
var values = rows.getValues();
sheet.getRange(2,3).setValue(values[1][2]);
  
var i;
var o;
  
for(i=3; i<14; i++){
 for(o=0;o<5;o++){sheet.getRange(i+1,o+1).setValue(values[i][o]);}
  } 
for(i=14; i<39; i++){
 for(o=0;o<4;o++){sheet.getRange(i+1,o+1).setValue(values[i][o]);}
  } 
  
// esto es para copiar la hoja de factura en otro documento y moverlo a una carpeta (y quitandolo del root folder) 
 var destFolder = DriveApp.getFolderById("1ySK9KC75FWQvDjl4s493BnFkHX_b2bGw");
 var numf = shurl.getRange('D1').getValue();
 var sc = SpreadsheetApp.create('Factura sin OC jjurotich '+ numf);
 var newnumf = shurl.getRange('D1').setValue(numf+1); 
 var ssid = sc.getId();
 var ssurl = sc.getUrl();
 shurl.getRange('E2').setValue(ssurl); 
 var des = SpreadsheetApp.openById(ssid);
 sheet.copyTo(des);
 var del = des.getSheetByName('Sheet1').activate(); 
 des.deleteActiveSheet();
 var sheet2 = des.getSheets()[0]; 
 sheet2.setName('Factura');  
 var sf = DriveApp.getFileById(ssid);
 DriveApp.getFolderById(destFolder.getId()).addFile(sf);
 DriveApp.getRootFolder().removeFile(sf);
  
// esto pone el enlace del documento creado en la carpeta en la hoja de respuestas del formulario   
var s33 = SpreadsheetApp.openById('1MkTOz8xLU38X2HUpeFiu6SuJGDGuP2aPgcZy1Zc-JYs').getSheets()[0]; // hoja del formulario
var so = s33.getRange('A:C');  
var arr2 = []; var date = new Date();    
arr2.push([date,email,ssurl]);
var lr = s33.getLastRow();
var a1 = s33.getRange(lr+1,1,arr2.length,arr2[0].length).setValues(arr2);
so.sort(1); // ordenar la hoja por fechas de entrega
  
}



/* DO NOT ERASE!! NOTE TO SELF: When you try and paste data in cells and have other code, 
the code that follows will continue run BEFORE it pastes the text in the cells, causing an error.
You must make the text a variable and use that for the rest of the code instead of trying to grabe
the text from the cell, because it will not be there in time to use it.
*/


function createCourse(i1) {
  var s1 = SpreadsheetApp.openById(i1);
    var sh = s1.getSheetByName('CL');
    var r = sh.getDataRange();
    var n = r.getNumRows();
    var d = r.getValues();
    for (x = 0; x < n; x++) { var i = d[x][0]; var l = 1 + x;
      if (i == '') {continue;}
      else if (sh.getRange(l,3,1,1).getBackground() === "#ea9999" || sh.getRange(l,4,1,1).getBackground() === "#ea9999" || sh.getRange(l,5,1,1).getBackground() === "#ea9999") {continue;}                        
      else if (i == 'cc' && sh.getRange(l,3,1,1).getBackground() !== "#ea9999" && sh.getRange(l,4,1,1).getBackground() !== "#ea9999" && sh.getRange(l,5,1,1).getBackground() !== "#ea9999") {
      var course = Classroom.newCourse();
        course.name = d[x][2];
        course.section = d[x][3];
        course.room = d[x][4];
        course.courseState = 'ACTIVE';
        course.ownerId = 'me';
        course = Classroom.Courses.create(course);
        var c = course.id;
        var id = sh.getRange(l, 2).setValue(c);
        var end = sh.getRange(l, 1).setValue('');
        }
    }
}


function listCourses(i1) {
  var s1 = SpreadsheetApp.openById(i1);
    var sh = s1.getSheetByName('CL');
    var response = Classroom.Courses.list();
    var courses = response.courses;
    var arr = [];
    for (i = 0; i < courses.length; i++) {
        var course = courses[i];
        var ids = course.id;
        var title = course.name;
        var sec = course.section;
        var room = course.room;
        var state = course.courseState;
        arr.push([ids, title, sec, room, state]);
    }
    sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}


function archiveClass(i1) {
  var s1 = SpreadsheetApp.openById(i1);
  var sh = s1.getSheetByName('CL');
  var r = sh.getDataRange(); var n = r.getNumRows();
  var d = r.getValues();
  for (x = 0; x < n; x++) {
    var i = d[x][0]; var l = 1 + x;
    if (i == '') {continue;}
    else if (i == 'ac') {
      try {
        var course = Classroom.Courses.get(d[x][1]);
        course.courseState = 'ARCHIVED';
        Classroom.Courses.update(course, d[x][1]);
        var end = sh.getRange(l, 1).setValue('');
        var end = sh.getRange(l, 6).setValue('ARCHIVED');
      } catch (e) {continue;} }}}


function deleteCourses(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CL');
var r = sh.getDataRange(); var n = r.getNumRows();
var d = r.getValues();
  for (x = 0; x < n; x++) {
    var i = d[x][0]; var l = 1 + x;
    if (i == '') {continue;}
    else if (i == 'dc') {
      try {
        Classroom.Courses.remove(d[x][1]);
        var end = sh.getRange(l, 1).setValue('');
        var end = sh.getRange(l, 6).setValue('DELETED');
      } catch (e) {continue;} }}}


function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
Utilities.sleep(1000);});  }


function changeOwner(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CL'); var r = sh.getDataRange();
var n = r.getNumRows(); var d = r.getValues();
for (x = 0; x < n; x++) {var i = d[x][0]; var l = 1 + x;
  if (i == '') {continue} else if (i == 'cho') {
    try {
      var course = {'ownerId': d[x][8]};
      Classroom.Courses.patch(course, d[x][1],{'updateMask': 'ownerId'});
   } catch (e){continue;} 
    var end = sh.getRange(l, 1).setValue('');
}}}


function listUsers(i1,d1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('US');
var pageToken = null, urs = []; var arr = [];
  do {
    var us = AdminDirectory.Users.list({
      domain: d1, pageToken: pageToken, pageSize: 100});
    pageToken = us.nextPageToken;
    urs = urs.concat(us.users);
  } while (pageToken);
    for (i = 0; i < urs.length; i++) {
        var ur = urs[i];
        var first = ur.name.givenName;
        var last = ur.name.familyName;
        var org = ur.orgUnitPath;
        var suspend = ur.suspended;
        var email = ur.primaryEmail;
        var pass = ur.password;
        arr.push([first,last,org,suspend,email,pass]);
    }
    sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}


function createUsers(i1,d1) {
var s1 = SpreadsheetApp.openById(i1);  
var sh = s1.getSheetByName('US'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();
sh.getRange('F1').setValue(d1);  
sh.getRange('F2').setFormula('=IF(B2<>"",LOWER(CONCATENATE(LEFT(B2,FIND(" ",B2&" ")-1),LEFT(C2,FIND(" ",C2&" ")-1),LEFT(TRIM(RIGHT(SUBSTITUTE(C2," ",REPT(" ",LEN(C2))),LEN(C2))),1),"@",$D$1)),"")');  
sh.getRange('G2').setFormula('=IF(B2<>"",LOWER(CONCATENATE(LEFT(B2,FIND(" ",B2&" ")-1),LEFT(C2,FIND(" ",C2&" ")-1),LEFT(TRIM(RIGHT(SUBSTITUTE(C2," ",REPT(" ",LEN(C2))),LEN(C2))),1),"12345")),"")');
sh.getRange('G2').setFormula('=IF(D2<>"",IF(LEN(D2)>1,CONCATENATE(SUBSTITUTE(LOWER(TRIM(RIGHT(SUBSTITUTE(TRIM(D2),"/",REPT(" ",200)),200)))," ",""),"@",$F$1),""),"")');
var fr = sh.getRange('F2:H'); sh.getRange('F2:H2').copyTo(fr);
 for (x = 1; x < nr; x++) {var i = d[x][0]; var l = 1 + x;
   if (i === 'cu') {
     try {
       var user = { 
         primaryEmail: d[x][3], name: {givenName: d[x][1], familyName: d[x][2]},
         password: d[x][4], changePasswordAtNextLogin: false,
         includeInGlobalAddressList: true, orgUnitPath: d[x][5]};
       var org = AdminDirectory.Users.insert(user);
       var userEmail = d[x][3];
       var groupKey = d[x][7];
       var resource = {email: userEmail, role: 'MEMBER'};
       var gr = AdminDirectory.Members.insert(resource, groupKey);
       var end = sh.getRange(l, 1).setValue('');
       var title = sh.getRange(1, 4).setValue('EMAIL');
       Utilities.sleep(1000);
     } catch (e){continue;}
}}}


function changeUserPass(i1) {
var s1 = SpreadsheetApp.openById(i1);  
var sh = s1.getSheetByName('US'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'upc') {
    try {
      var user = d[x][5];
      var resource = {password: d[x][6], changePasswordAtNextLogin: true};
      var org = AdminDirectory.Users.update(resource, user);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function suspendUsers(i1) {
var s1 = SpreadsheetApp.openById(i1);  
var sh = s1.getSheetByName('US'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'sru') {
    try {
      var user = d[x][5];
      var resource = {suspended: true};
      var org = AdminDirectory.Users.update(resource, user);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function moveGroupMembers(i1) {
var s1 = SpreadsheetApp.openById(i1);  
var sh = s1.getSheetByName('US'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'mmg') {
    try {
      var user = d[x][5];
      var gk1 = d[x][8];
      var resource = {email: user, role: 'MEMBER'};
      var gr = AdminDirectory.Members.insert(resource, gk1);
      var gk2 = d[x][7];
      var gr = AdminDirectory.Members.remove(gk2, user);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function createOrgs(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO');
var r = sh.getDataRange(); var d = r.getValues();
var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'co') {
    try {
      var or = {name: d[x][1], description: d[x][1], 
      parentOrgUnitPath: d[x][4], blockInheritance: false};
      var org = AdminDirectory.Orgunits.insert(or, a1);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function listOrgs(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO');
var org = AdminDirectory.Orgunits.list(a1, {orgUnitPath: '/', type: 'all'});
var orgs = org.organizationUnits; var arr = [];
  for (i = 0; i < orgs.length; i++) {
    var or = orgs[i];
    var names = or.name;
    var path = or.orgUnitPath;
    var ids = or.orgUnitId;
    var pp = or.parentOrgUnitPath;
    arr.push([names,path,ids,pp]);
  }
  sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}
  

function editOrgs(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO');
var r = sh.getDataRange(); var d = r.getValues();
var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'eo') {
    try {
      var or = {name: d[x][1], description: d[x][1], 
      parentOrgUnitPath: d[x][4], blockInheritance: false};
      var orgUnitPath = d[x][2]; //MUST DELETE FIRST DIAGONAL
      var org = AdminDirectory.Orgunits.update(or, a1, orgUnitPath);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function deleteOrgs(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO');
var r = sh.getDataRange(); var d = r.getValues();
var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'od') {
    try {
      var orgUnitPath = d[x][2]; //MUST DELETE FIRST DIAGONAL
      var org = AdminDirectory.Orgunits.remove(a1, orgUnitPath);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function createGroups(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO'); var r = sh.getDataRange();
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'cg') {
    try {
      var gr = {email: d[x][2], name: d[x][1], description: d[x][1]};
      var gro = AdminDirectory.Groups.insert(gr);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function editGroupInfo(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO'); var r = sh.getDataRange();
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'eg') {
    try {
      var groupKey = d[x][3];
      var gr = {email: d[x][2], name: d[x][1], description: d[x][1]};
      var gro = AdminDirectory.Groups.update(gr, groupKey);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
   } catch (e){continue;}
}}}


function listGroups(i1,d1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO');
var pageToken = null, grs = []; var arr = [];
  do {
    var gr = AdminDirectory.Groups.list(
     {domain: d1,pageToken: pageToken, pageSize: 100});
    pageToken = gr.nextPageToken;
    grs = grs.concat(gr.groups);
  } while (pageToken);
  for (i = 0; i < grs.length; i++) {
    var or = grs[i];
    var names = or.name;
    var email = or.email;
    var ids = or.id;
    arr.push([names,email,ids]);
  }
  sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}

  
function editGroupConfig(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO'); var r = sh.getDataRange();
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
  if (i === 'ceg') {
    try {
      var groupId = d[x][2]; // This is ONLY the email username, NOT the ID.
      var group = AdminGroupsSettings.newGroups();
      group.whoCanAdd = 'NONE_CAN_ADD';
      group.whoCanJoin = 'INVITED_CAN_JOIN';
      group.whoCanViewMembership = 'ALL_MEMBERS_CAN_VIEW';
      group.whoCanViewGroup = 'ALL_MEMBERS_CAN_VIEW';
      group.whoCanInvite = 'ALL_MANAGERS_CAN_INVITE';
      group.allowExternalMembers = false;
      group.whoCanPostMessage = 'ALL_MEMBERS_CAN_POST';
      group.allowWebPosting = true;
      group.showInGroupDirectory = true;
      group.allowGoogleCommunication = false;
      group.membersCanPostAsTheGroup = false;
      group.includeInGlobalAddressList = true;
      group.whoCanLeaveGroup = 'NONE_CAN_LEAVE';
      AdminGroupsSettings.Groups.patch(group, groupId);
      var end = sh.getRange(l, 1).setValue('');
      Utilities.sleep(1000);
    } catch (e){continue;}
}}}


function deleteGroups(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('GO'); var r = sh.getDataRange();
var d = r.getValues(); var nr = r.getNumRows();
for (x = 1; x < nr; x++) {
var i = d[x][0]; var l = 1 + x;
if (i === 'dg') {
  try {
    var groupKey = d[x][3];
    var gro = AdminDirectory.Groups.remove(groupKey);
    var end = sh.getRange(l, 1).setValue('');
    Utilities.sleep(1000);
  } catch (e){continue;}
}}}


function listCb(i1,d1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CB'); var pageToken;
var pageToken = null, orgs = []; var arr = [];
 do {
   var org = AdminDirectory.Chromeosdevices.list(a1, 
   {domain: d1,pageToken: pageToken, pageSize: 100});
   pageToken = org.nextPageToken;
   orgs = orgs.concat(org.chromeosdevices);
 } while (pageToken);
    for (i = 0; i < orgs.length; i++) {
        var or = orgs[i];
        var ids = or.deviceId;
        var ser = or.serialNumber;
        var user = or.annotatedUser;
        var mac = or.macAddress;
        var mod = or.model;
        var path = or.orgUnitPath;
        var note = or.notes;
        var ver = or.osVersion;
        var use = or.recentUsers;
        var stat = or.status;
        arr.push([ids, ser, user, mac, mod, path, note, ver, use, stat]);
    }
    sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}


function moveCb(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CB');
var r = sh.getDataRange(); var d = r.getValues();
var nr = r.getNumRows();
for (x = 1; x < nr; x++) { var i = d[x][0];
var l = 1 + x; if (i === 'mcb') {
  try {
    var cb = {deviceIds: [d[x][1]]};
    var orgUnitPath = d[x][6];
    var org = AdminDirectory.Chromeosdevices.moveDevicesToOu(cb, a1, orgUnitPath);
    var end = sh.getRange(l, 1).setValue('');
    Utilities.sleep(1000);
  } catch (e){continue;}
}}}


function editCb(i1,a1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CB');
var r = sh.getDataRange(); var d = r.getValues();
var nr = r.getNumRows();
for (x = 1; x < nr; x++) { var i = d[x][0];
var l = 1 + x; if (i === 'ecb') {
  try {
    var resource = {annotatedUser: d[x][3], notes: d[x][7], orgUnitPath: d[x][6]};
    var deviceId = d[x][1];
    var org = AdminDirectory.Chromeosdevices.update(resource, a1, deviceId);
    var end = sh.getRange(l, 1).setValue('');
    Utilities.sleep(1000);
  } catch (e){continue;}
}}}
  


function reports(i1){
generateUserUsageReport(i1);
generateCustomerUsageReport(i1);
}


function generateUserUsageReport(i1) {
  var today = new Date();
  var oneWeekAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  var timezone = Session.getScriptTimeZone();
  var date = Utilities.formatDate(oneWeekAgo, timezone, 'yyyy-MM-dd');
  var rows = []; var pageToken; var page;
  var sh = SpreadsheetApp.openById(i1).getSheetByName('RU');
  
  var parameters = [
    'accounts:is_suspended',
    'accounts:last_login_time',
    'accounts:drive_used_quota_in_mb',
    'gmail:num_emails_exchanged',
    'drive:num_items_created',
    'drive:num_google_documents_created',
    'drive:num_google_spreadsheets_created',
    'drive:num_google_presentations_created',
    'drive:num_google_forms_created',
    'classroom:role',
    'classroom:num_posts_created',
    'classroom:timestamp_last_interaction'
  ];
 
  do {
    page = AdminReports.UserUsageReport.get('all', date, {
      parameters: parameters.join(','),
      maxResults: 500, pageToken: pageToken
    });
    
    var reports = page.usageReports;
    
    if (reports) {
      for (var i = 0; i < reports.length; i++) {
        var report = reports[i];
        var parameterValues = getParameterValues(report.parameters);
        var row = [
          report.date,
          report.entity.userEmail,
          parameterValues['accounts:is_suspended'],
          parameterValues['accounts:last_login_time'],
          parameterValues['accounts:drive_used_quota_in_mb'],
          parameterValues['gmail:num_emails_exchanged'],
          parameterValues['drive:num_items_created'],
          parameterValues['drive:num_google_documents_created'],
          parameterValues['drive:num_google_spreadsheets_created'],
          parameterValues['drive:num_google_presentations_created'],
          parameterValues['drive:num_google_forms_created'],
          parameterValues['classroom:role'],
          parameterValues['classroom:num_posts_created'],
          parameterValues['classroom:timestamp_last_interaction']
        ];
        rows.push(row);
      }
    }
    pageToken = page.nextPageToken;
  } while (pageToken);

  if (rows.length > 0) {
    sh.getRange(2,1,rows.length,rows[0].length).setValues(rows);
  }
  
}


function generateCustomerUsageReport(i1) {
  var today = new Date();
  var oneWeekAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  var timezone = Session.getScriptTimeZone();
  var date = Utilities.formatDate(oneWeekAgo, timezone, 'yyyy-MM-dd');
  var rows = []; var pageToken; var page;
  var sh = SpreadsheetApp.openById(i1).getSheetByName('RC');
  
  var parameters = [
    'accounts:num_suspended_users',
    'accounts:num_30day_logins',
    'accounts:used_quota_in_mb',
    'accounts:num_users',
    'gmail:num_30day_active_users',
    'gmail:num_emails_exchanged',
    'drive:num_30day_active_users',
    'drive:num_items_created',
    'drive:num_google_documents_created',
    'drive:num_google_spreadsheets_created',
    'drive:num_google_presentations_created',
    'drive:num_google_forms_created',
    'classroom:num_30day_users',
    'classroom:num_teacher_posts_created', 
  ];
 
  do {
    page = AdminReports.CustomerUsageReports.get(date, {
      parameters: parameters.join(','),
      maxResults: 500, pageToken: pageToken
    });
    
    var reports = page.usageReports;
    
    if (reports) {
      for (var i = 0; i < reports.length; i++) {
        var report = reports[i];
        var parameterValues = getParameterValues(report.parameters);
        var row = [
          report.date,
          report.entity.userEmail,
          parameterValues['accounts:num_suspended_users'],
          parameterValues['accounts:num_30day_logins'],
          parameterValues['accounts:used_quota_in_mb'],
          parameterValues['accounts:num_users'],
          parameterValues['gmail:num_30day_active_users'],
          parameterValues['gmail:num_emails_exchanged'],
          parameterValues['drive:num_30day_active_users'],
          parameterValues['drive:num_items_created'],
          parameterValues['drive:num_google_documents_created'],
          parameterValues['drive:num_google_spreadsheets_created'], 
          parameterValues['drive:num_google_presentations_created'],
          parameterValues['drive:num_google_forms_created'],
          parameterValues['classroom:num_30day_users'],
          parameterValues['classroom:num_teacher_posts_created']
        ];
        rows.push(row);
      }
    }
    pageToken = page.nextPageToken;
  } while (pageToken);

  if (rows.length > 0) {
    sh.getRange(2,1,rows.length,rows[0].length).setValues(rows);
  }
  
}


function getParameterValues(parameters) {
  return parameters.reduce(function(result, parameter) {
    var name = parameter.name;
    var value;
    if (parameter.intValue !== undefined) {
      value = parameter.intValue;
    } else if (parameter.stringValue !== undefined) {
      value = parameter.stringValue;
    } else if (parameter.datetimeValue !== undefined) {
      value = new Date(parameter.datetimeValue);
    } else if (parameter.boolValue !== undefined) {
      value = parameter.boolValue;
    }
    result[name] = value;
    return result;
  }, {});
}


function listCals(i1) {
  var s = SpreadsheetApp.openById(i1).getSheetByName('CR');
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  var cal = CalendarApp.getAllCalendars();
  var arr = [];
  for (x=0; x<cal.length; x++){
    var l = 1 + x; var ca = cal[x];
    var id = ca.getId();
    var name = ca.getName();
    arr.push([id,name]); 
  }
  s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}


function editCals(i1) {
  var s = SpreadsheetApp.openById(i1).getSheetByName('CR');
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1 + x; var color = d[x][3];
    if(i==''){continue;} else if (i=='ecal'){ 
      var cal = CalendarApp.getCalendarById(d[x][1]); 
      var hid = cal.setHidden(true); 
      var sel = cal.setSelected(false);
//      var col = cal.setColor(color);
      var end = s.getRange(l, 1).setValue(''); 
      Utilities.sleep(2000);  
    }
  }
}


/*parameters
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-gmail
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-drive
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-classroom
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/users-accounts
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-calendar
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-classroom
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-drive
https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-gmail
*/



/* the laa function and the listAssignments function must be put in the spreadsheet itself where you list the assignments for this to work, 
it will not run here. For this to work you must put an importrange function in the sheet that imports itself (the ID of the importrange
is just the same spreadsheet, but another cell), you can use the CACHE sheet that you might have to use for going over six minutes.
It is the only way to have a trigger so that this can work. No other trigger works. The importrange triggers the "on change" trigger that you add
to the sheet.
*/

function run(){
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CACHE');
var r = sh.getRange('C1').getValue();  
if(r === 'la'){listAssignments();}
else if(r === 'asp'){addStudentsProfs();}
else if(r === 'ds'){deleteStudents();}
else if(r === 'cu'){createUsers();}
else if(r === 'ca'){addFormAssign();}
else if(r === 'cf'){createForm();}  
}


function listAssignments() {
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('LA');
var response = Classroom.Courses.list();
var courses = response.courses;
var arr1 = []; var arr2 = []; var arr3 = []; var arr4 = []; var arr5 = [];
 
  for (i = 0; i < courses.length; i++) {
    var course = courses[i];
    var ids = course.id;
    var title = course.name;
    var state = course.courseState;
    arr1.push([ids,title,state]);
  }
  
 for (i = 0; i < arr1.length; i++) {
   if (arr1[i][2] !== 'ARCHIVED'){
     var list = arr1[i][0];
     var page = null, t = [];
     do {
       var tea = Classroom.Courses.CourseWork.list(list, {pageToken: page, pageSize: 100});
       page = tea.nextPageToken; var t = t.concat(tea.courseWork);
     } while (page);
     try {
            for (q = 0; q < t.length; q++) {
                var c = t[q];
                var name = arr1[i][1];
                var ti = c.title;
                var des = c.description;
                var st = c.state;
                var link = c.alternateLink;
                var typ = c.workType;
                var poi = c.maxPoints;
                var create = c.creationTime;
                var due = c.dueDate;
                var duet = c.dueTime;
                var cour = c.courseId;
                var ids = c.id;
                var user = c.creatorUserId;
                arr2.push([name,ti,des,st,link,typ,poi,create,due,duet,cour,ids]); 
                arr3.push(user);
            }
        } catch (e) {continue;}  
     }
  }
  for (r=0; r < arr3.length; r++){ 
    try {  
  var eu = arr3[r];
  var us = AdminDirectory.Users.get(eu).primaryEmail;
  arr5.push([us]);
    }catch(e){continue;}
  }
  sh.getRange(2, 2, arr5.length, arr5[0].length).setValues(arr5);
  sh.getRange(2, 3, arr2.length, arr2[0].length).setValues(arr2);
  s1.getSheetByName('CACHE').getRange('B1').setValue('');  
}


function addStudentsProfs(){
var d1 = 'jjir.me';  
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CL'); var r = sh.getDataRange();
var n = r.getNumRows(); var d = r.getValues();
    for (x = 0; x < n; x++) { var i = d[x][0]; var l = 1 + x;
    if (i == '') {continue;} else if (i == 'asp'){
    var arr1 =[]; var arr2 = [];
// You must always put coor group and a student group. The professor is optional.      
      var pageToken;
      var gr = AdminDirectory.Members.list(d[x][6],
       {domain: d1, maxResults: 500, pageToken: pageToken});
      var grs = gr.members; 
      for (t = 0; t < grs.length; t++) {
        var or = grs[t];
        var email = or.email;
        arr1.push(email);
      }
      
      var pageToken2;
      var gr2 = AdminDirectory.Members.list(d[x][7],
       {domain: d1, maxResults: 500, pageToken: pageToken2});
      var grs2 = gr2.members; 
      for (q = 0; q < grs2.length; q++) {
        var or2 = grs2[q];
        var email2 = or2.email;
        arr2.push(email2);
      }
      
      for (k = 0; k < arr1.length; k++) {
        var list = arr1[k];
        try {
          Classroom.Courses.Teachers.create({userId: list}, d[x][1]);
        } catch(e){continue;}
      } 
      
      for (m = 0; m < arr2.length; m++) {
        var list2 = arr2[m];
        try{
          Classroom.Courses.Students.create({userId: list2}, d[x][1]);
        } catch(e){continue;}
      } 
      
      try {
        var prof1 = Classroom.Courses.Teachers.create({userId: d[x][8]}, d[x][1]);
      } catch(e){continue;} 
      
    var end = sh.getRange(l, 1).setValue('');
    Utilities.sleep(1000);  
    } 
  }
 s1.getSheetByName('CACHE').getRange('B1').setValue('');  
}


function deleteStudents() {
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CL'); var r = sh.getDataRange();
var n = r.getNumRows(); var d = r.getValues();
for (x = 0; x < n; x++) {var i = d[x][0]; var l = 1 + x;
  if (i == '') {continue} else if (i == 'ds') {
    
    var page = null; var t = [];var arr = [];
    do {
      var tea = Classroom.Courses.Students.list(d[x][1], {pageToken: page, pageSize: 100});
      page = tea.nextPageToken; t = t.concat(tea.students);
      } while (page);
    try {
      for (i = 0; i < t.length; i++) {
        var c = t[i]; var ids = c.profile;
        var em = ids.emailAddress;
        arr.push(em);
      }
    } catch (e){continue;}
    for (k = 0; k < arr.length; k++) {
      var list = arr[k];
        try { Classroom.Courses.Students.remove(d[x][1], list);
        } catch (e){continue;} 
    }  
  }                    
 var end = sh.getRange(l, 1).setValue('');
 Utilities.sleep(1000);
  }
s1.getSheetByName('CACHE').getRange('B1').setValue('');  
}


function createUsers() {
var d1 = 'jjir.me';     
var s1 = SpreadsheetApp.getActiveSpreadsheet();  
var sh = s1.getSheetByName('US'); 
sh.getRange('F2').setFormula('=IF($B2<>"",LOWER(CONCATENATE(LEFT($B2,FIND(" ",B2&" ")-1),LEFT($C2,FIND(" ",$C2&" ")-1),LEFT(TRIM(RIGHT(SUBSTITUTE($C2," ",REPT(" ",LEN($C2))),LEN($C2))),1),"@",CACHE!$D$1)),"")');  
sh.getRange('G2').setFormula('=IF($B2<>"",LOWER(CONCATENATE(LEFT($B2,FIND(" ",B2&" ")-1),LEFT($C2,FIND(" ",$C2&" ")-1),LEFT(TRIM(RIGHT(SUBSTITUTE($C2," ",REPT(" ",LEN($C2))),LEN($C2))),1),"12345")),"")');
sh.getRange('H2').setFormula('=IF($D2<>"",IF(LEN($D2)>1,CONCATENATE(SUBSTITUTE(LOWER(TRIM(RIGHT(SUBSTITUTE(TRIM($D2),"/",REPT(" ",200)),200)))," ",""),"@",CACHE!$D$1),""),"")');
var fr = sh.getRange('F2:H'); sh.getRange('F2:H2').copyTo(fr);  
var s1 = SpreadsheetApp.getActiveSpreadsheet();  
var sh = s1.getSheetByName('US'); var r = sh.getDataRange();  
var d = r.getValues(); var nr = r.getNumRows();  
 for (x = 1; x < nr; x++) {var i = d[x][0]; var l = 1 + x;
   if (i === 'cu') {
     try {
       var user = { 
         primaryEmail: d[x][5], name: {givenName: d[x][1], familyName: d[x][2]},
         password: d[x][6], changePasswordAtNextLogin: false,
         includeInGlobalAddressList: true, orgUnitPath: d[x][3]};
       var org = AdminDirectory.Users.insert(user);
       var userEmail = d[x][5];
       var groupKey = d[x][7];
       var resource = {email: userEmail, role: 'MEMBER'};
       var gr = AdminDirectory.Members.insert(resource, groupKey);
       var end = sh.getRange(l, 1).setValue('');
       Utilities.sleep(1000);
     } catch (e){continue;}
}}
s1.getSheetByName('CACHE').getRange('B1').setValue('');  
}


function addFormAssign(){
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CA');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
var t = sh.getRange('A1').getValue();
for (x=0; x<n; x++) {
 var l = 1 + x; var i=d[x][0];
 if(i==''){continue;}
    
 else if (i=='an'){
 var date =  new Date(d[x][3]);
 var isoDate = new Date(date.getTime() - (60*60*24*t*1000) ).toISOString();
 var year = date.getFullYear(); var mon = date.getMonth()+1;
 var day = date.getDate(); var hour = date.getHours();
 var min = date.getMinutes(); var sec = date.getSeconds(); 
   var assignment = { 
     state: 'PUBLISHED', text: d[x][1], 
     materials: [{ driveFile: { driveFile: { id: d[x][7], title: d[x][1] }, shareMode: d[x][8] } }]
   };
   var a = Classroom.Courses.Announcements.create(assignment, d[x][5]); 
 }
  // STUDENT_COPY: to use this you must change the sharing options in the template to whomever has access can edit before running this.
 else if (i=='lk'){
 var date =  new Date(d[x][3]);
 var isoDate = new Date(date.getTime() - (60*60*24*t*1000) ).toISOString();
 var year = date.getFullYear(); var mon = date.getMonth()+1;
 var day = date.getDate(); var hour = date.getHours();
 var min = date.getMinutes(); var sec = date.getSeconds();   
   if (t !== ''){
     var assignment = {
        workType: 'ASSIGNMENT', state: 'DRAFT', title: d[x][1], description: d[x][2],
        materials: [{link:{url: d[x][7], title: d[x][1]}}],
        maxPoints: d[x][4], scheduledTime: isoDate, 
        dueDate: { year: year, month: mon, day: day},
        dueTime: { hours: hour, minutes: min, seconds: sec},
     };
   } else {
   var assignment = {
        workType: 'ASSIGNMENT', state: 'PUBLISHED', title: d[x][1], description: d[x][2],
        materials: [{link:{url: d[x][7], title: d[x][1]}}],
        maxPoints: d[x][4], 
        dueDate: { year: year, month: mon, day: day},
        dueTime: { hours: hour, minutes: min, seconds: sec},
     };   
   }
 var a = Classroom.Courses.CourseWork.create(assignment, d[x][5]);
 var c = a.id; var id = sh.getRange(l,7).setValue(c);    
 } 
  
 else if (i=='dc'){
 var date =  new Date(d[x][3]);
 var isoDate = new Date(date.getTime() - (60*60*24*t*1000) ).toISOString();
 var year = date.getFullYear(); var mon = date.getMonth()+1;
 var day = date.getDate(); var hour = date.getHours();
 var min = date.getMinutes(); var sec = date.getSeconds();   
   if (t !== ''){
     var assignment = {
        workType: 'ASSIGNMENT', state: 'DRAFT', title: d[x][1], description: d[x][2],
        materials: [{ driveFile: { driveFile: { id: d[x][7], title: d[x][1] }, shareMode: d[x][8] } }],
        maxPoints: d[x][4], scheduledTime: isoDate, 
        dueDate: { year: year, month: mon, day: day},
        dueTime: { hours: hour, minutes: min, seconds: sec},
     };
   } else {
   var assignment = {
        workType: 'ASSIGNMENT', state: 'PUBLISHED', title: d[x][1], description: d[x][2],
        materials: [{ driveFile: { driveFile: { id: d[x][7], title: d[x][1] }, shareMode: d[x][8] } }],
        maxPoints: d[x][4], 
        dueDate: { year: year, month: mon, day: day},
        dueTime: { hours: hour, minutes: min, seconds: sec},
     };   
   }
 var a = Classroom.Courses.CourseWork.create(assignment, d[x][5]);
 var c = a.id; var id = sh.getRange(l,7).setValue(c);    
 } 
  
  sh.getRange(l,1).setValue('');
  Utilities.sleep(1000); 
  }
 s1.getSheetByName('CACHE').getRange('B1').setValue('');  
}


function createForm() {
var s1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CF');
var r = s1.getDataRange();
var nr = r.getNumRows();
var nc = r.getNumColumns();
var lr = s1.getLastRow();
var lc = s1.getLastColumn();
var d = r.getValues();
var fol = DriveApp.getFolderById(d[0][3]);

if (d[0][7] === 'YES') {
var fm = DriveApp.getFileById(d[0][9]).makeCopy(d[0][1], fol);
var id = fm.getId();
var f = FormApp.openById(id);
  
} else {
var fm = FormApp.create(d[0][1]);
var id = fm.getId();
var f = FormApp.openById(id);
}

f.setDescription(d[1][1]);
f.setIsQuiz(true);  

var ur = f.getPublishedUrl();
s1.getRange('F1').setValue(ur);


var file = DriveApp.getFileById(id);
fol.addFile(file);
DriveApp.getRootFolder().removeFile(file);
  

for(var x=0;x<nr;x++){ // Beginning of for loop with x
  var i = d[x][0];
  var cr = 1 + x;
  var ro = s1.getRange(cr, 8, 1, 10);
  var op = ro.getValues();
    if(i==''){continue;}

    else if (i =='CHOICE') {
        var arr = [];
        
        if (d[0][11] == "YES"){ var its = f.getItems();
          for (var w = 0; w < its.length; w += 1){ var ite = its[w]; if (ite.getTitle() === "CHOICE"){ var q = ite.asMultipleChoiceItem().duplicate(); }}
        } else { var q = f.addMultipleChoiceItem(); }
        
        q.setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
        
        for (var ccc = 8; ccc<nc; ccc++) {
          var cu = 1 + ccc;
          if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() === "#00ff00") {var q1 = q.createChoice(d[x][ccc], true); arr.push(q1);} 
          else if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() !== "#00ff00") {var q1 = q.createChoice(d[x][ccc], false); arr.push(q1);}
        }
        
        q.setChoices(arr);
        
        if (d[x][4] !== ""){
          var correctFeedback = FormApp.createFeedback().setText(d[x][4]).build();
          q.setFeedbackForCorrect(correctFeedback);
        }
        if (d[x][5] !== ""){
          var incorrectFeedback = FormApp.createFeedback().setText(d[x][5]).addLink(d[x][6],d[x][7]).build();
          q.setFeedbackForIncorrect(incorrectFeedback);
        } 
    }
    
    else if (i =='LIST') {
        var arr = [];
        
        if (d[0][11] == "YES"){ var its = f.getItems();
          for (var w = 0; w < its.length; w += 1){ var ite = its[w]; if (ite.getTitle() === "LIST"){ var q = ite.asListItem().duplicate(); }}
        } else { var q = f.addListItem(); }
        
        q.setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
  
        for (var ccc = 8; ccc<nc; ccc++) {
          var cu = 1 + ccc;
          if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() === "#00ff00") {var q1 = q.createChoice(d[x][ccc], true); arr.push(q1);} 
          else if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() !== "#00ff00") {var q1 = q.createChoice(d[x][ccc], false); arr.push(q1);}
        }
        
        q.setChoices(arr);
        
        if (d[x][4] !== ""){
          var correctFeedback = FormApp.createFeedback().setText(d[x][4]).build();
          q.setFeedbackForCorrect(correctFeedback);
        }
        if (d[x][5] !== ""){
          var incorrectFeedback = FormApp.createFeedback().setText(d[x][5]).addLink(d[x][6],d[x][7]).build();
          q.setFeedbackForIncorrect(incorrectFeedback);
        } 
    }
  
    else if (i =='CHECKBOX') {
        var arr = [];
        
        if (d[0][11] == "YES"){ var its = f.getItems();
          for (var w = 0; w < its.length; w += 1){ var ite = its[w]; if (ite.getTitle() === "CHECKBOX"){ var q = ite.asCheckboxItem().duplicate(); }}
        } else { var q = f.addCheckboxItem(); }
        
        q.setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
       
       if (d[x][3] !== '') {q.setPoints(d[x][3])}
        
        for (var ccc = 8; ccc<nc; ccc++) {
          var cu = 1 + ccc;
          if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() === "#00ff00") {var q1 = q.createChoice(d[x][ccc], true); arr.push(q1);} 
          else if (s1.getRange(cr,cu,1,1).getValue() !== '' && s1.getRange(cr,cu,1,1).getBackground() !== "#00ff00") {var q1 = q.createChoice(d[x][ccc], false); arr.push(q1);}
        }
        
        q.setChoices(arr);
        
        if (d[x][4] !== ""){
          var correctFeedback = FormApp.createFeedback().setText(d[x][4]).build();
          q.setFeedbackForCorrect(correctFeedback);
        }
        if (d[x][5] !== ""){
          var incorrectFeedback = FormApp.createFeedback().setText(d[x][5]).addLink(d[x][6],d[x][7]).build();
          q.setFeedbackForIncorrect(incorrectFeedback);
        } 
    }
    
    else if (i =='GRID') {
        var arr1 = []; 
        for (q=0; q<op[0].length; q++){ 
          if (op[0][q] !== '') {arr1.push(op[0][q]);} 
        }
        var arr2 = []; 
        for (q=0; q<op[0].length; q++){ 
          if (op[0][q] !== '') {arr2.push(op[0][q]);} 
        }
        f.addGridItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true).setRows(arr1).setColumns(arr2);
    }
    
    else if (i =='CHECKGRID') {
        var arr1 = []; 
        for (q=0; q<op[0].length; q++){ 
          if (op[0][q] !== '') {arr1.push(op[0][q]);} 
        }
        var arr2 = []; 
        for (q=0; q<op[0].length; q++){ 
          if (op[0][q] !== '') {arr2.push(op[0][q]);} 
        }
        f.addCheckboxGridItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true).setRows(arr1).setColumns(arr2);
    }
    
    else if (i =='TEXT') {
        var q = f.addTextItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
    }
    
    else if (i =='PARAGRAPH') {
        var q = f.addParagraphTextItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
    }
      
    else if (i =='SECTION') {
        f.addSectionHeaderItem().setTitle(d[x][1]).setHelpText(d[x][2]);
    }
    
    else if (i =='PAGE') {
        f.addPageBreakItem().setTitle(d[x][1]).setHelpText(d[x][2]);
    }
    
    else if (i =='IMAGE1') {
        var img = UrlFetchApp.fetch(d[x][6]); 
        f.addImageItem().setTitle(d[x][1]).setHelpText(d[x][2]).setImage(img).setAlignment(FormApp.Alignment.CENTER).setWidth(800);
    }
        
    else if (i =='IMAGE2') {
        var file = DriveApp.getFileById(d[x][6]);
        f.addImageItem().setTitle(d[x][1]).setHelpText(d[x][2]).setImage(file).setAlignment(FormApp.Alignment.CENTER).setWidth(800);
    }
    
    else if (i =='VIDEO') {
        f.addVideoItem().setTitle(d[x][1]).setHelpText(d[x][2]).setVideoUrl(d[x][6]).setAlignment(FormApp.Alignment.CENTER).setWidth(800);
    }
         
    else if (i =='SCALE') {
        var q = f.addScaleItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true).setLabels(d[x][6], d[x][7]).setBounds(d[x][4], d[x][5]);
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
    } 
    
    else if (i =='TIME') {
        var q = f.addTimeItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
    }
   
    else if (i =='DATE') {
        var q = f.addDateItem().setTitle(d[x][1]).setHelpText(d[x][2]).setRequired(true);
        if (d[x][3] !== '') {q.setPoints(d[x][3])}
    }
    
    else if(i =='ACCEPTANCE'){
        var item = f.addMultipleChoiceItem();
        var goSubmit = item.createChoice('YES', FormApp.PageNavigationType.SUBMIT);
        var goRestart = item.createChoice('NO', FormApp.PageNavigationType.RESTART);     
          item.setRequired(true);
          item.setTitle(d[x][1]);
          item.setHelpText(d[x][2]);
          item.setChoices([goSubmit,goRestart]);   
    } 
   
 } // End of principle for loop with x
 
    var iti = f.getItems();
      for (var y = 0; y < iti.length; y += 1){
        var ito = iti[y];
        if (ito.getTitle() === "CHOICE"){ f.deleteItem(ito); } 
        else if (ito.getTitle() === "LIST"){ f.deleteItem(ito); } 
        else if (ito.getTitle() === "CHECKBOX"){ f.deleteItem(ito); }
      }

SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CACHE').getRange('B1').setValue('');   
  
} // End of entire scipt
