


var i1 = 'ID';
var d1 = 'sch.edu.mx';
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
    sendFactura(m,email);
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
    addStudentsProfs(i1,d1);
  }
  
  else if (sp2[0] === 'ds'){
    deleteStudents(i1);
  }
  
  else if (sp2[0] === 'la'){
    listAssign(i1);
  }
  
  else if (sp2[0] === 'lu'){
    listUsers(i1,d1);
  }
  
  else if (sp2[0] === 'cu'){
    createUsers(i1);
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
    var use = sp2[1];
    var pass = sp2[2];
    changeUserPassChat(use,pass);
  }
  
  else if (sp2[0] === 'sust'){
  var use = sp2[1];
  suspendUsersChat(i1,use);
  }
  
  else if (sp2[0] === 'susf'){
    var use = sp2[1];
    unsuspendUsersChat(use);
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
 
  
// Be careful of the letters. If two commands start with the same letters, it will take the shorter one (if one is 'lc', and another 'lcb', it will run the first.
  else if (m.indexOf('cs') > -1){
   return {"text": " ac = archive classes  \n asp = add students and professors  \n cal = create event from description \n cbl = list cb  \n cc = create course  \n cdes = create event from info \n ceg = edit groups  \n cg = create group  \n co = create orgs  \n cu = create users  \n dc = delete classes  \n dd = delete data  \n dg = delete groups  \n ds = delete students \n ecb = edit cb \n eg = edit group info  \n email = send email with subject and text \n eo = edit orgs  \n fac = send factura  \n la = list assignments  \n lc = list courses  \n lg = list groups  \n lo = list orgs  \n lu = list users  \n mcb = move cb \n mmg = move user to another group  \n od = delete orgs  \n pu = change password user in chat  \n sd = sort data  \n sru = suspend user  \n suff = unsuspend user in chat \n sust = suspend user in chat  \n upc = change user password"}; 
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


function changeUserPassChat(user,num) {
  var pass = em.slice(0,num) + "12345";
  var resource = {password: pass, changePasswordAtNextLogin: true};
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

//   var t = "fac_CUMBRES_20.45_ADF-FYG:1,FYG-ADP:2,ASDD-SD:4_a3wrwefqw3wese";

function sendFactura(s2,email,m){  
var shurl = s2.getSheetByName('Pre Factura');
var sheet = s2.getSheetByName('Factura');

var em = email;   
var sp = m.split('_');
var co = sp[1];
var cl = sp[2];
var ca = sp[3];
var re = sp[4];
  
shurl.getRange('B3').setValue(co);
shurl.getRange('E7').setValue(cl);
shurl.getRange('C37').setValue(re);
  
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
  s.getRange(lr,1).setValue(arr1[i][0]);
  s.getRange(lr,3).setValue(arr1[i][1]);  
  } else {continue;}     
}
   
var rows = shurl.getDataRange();
var numRows = rows.getNumRows() - 1;
var values = rows.getValues();
sheet.getRange(2,3).setValue(values[1][2]);
var i;
var o;
  
  for(i=3; i<14; i++){
    for(o=0;o<5;o++){
      sheet.getRange(i+1,o+1).setValue(values[i][o]);
    }
  } 

  for(i=14; i< 39; i++){
    for(o=0;o<4;o++){
      sheet.getRange(i+1,o+1).setValue(values[i][o]);
    }
  } 
  
 var destFolder = DriveApp.getFolderById("ID");
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
  
var s33 = s3.getSheets()[0];
arr2 = [];  
var date = new Date();    
var link = s.getRange('E2').getValue();
arr2.push([date,em,link]);
var lr = s33.getLastRow();
var a1 = s33.getRange(lr+1,1,arr2.length,arr2[0].length).setValues(arr2);    
}


function sortEntrances() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('A:C');
  s.sort(1);
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
      else if (i == 'c' && sh.getRange(l,3,1,1).getBackground() !== "#ea9999" && sh.getRange(l,4,1,1).getBackground() !== "#ea9999" && sh.getRange(l,5,1,1).getBackground() !== "#ea9999") {
      var course = Classroom.newCourse();
        course.name = d[x][2];
        course.section = d[x][3];
        course.room = d[x][4];
        course.courseState = 'ACTIVE';
        course.ownerId = 'me';
        course = Classroom.Courses.create(course);
        var c = course.id;
        var id = sh.getRange(l, 2).setValue(c);
        }
    }
}



function addStudentsProfs(i1,d1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CL'); var r = sh.getDataRange();
var n = r.getNumRows(); var d = r.getValues();
    for (x = 0; x < n; x++) { var i = d[x][0]; var l = 1 + x;
    if (i == '') {continue;} else if (i == 'c'){
    var arr1 =[]; var arr2 = [];
      
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
        else if (i == 'a') {
            try {
                var course = Classroom.Courses.get(d[x][1]);
                course.courseState = 'ARCHIVED';
                Classroom.Courses.update(course, d[x][1]);
                var end = sh.getRange(l, 1).setValue('');
                var end = sh.getRange(l, 6).setValue('ARCHIVED');
            } catch (e) {continue;}
        }}}


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
            } catch (e) {continue;}
        }}}



function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
Utilities.sleep(1000);});  }



function deleteStudents(i1) {
var s1 = SpreadsheetApp.openById(i1);
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
  }
}



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
      var or = {name: d[x][1], description: d[x][2], 
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
      var gr = {email: d[x][2], name: d[x][1], description: d[x][4]};
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
      var gr = {email: d[x][2], name: d[x][1], description: d[x][4]};
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
      group.showInGroupDirectory = false;
      group.allowGoogleCommunication = false;
      group.membersCanPostAsTheGroup = false;
      group.includeInGlobalAddressList = false;
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
var l = 1 + x; if (i === 'mc') {
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
var l = 1 + x; if (i === 'ec') {
  try {
    var resource = {annotatedUser: d[x][3], notes: d[x][7], orgUnitPath: d[x][6]};
    var deviceId = d[x][1];
    var org = AdminDirectory.Chromeosdevices.update(resource, a1, deviceId);
    var end = sh.getRange(l, 1).setValue('');
    Utilities.sleep(1000);
  } catch (e){continue;}
}}}
  



/* the laa function and the listAssignments function must be put in the spreadsheet itself where you list the assignments for this to work, 
it will not run here. For this to work you must put an importrange function in the sheet that imports itself (the ID of the importrange
is just the same spreadsheet, but another cell), you can use the CACHE sheet that you might have to use for going over six minutes.
It is the only way to have a trigger so that this can work. No other trigger works. The importrange triggers the "on change" trigger that you add
to the sheet.
*/

function laa(){
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CACHE');
var r = sh.getRange('C1').getValue();  
if(r === 'la'){listAssignments();}
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
  for (r=0; r < arr3.length; r++){ var eu = arr3[r];
  var us = AdminDirectory.Users.get(eu).primaryEmail;
  arr5.push([us]);
  }
  sh.getRange(2, 2, arr5.length, arr5[0].length).setValues(arr5);
  sh.getRange(2, 3, arr2.length, arr2[0].length).setValues(arr2);
  s1.getSheetName('CACHE').getRange('B1').setValue('');  
}


// You need to add this to the appscript.json file, remember to activate all APIs in the GCP beforehand.
// Review the example Google gives if you need to start from zero. https://codelabs.developers.google.com/codelabs/chat-apps-script/#0


{
  "timeZone": "America/Mexico_City",
  "dependencies": {
    "enabledAdvancedServices": [{
      "userSymbol": "Plus",
      "serviceId": "plus",
      "version": "v1"
    }, {
      "userSymbol": "Classroom",
      "serviceId": "classroom",
      "version": "v1"
    }, {
      "userSymbol": "AdminGroupsMigration",
      "serviceId": "groupsmigration",
      "version": "v1"
    }, {
      "userSymbol": "Drive",
      "serviceId": "drive",
      "version": "v2"
    }, {
      "userSymbol": "Slides",
      "serviceId": "slides",
      "version": "v1"
    }, {
      "userSymbol": "AdminDirectory",
      "serviceId": "admin",
      "version": "directory_v1"
    }, {
      "userSymbol": "AdminReports",
      "serviceId": "admin",
      "version": "reports_v1"
    }, {
      "userSymbol": "Gmail",
      "serviceId": "gmail",
      "version": "v1"
    }, {
      "userSymbol": "Sheets",
      "serviceId": "sheets",
      "version": "v4"
    }, {
      "userSymbol": "Calendar",
      "serviceId": "calendar",
      "version": "v3"
    }, {
      "userSymbol": "AdminGroupsSettings",
      "serviceId": "groupssettings",
      "version": "v1"
    }]
  },
  "exceptionLogging": "STACKDRIVER",
  "chat": {
  }
}
