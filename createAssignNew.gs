

function addFormAssign(){
var s1 = SpreadsheetApp.getActiveSpreadsheet();
var sh = s1.getSheetByName('CREATE FORMS');
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
}
