

function RUN() {
//  createCoursesOYG();
//  updateDataOYG();
//  changeStateOYG();
//  deleteCoursesOYG();
//  addStudentsTeachersOYG();
//  deleteStudentsOYG();
//  deleteTeachersOYG();
//  addAssignmentsOYG();
//  deleteAssignmentsOYG();
//  listCoursesOYG();
//  listAssignmentsOYG();
//  listAllAssignmentsOYG();
//  changeOwnerOYG();
//  listStudentsOYG();
//  listProfesOYG();
//  trigcloseFormsOYG();
//  copyFormsOver6OYG();
//  addAssignmentsOver6OYG();
//  copySynopsisOYG();
//  createClassesOver6OYG();
//  deleteStudentsOver6OYG();
//  putFormGradeOYG();
//  putFormGradeOYG();
//  pullGradesOYG();
//  changeOwnerOver6OYG();
//  studentsOver6OYG();
//  addTeachersOverSixOYG();
  
}


function onOpen() {
  var s = SpreadsheetApp.getUi().createMenu('Scripts');
  s.addItem('CREATE COURSE', 'createCoursesOYG').addToUi();
  s.addItem('UPDATE', 'updateDataOYG').addToUi();
  s.addItem('STATE', 'changeStateOYG').addToUi();
  s.addItem('DELETE COURSE', 'deleteCoursesOYG').addToUi();
  s.addItem('ADD ST/TE', 'addStudentsTeachersOYG').addToUi();
  s.addItem('DELETE STUDENTS', 'deleteStudentsOYG').addToUi();
  s.addItem('DELETE TEACHERS', 'deleteTeachersOYG').addToUi();
  s.addItem('ADD ASSIGNMENTS', 'addAssignmentsOYG').addToUi();
  s.addItem('DELETE ASSIGNMENTS', 'deleteAssignmentsOYG').addToUi();
  s.addItem('LIST COURSES', 'listCoursesOYG').addToUi();
  s.addItem('LIST ASSIGNMENTS', 'listAssignmentsOYG').addToUi();
  s.addItem('LIST ALL ASSIGNMENTS', 'listAllAssignmentsOYG').addToUi();
  s.addItem('CHANGE OWNER', 'changeOwnerOYG').addToUi();
  s.addItem('LIST STUDENTS', 'listStudentsOYG').addToUi();
  s.addItem('LIST PROFES', 'listProfesOYG').addToUi();
  s.addItem('SCHEDULE CLOSE FORMS', 'trigcloseFormsOYG').addToUi();
  s.addItem('COPY FORMS O6', 'copyFormsOver6OYG').addToUi();
  s.addItem('ADD PROGRAM ASSIGNMENTS O6', 'addAssignmentsOver6OYG').addToUi();
  s.addItem('COPY SYNOPSIS', 'copySynopsisOYG').addToUi();
  s.addItem('CREATE COURSES O6', 'createClassesOver6OYG').addToUi();
  s.addItem('DELETE STUDENTS O6', 'deleteStudentsOver6OYG').addToUi();
  s.addItem('GRADES FORMS TO CLASSROOM', 'putFormGradeOYG').addToUi();
  s.addItem('GRADES CLASSROOM TO SHEETS', 'pullGradesOYG').addToUi();
  s.addItem('CHANGE OWNER O6', 'changeOwnerOver6OYG').addToUi();
  s.addItem('ADD STUDENTS O6', 'studentsOver6OYG').addToUi();
  s.addItem('ADD STUDENTS O6', 'addTeachersOverSixOYG').addToUi();
}


function createCoursesOYG() { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x;

if(i==''){continue;} else if (i=='D'){  
  
  var course;
  course = Classroom.newCourse();
  
  course.name = d[x][1];
  course.section = d[x][2];
  course.room = d[x][3];
  course.descriptionHeading = d[x][4];
  course.description = d[x][5];
  course.ownerId = d[x][6];
  course.courseState = d[x][7];
  
  course = Classroom.Courses.create(course);
  var c = course.id;
  var id = sh.getRange(d[x][12]).setValue(c);
  
  var end = sh.getRange(l, 1).setValue('');  
  var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3'); 
  
}}}



function updateDataOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){   
 
 var course = Classroom.Courses.get(d[x][8]);
  course.name = d[x][1];
  course.section = d[x][2];
  course.room = d[x][3];
  course.descriptionHeading = d[x][4];
  course.description = d[x][5];
 Classroom.Courses.update(course, d[x][8]);
 
 var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3'); 
  
}}}



function changeStateOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){   
  try {
 var course = Classroom.Courses.get(d[x][8]);
 course.courseState = d[x][7];
 Classroom.Courses.update(course, d[x][8]);
 
 var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
  }
  catch (e){continue;}
  
}}}
  


function deleteCoursesOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;}  
else if (i=='D'){  
  
Classroom.Courses.remove(d[x][8]); 

var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
  
}}}



function addStudentsTeachersOYG() { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('STUDENTS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){  
    try {  
    Classroom.Courses.Students.create({userId: list,}, d[x][8]);  
    }
    catch (e){continue;} 
    }       
  }

 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('TEACHERS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][11] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    try {   
    Classroom.Courses.Teachers.create({userId: list,}, d[x][8]);
    }
    catch (e){continue;}
    }
  } 
 
 
}
 var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                    
 }}



function deleteStudentsOYG() { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('STUDENTS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
     try {  
    Classroom.Courses.Students.remove(d[x][8], list);
     }
      catch (e){continue;}
    }
  }
 
}
 var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                 
}}





function deleteTeachersOYG() { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('TEACHERS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
     try {  
    Classroom.Courses.Teachers.remove(d[x][8], list);
     }
      catch (e){continue;}
    }
  }
  
}
 var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                   
 }}



function addAssignmentsOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} 
                     
                     
else if (i=='DD'){  
  
  var assignment = {
    workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    materials: [{
      driveFile: {
        driveFile: {
          id: d[x][8], 
          title: d[x][10]
        }, 
        shareMode: d[x][9]
      }
    }],
    maxPoints: d[x][11],
    scheduledTime: d[x][14], 
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
  
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);  
  
}
                    
 else if (i=='LD'){  
  
  var assignment = {
     workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    materials: [{
       link:{
          url: d[x][8],
          title: d[x][10]
        },
    }],
    maxPoints: d[x][11],
    scheduledTime: d[x][14], 
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
   
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
}

                     
else if (i=='QD'){  
  
  var assignment = {
     workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    maxPoints: d[x][11],
    scheduledTime: d[x][14], 
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
   
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
} 
                     
 else if (i=='AD'){  
  
  var assignment = {
    state: d[x][5],
    text: d[x][7],
    scheduledTime: d[x][14], 
  };
   
var a = Classroom.Courses.Announcements.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
} 
                     
else if (i=='DP'){  
  
  var assignment = {
    workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    materials: [{
      driveFile: {
        driveFile: {
          id: d[x][8], 
          title: d[x][10]
        }, 
        shareMode: d[x][9]
      }
    }],
    maxPoints: d[x][11],
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
  
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);  
  
}
                    
 else if (i=='LP'){  
  
  var assignment = {
     workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    materials: [{
       link:{
          url: d[x][8],
          title: d[x][10]
        },
    }],
    maxPoints: d[x][11],
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
   
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
}

else if (i=='QP'){  
  
  var assignment = {
     workType: d[x][4],
    state: d[x][5],
    title: d[x][6],
    description: d[x][7],
    maxPoints: d[x][11], 
    dueDate: {
        year: d[x][15],
        month: d[x][16],
        day: d[x][17],  
    },
    dueTime: {
      hours: d[x][18], 
      minutes: d[x][19],
      seconds: d[x][20],
    }, 
  };
   
var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
} 
                     
 else if (i=='AP'){  
  
  var assignment = {
    state: d[x][5],
    text: d[x][7],
  };
   
var a = Classroom.Courses.Announcements.create(assignment, d[x][1]);
var c = a.id;
var id = sh.getRange(d[x][3]).setValue(c);   
}                      
  
   
}
var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
}



function deleteAssignmentsOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; 
var l = 1+x;
if(i==''){continue;} 
                     
else if (i=='D'){
Classroom.Courses.CourseWork.remove(d[x][1], d[x][2]);
}
else if (i=='L'){
Classroom.Courses.CourseWork.remove(d[x][1], d[x][2]);
} 
 
}
var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
}





function listCoursesOYG() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('LISTS');
  var response = Classroom.Courses.list();
  
  
  var courses = response.courses;
 
  var arr=[];
  for (i = 0; i < courses.length; i++) {
    var course = courses[i];
    var ids = course.id;
    var title = course.name;
    var sec = course.section;
    var state = course.courseState;  
    arr.push([ids,title,sec,state]);
  }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);   
}



function listAssignmentsOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
                     
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('TAREAS');
  var class = Classroom.Courses.CourseWork.list(d[x][8]);
  var w = class.courseWork;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    var ids = c.id;
    var type = c.workType;
    var ti = c.title;
    var des = c.description;
    var st = c.state;
    var sch = c.scheduledTime;
    var due = c.dueDate;
    arr.push([ids,type,ti,des,st,sch,due]); 
  }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);   

}}}



function listAllAssignmentsOYG() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('TAREAS');  
  var response = Classroom.Courses.list();
  var courses = response.courses;
  var arr =[];
  for (i = 0; i < courses.length; i++) {
    var course = courses[i];
    var id = course.id;
    var class = Classroom.Courses.CourseWork.list(id);
    var w = class.courseWork;
        for (k = 0; k < w.length; k++) {
          var c = w[k]; 
          var ids = c.id;
          var user = c.creatorUserId;
          var type = c.workType;
          var ti = c.title;
          var des = c.description;
          var st = c.state;
          var sch = c.scheduledTime;
          var due = c.dueDate;
          arr.push([ids,user,type,ti,des,st,sch,due]);
          }
    }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr); 
}
   


function changeOwnerOYG() { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('TEACHERS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][11] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    try {
    var course = { 'ownerId': list };
    Classroom.Courses.patch(course, d[x][8], {'updateMask':'ownerId'});   
    }
    catch (e){continue;}
    }
  } 
 
}
var end = sh.getRange(l, 1).setValue('');  
 var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                    
}}





function listStudentsOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh2 = ss.getSheetByName('LISTSTUDENTS');
  
  var page = null, t = [];
  do{
  var tea = Classroom.Courses.Students.list(d[x][8], {pageToken: page, pageSize:100});
  page = tea.nextPageToken;
  t = t.concat(tea.students);  
  } while(page);
 
  var arr=[];
  
  try {
  for (i = 0; i < t.length; i++) {
    var c = t[i];
    
    var ids = c.profile;
    var em = ids.emailAddress;
   
    arr.push([em]);   
  }
  }
      catch (e){continue;} 
  
sh2.getRange(d[x][14], d[x][15], arr.length, arr[0].length).setValues(arr);
  
 
}
var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                     
}}







function listProfesOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 

if(i==''){continue;} else if (i=='D'){
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh2 = ss.getSheetByName('LISTPROFES');
  
  var page = null, t = [];
  do{
  var tea = Classroom.Courses.Teachers.list(d[x][8], {pageToken: page, pageSize:100});
  page = tea.nextPageToken;
  t = t.concat(tea.teachers);  
  } while(page);
 
  var arr=[];
  
  try {
  for (i = 0; i < t.length; i++) {
    var c = t[i];
    
    var ids = c.profile;
    var em = ids.emailAddress;
   
    arr.push([em]);   
  }
  }
      catch (e){continue;} 
  
sh2.getRange(d[x][14], d[x][15], arr.length, arr[0].length).setValues(arr);


  
}
var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
                     
}}



function trigcloseFormsOYG() {
ScriptApp.newTrigger('trigforms').timeBased().atHour(7).nearMinute(1).onWeekDay(ScriptApp.WeekDay.SUNDAY).create();
}


function trigforms() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
  
if (new Date (d[x][13]) == new Date()+1){  
deleteTriggers_();   
var dt = new Date (d[x][12]); 
ScriptApp.newTrigger('blForms').timeBased().at(dt).create();
}
}}}


function blForms() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
try{
var form = FormApp.openById(d[x][21]).setAcceptingResponses(false);
}
catch (e) {continue;}
}}}


function deleteTriggers_() {  
  var triggers = ScriptApp.getProjectTriggers();  
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}



function copyFormsOver6OYG(){
createTrigger_("copyFormsOverSixOYG",10);
addStudentsOverSix();
}


function copyFormsOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 






    var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PROGRAM');
    var fol = DriveApp.getFolderById('1zu19EXV43_n2UDFA30i8RXxT-PF70Byv');
    var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
    
    for (x=0; x<n; x++) { 
    var l = 1 + x;
    var i = d[x][0]; var o=x+1; if (i=='') {continue;} else if (i=='D') {
        
        
        var fo = DriveApp.getFileById(d[x][6]).makeCopy(d[x][5],fol).getId();
        var f = FormApp.openById(fo);
        var arr = [];
          arr.push([f.getId(), f.getEditUrl(), f.getPublishedUrl()]);
          s.getRange(o, 8, arr.length, arr[0].length).setValues(arr);
          
        }
        s.getRange(l,1).setValue('');
        s.getRange(l, 1,1,s.getLastColumn()).setBackground('#d0e0e3'); 

      }
    




elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();
  Drive.Files.emptyTrash();
} 




function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}



function copySynopsisOYG() {
var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SYNTEMPLATE');
var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var fol = DriveApp.getFolderById(d[1][2]);
  for (x=1; x<n; x++){
  var l = 1 + x;

    if (s.getRange(l,1).getBackground() !== '#bad1d1'){
    var doc = DriveApp.getFileById(d[1][3]).makeCopy(d[x][0], fol).getId();
    var sy = SpreadsheetApp.openById(doc);
    var ti = sy.getSheetByName('EXERCISES').getRange('C1').setValue(d[x][1]);
    var c = s.getRange(l,1, 1, s.getLastColumn()).setBackground('#bad1d1');
    }
    
  }
}




// Here is where I will put the scripts that take a long time.


function createClassesOver6OYG(){
createTrigger_("createClassesOverSixOYG",10);
noaddStudentsOverSix();
}


function createClassesOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 
  
  
  
// Here is where you put the script that you need to repeat.
  


var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; 
var l = 1+x;

if(i==''){continue;} else if (i=='D'){  
  
  var course;
  course = Classroom.newCourse();
  
  course.name = d[x][1];
  course.section = d[x][2];
  course.room = d[x][3];
  course.descriptionHeading = d[x][4];
  course.description = d[x][5];
  course.ownerId = d[x][6];
  course.courseState = d[x][7];
  
  course = Classroom.Courses.create(course);
  var c = course.id;
  var id = sh.getRange(d[x][12]).setValue(c);
  
   
  var end = sh.getRange(l, 1).setValue('');  
  var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3'); 

}}



   
// This is where the script that you need repeated ends.  
  
  
elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();     
} 




// These two functions are necessary for going over six minutes, they can be used for anything that needs to be extended.

function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}



function addAssignmentsOver6OYG(){
createTrigger_("addAssignmentsOverSix",10);
addStudentsOverSix();
}


function addAssignmentsOverSix(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 







var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('PROGRAM');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {
var l = 1 + x; 
var i=d[x][0]; if(i==''){continue;} 
   
  else if (i=='DD'){  
    var assignment = {
      workType: d[x][13], state: d[x][14], title: d[x][16],description: d[x][17],
      materials: [{ driveFile: { driveFile: { id: d[x][9], title: d[x][19] }, shareMode: d[x][18] } }],
      maxPoints: d[x][20], scheduledTime: d[x][23], 
        dueDate: { year: d[x][24], month: d[x][25], day: d[x][26]},
        dueTime: { hours: d[x][27],minutes: d[x][28], seconds: d[x][29]} 
    };
    var a = Classroom.Courses.CourseWork.create(assignment, d[x][10]);
    var c = a.id;
    var id = sh.getRange(d[x][11]).setValue(c);   
  }
                    
  else if (i=='LD'){  
    var assignment = {
      workType: d[x][13], state: d[x][14], title: d[x][16],description: d[x][17],
      materials: [{ link:{ url: d[x][9], title: d[x][19] } }],
      maxPoints: d[x][20], scheduledTime: d[x][23], 
        dueDate: { year: d[x][24], month: d[x][25], day: d[x][26]},
        dueTime: { hours: d[x][27],minutes: d[x][28], seconds: d[x][29]}  
    };
    var a = Classroom.Courses.CourseWork.create(assignment, d[x][10]);
    var c = a.id;
    var id = sh.getRange(d[x][11]).setValue(c);   
  }                                                          
 s.getRange(l,1).setValue('');
 s.getRange(l, 1,1,s.getLastColumn()).setBackground('#d0e0e3');
 }






elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();
  Drive.Files.emptyTrash();
} 






function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}



// Here is where I will put the scripts that take a long time.


function deleteStudentsOver6OYG(){
createTrigger_("deleteStudentOverSixOYG",10);
noaddStudentsOverSix();
}


function deleteStudentOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 
  
  
  
// Here is where you put the script that you need to repeat.
  
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; 
var l = 1+x;
if(i==''){continue;}  

else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('STUDENT');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){  
    try {  
    Classroom.Courses.Students.remove(d[x][8], list);
     
    }
    catch (e){continue;} 
    }       
  }
  
  
}
var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                    
}
   
// This is where the script that you need repeated ends.  
  
  
elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();     
} 








// These two functions are necessary for going over six minutes, they can be used for anything that needs to be extended.

function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}




function putFormGradeOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){  
  
  var form = FormApp.openById(d[x][21]);
  
  
  var formResponses = form.getResponses();
  
  if(formResponses.length !== 0) { 
  var todo = [];
  var output = [];
  
  for(var i = 0; i < formResponses.length ; i++){
  var itemResponses = formResponses[i].getGradableItemResponses();
  var email = formResponses[i].getRespondentEmail(); 
 
  var scores = [];
  for(var j = 0; j < itemResponses.length; j++){
    var score = itemResponses[j].getScore();
    scores.push(score);
    }
      
  var sum = scores.reduce(function(a, b) { return a + b; });
  var avg = Number((sum / scores.length / 2 * 1.43).toFixed(1)); 
  
  
  
  
try {    
var courseId = d[x][1];
var courseWorkId = d[x][2];

var studentSubmissions = Classroom.Courses.CourseWork.StudentSubmissions.list(courseId, courseWorkId,{'userId': email});

var id = studentSubmissions['studentSubmissions'][0].id;

var studentSubmission = {'assignedGrade': avg, 'draftGrade': avg}
Classroom.Courses.CourseWork.StudentSubmissions.patch(studentSubmission,courseId,courseWorkId,id,{'updateMask':'assignedGrade,draftGrade'});
  }
  catch (e) {continue;}
  
  }
  
}}}}



function pullGradesOYG(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('GRADESLEO');
  var courseId = 8322717457;
  var st = Classroom.Courses.Students.list(courseId);
  var w = st.students;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    var id = c.userId;
    var us = c.profile;
    var gr = us.emailAddress;
    var email = {'userId': gr}
    arr.push([gr]);  
  }  
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);
  gradesOYG();
}


function gradesOYG() {
 var courseId = 8322717457;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 
 var sh2 = ss.getSheetByName('TT');
    var lr2 = sh2.getLastRow();
    var a2 = sh2.getRange(1, 1,  + lr2).getValues();
       
 var sh = ss.getSheetByName('GRADESLEO');
    var lr = sh.getLastRow();
    var a = sh.getRange(1, 1,  + lr).getValues(); 
    var arr2=[];
  
 for (var p = 0; p < a2.length; p++) {
    var courseWorkId = a2[p]; 
  
  for (k=0; k<a.length; k++){
     var list = a[k]; 
    var assign = Classroom.Courses.CourseWork.StudentSubmissions.list(courseId, courseWorkId, {'userId': list}); 
    var x = assign.studentSubmissions;
       for (j = 0; j < x.length; j++) {
        var d = x[j];
        var su = d.assignedGrade;
        arr2.push([su]); 
        }
    }
  
  
  for (var m in arr2) {
        if (arr2[m] == '') { arr2[m] = [0]; } 
  }
 
  sh.getRange(1, sh.getLastColumn()+1, arr2.length, arr2[0].length).setValues(arr2);

  arr2=[];
}
}



function changeOwnerOver6OYG(){
createTrigger_("changeOwnerOverSixOYG",10);
changeOwner();
}


function changeOwnerOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;


var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0];
var l = 1+x;

if(i==''){continue;} else if (i=='D'){  
     
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('TEACHERS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][11] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    try {
    var course = { 'ownerId': list };
    Classroom.Courses.patch(course, d[x][8], {'updateMask':'ownerId'});   
    }
    catch (e){continue;}
    }
    }
    
  
}
var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');
 }

elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      

  deleteTriggers_();  

}






function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}



function listAssignments() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
                     
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('TAREAS');
  var class = Classroom.Courses.CourseWork.list(d[x][8]);
  var w = class.courseWork;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    var ids = c.id;
    var type = c.workType;
    var ti = c.title;
    var des = c.description;
    var st = c.state;
    var sch = c.scheduledTime;
    var due = c.dueDate;
    arr.push([ids,type,ti,des,st,sch,due]); 
  }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);   

}}}




function listAllAssignments() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('TAREAS');  
  var response = Classroom.Courses.list();
  var courses = response.courses;
  var arr =[];
  for (i = 0; i < courses.length; i++) {
    var course = courses[i];
    var id = course.id;
    var class = Classroom.Courses.CourseWork.list(id);
    var w = class.courseWork;
        for (k = 0; k < w.length; k++) {
          var c = w[k]; 
          var ids = c.id;
          var user = c.creatorUserId;
          var type = c.workType;
          var ti = c.title;
          var des = c.description;
          var st = c.state;
          var sch = c.scheduledTime;
          var due = c.dueDate;
          arr.push([ids,user,type,ti,des,st,sch,due]);
          }
    }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr); 
}



function pullGrades(){

var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('GRADES');
  var courseId = 8322717457;
  var courseWorkId = 11575457496;
  var assign = Classroom.Courses.CourseWork.StudentSubmissions.list(courseId, courseWorkId);
  
  var w = assign.studentSubmissions;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    
    var us = c.userId;
    var cc = c.profile
    var gr = c.assignedGrade;
    
    
    arr.push([us,gr]); 
  }
  sh.getRange(1, 3, arr.length, arr[0].length).setValues(arr);

}




function listst(){

var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('GRADES');
  var courseId = 8322717457;
  var courseWorkId = 11575457496;
  var st = Classroom.Courses.Students.list(courseId);
  
  var w = st.students;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    
    var id = c.userId;
    var us = c.profile;
    var gr = us.emailAddress;
    
    
    arr.push([id,gr]); 
  }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);
  
  
  
  
  

}




// Here is where I will put the scripts that take a long time.


function studentsOver6OYG(){
createTrigger_("addStudentsOverSixOYG",10);
addStudentsOverSix();
}


function addStudentsOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 
  
  
  
// Here is where you put the script that you need to repeat.
  
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0];
var l = 1 + x;
if(i==''){continue;}  

else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('STUDENTS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){  
    try {  
    Classroom.Courses.Students.create({userId: list,}, d[x][8]);
     
    }
    catch (e){continue;} 
    }       
  }
  
 
}
var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                     
}
   
// This is where the script that you need repeated ends.  
  
  
elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();     
} 








// These two functions are necessary for going over six minutes, they can be used for anything that needs to be extended.

function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}




// Here is where I will put the scripts that take a long time.


function teachersOver6OYG (){
createTrigger_("addTeachersOverSixOYG()",10);
addTeachersOverSix();
}


function addTeachersOverSixOYG(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 
  
  
  
// Here is where you put the script that you need to repeat.
  
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0];
var l = 1 + x;
if(i==''){continue;}  

else if (i=='D'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh2 = s.getSheetByName('TEACHERS');
 var lr = sh2.getLastRow();
 var a = sh2.getRange(d[x][11] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    try {   
    Classroom.Courses.Teachers.create({userId: list,}, d[x][8]);
//    Classroom.Courses.Teachers.remove(d[x][8], list);  
    }
    catch (e){continue;}
    }
  } 
  

}
 var end = sh.getRange(l, 1).setValue('');  
var color = sh.getRange(l, 1,1,sh.getLastColumn()).setBackground('#d0e0e3');                     
 }
   
// This is where the script that you need repeated ends.  
  
  
elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();     
} 








// These two functions are necessary for going over six minutes, they can be used for anything that needs to be extended.

function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}



function trigtrig() {
ScriptApp.newTrigger('trigforms').timeBased().atHour(7).nearMinute(1).onWeekDay(ScriptApp.WeekDay.SUNDAY).create();
}


function trigforms() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
  
if (new Date (d[x][13]) == new Date()+1){  
deleteTriggers_();   
var dt = new Date (d[x][12]); 
ScriptApp.newTrigger('blForms').timeBased().at(dt).create();
}
}}}


function blForms() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
try{
var form = FormApp.openById(d[x][21]).setAcceptingResponses(false);
}
catch (e) {continue;}
}}}


function deleteTriggers_() {  
  var triggers = ScriptApp.getProjectTriggers();  
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}

