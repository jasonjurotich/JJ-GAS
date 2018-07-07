

function addAssignments () {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('PROGRAM');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} 
                           
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
 
 }
}

