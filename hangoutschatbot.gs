


var i1 = '1XoqxwdCf8O0EXTX6_h4W9tnOMcq2AYTmVOfTk_kiFgE';
var d1 = 'oyg.edu.mx';
//var i2 = 'ID';
//var i3 = 'ID';


function onAddToSpace(e) {
var mes = "Added and ready to serve."; 
return {"text": mes};  
} 
    
function onMessage(e) {
var m = e.message.text;
var email = e.user.email;  
  if (m.indexOf('cal') > -1) {  
    var sp = m.split('_');
    var r = sp[1];
    bcal(r);  
  } 
 else if (m.indexOf('cdes') > -1){
    var sp = m.split('_');
    var r = sp[1];
    var s = sp[2];
    var f = sp[3];
    var d = sp[4];
    var g = sp[5];
    bcaldes(r,s,f,d,g);
  }
 else if (m.indexOf('email') > -1){
    var sp = m.split('_');
    var em = sp[1];
    var su = sp[2];
    var me = sp[3];
   sendMessage(em,su,me); 
  }
  else if (m.indexOf('fac') > -1){
    sendFactura(m,email);
  }
  else if (m.indexOf('cc') > -1){
    createCourse(i1,d1);
  }
  else if (m.indexOf('lc') > -1){
    listCourses(i1);
  }
  else if (m.indexOf('ac') > -1){
    archiveClass(i1);
  }
  else if (m.indexOf('dc') > -1){
    deleteCourses(i1);
  }
  else if (m.indexOf('dd') > -1){
    var sp = m.split(' ');
    var em = sp[1];
    deleteData(i1,em);
  }
  else if (m.indexOf('asp') > -1){
    addStudentsProfs(i1,d1);
  }
  else if (m.indexOf('ds') > -1){
    deleteStudents(i1);
  }
  else if (m.indexOf('la') > -1){
    listAssign(i1);

  }
  
  
  else if (m.indexOf('codes') > -1){
   return {"text": "la = list assignments \nasp = add students and professors \ndc = delete classes \ndd = delete data \nfac = send factura \ncc = create course \nlc = list courses \nac = archive classes \nds = delete students"}; 
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
  GmailApp.sendEmail(em, su, me);
}


function listAssign(i1){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CACHE');
sh.getRange('B1').setValue('la'); 
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
    var sh = s1.getSheetByName('CLASS');
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
var sh = s1.getSheetByName('CLASS'); var r = sh.getDataRange();
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
    var sh = s1.getSheetByName('CLASS');
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
    var sh = s1.getSheetByName('CLASS');
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
    var sh = s1.getSheetByName('CLASS');
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


function deleteData(i1,em){
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName(em);  
var r = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()).setValue('');
}


function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
Utilities.sleep(1000);});  }



function deleteStudents(i1) {
var s1 = SpreadsheetApp.openById(i1);
var sh = s1.getSheetByName('CLASS'); var r = sh.getDataRange();
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
