function onOpen() {
  var menuEntries = [];
  menuEntries.push({name:"ADD COURSES", functionName: "createCourses"});
  menuEntries.push({name:"UPDATE COURSES", functionName: "updateData"});
  menuEntries.push({name:"DEL COURSES", functionName: "deleteCourses"});
  menuEntries.push({name:"ADD S / T", functionName: "addStudentsTeachers"});
  menuEntries.push({name:"DELETE S / T", functionName: "deleteStudents"});
  menuEntries.push({name:"ADD AS", functionName: "addAssignments"});
  menuEntries.push({name:"DELETE AS", functionName: "deleteAssignments"});
  menuEntries.push({name:"LIST", functionName: "listCourses"});
  menuEntries.push({name:"MATERIAL", functionName: "addMaterial"});
  SpreadsheetApp.getActiveSpreadsheet().addMenu("SCRIPTS", menuEntries);
}


function createCourses() {
  
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  
else if (i=='M'){  
  
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
  
  Logger.log('%s', course.id);
  var l = Logger.getLog();
  s.getSheetByName('LOGSCL').getRange(d[x][9]).setValue(l); 
  Logger.clear();

}}}


function updateData () {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  
else if (i=='M'){   
  
 var course = Classroom.Courses.get(d[x][8]);
 course.name = d[x][1];
 course.section = d[x][2];
 Classroom.Courses.update(course, d[x][8]);
  
}}}
  

function deleteCourses() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  
else if (i=='M'){  
  
Classroom.Courses.remove(d[x][8]);  
  
}}}


function addStudentsTeachers () { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  
else if (i=='M'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh = s.getSheetByName('STUDENT');
 var lr = sh.getLastRow();
 var a = sh.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    Classroom.Courses.Students.create({userId: list,}, d[x][8]);
    }
  }

 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh = s.getSheetByName('TEACHER');
 var lr = sh.getLastRow();
 var a = sh.getRange(d[x][11] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    Classroom.Courses.Teachers.create({userId: list,}, d[x][8]);
    }
  } 
 
}}}


function deleteStudents () { 
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  
else if (i=='M'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh = s.getSheetByName('STUDENT');
 var lr = sh.getLastRow();
 var a = sh.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){ 
    Classroom.Courses.Students.remove(d[x][8], list);
    }
  }
  
}}}


function addAssignments () {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} 
                 
else if (i=='D'){  
  
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
Logger.log('%s', a.id);
var l = Logger.getLog();
s.getSheetByName('LOGSAS').getRange(d[x][3]).setValue(l);
Logger.clear();  
  
}
                    
 else if (i=='L'){  
  
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
Logger.log('%s', a.id);
var l = Logger.getLog();
s.getSheetByName('LOGSAS').getRange(d[x][3]).setValue(l);  
Logger.clear();   
  
}}}


function deleteAssignments () {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('ASSIGNMENTS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} 
                     
else if (i=='D'){
Classroom.Courses.CourseWork.remove(d[x][1], d[x][2]);
}
else if (i=='L'){
Classroom.Courses.CourseWork.remove(d[x][1], d[x][2]);
} 
}}


function listCourses() {
  var optionalArgs = {
    pageSize: 100
  };
  var response = Classroom.Courses.list(optionalArgs);
  var courses = response.courses;
  if (courses && courses.length > 0) {
    for (i = 0; i < courses.length; i++) {
      var course = courses[i];
      Logger.log('%s (%s)', course.name, course.id);
    }
  } else {
    Logger.log('No courses found.');
  }
  
  var l = Logger.getLog();
  SpreadsheetApp.openById('ID').getRange('A1').setValue(l);
 
}
