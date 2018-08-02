

function copyForms(){
    var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PROGRAM');
    var fol = DriveApp.getFolderById('ID');
    var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
    
    for (x=0; x<n; x++) { 
    var l = 1 + x;
    var i = d[x][0]; var o=x+1; if (i=='') {continue;} 
      else if (i=='D') {
        
        try {
        var fo = DriveApp.getFileById(d[x][6]).makeCopy(d[x][5],fol).getId();
        var f = FormApp.openById(fo);
        var arr = [];
          arr.push([f.getId(), f.getEditUrl(), f.getPublishedUrl()]);
          s.getRange(o, 8, arr.length, arr[0].length).setValues(arr);
          s.getRange(l,1).setValue('');
          Utilities.sleep(1000);
        } 
        catch (e){continue;}
      }
    }
} 


function addProgramAssignments(){
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
    
    else if (i=='ND'){  
      var assignment = {
        workType: d[x][13], state: d[x][14], title: d[x][16],description: d[x][17],
        maxPoints: d[x][20], scheduledTime: d[x][23], 
        dueDate: { year: d[x][24], month: d[x][25], day: d[x][26]},
        dueTime: { hours: d[x][27],minutes: d[x][28], seconds: d[x][29]}  
      };
      var a = Classroom.Courses.CourseWork.create(assignment, d[x][10]);
      var c = a.id;
      var id = sh.getRange(d[x][11]).setValue(c);   
    } 
    sh.getRange(l,1).setValue('');
    Utilities.sleep(1000); 
  }
}


function copySynopsisSCH() {
var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SYNTEMPLATE');
var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var fol = DriveApp.getFolderById(d[1][2]);
  for (x=1; x<n; x++){
  var l = 1 + x;

    if (s.getRange(l,1).getBackground() !== '#d0e0e3'){
    var doc = DriveApp.getFileById(d[1][3]).makeCopy(d[x][0], fol).getId();
    var sy = SpreadsheetApp.openById(doc);
    var ti = sy.getSheetByName('EXERCISES').getRange('C1').setValue(d[x][1]);
    var sys = sy.getId();
    var c = s.getRange(l, s.getLastColumn()).setValue(sys);  
    var f = s.getRange(l,1, 1, s.getLastColumn()).setBackground('#d0e0e3');
    }
    
  }
  putLinksIds()
}


function putLinksIds(){
var s2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('PROGRAM');
var r2 = s2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();  
var levs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SYNTEMPLATE');
  var lev1 = levs.getRange('F2').getValue();
  var lev2 = levs.getRange('F3').getValue();
  var lev3 = levs.getRange('F4').getValue();
  var lev4 = levs.getRange('F5').getValue();
      
      for (y=0; y<n2; y++){
       var l2 = 1 + y;
        
        if (d2[y][0] == 'L1'){
        var sy = SpreadsheetApp.openById(lev1);  
        var ti1 = sy.getSheetByName('EXERCISES').getRange(d2[y][30]).setValue(d2[y][7]);
        var ti2 = sy.getSheetByName('EXERCISES').getRange(d2[y][32]).setValue(d2[y][12]);  
        var ti3 = sy.getSheetByName('EXERCISES').getRange(d2[y][31]).setFormula('=HYPERLINK("' + d2[y][9] + '","' + d2[y][4] + '")');
        var c = s2.getRange(l2, 1).setValue('');  
        }
        
        else if (d2[y][0] == 'L2'){
        var sy = SpreadsheetApp.openById(lev2);
        var ti1 = sy.getSheetByName('EXERCISES').getRange(d2[y][30]).setValue(d2[y][7]);   
        var ti2 = sy.getSheetByName('EXERCISES').getRange(d2[y][32]).setValue(d2[y][12]);  
        var ti3 = sy.getSheetByName('EXERCISES').getRange(d2[y][31]).setFormula('=HYPERLINK("' + d2[y][9] + '","' + d2[y][4] + '")');
        var c = s2.getRange(l2, 1).setValue('');  
        }
        
        else if (d2[y][0] == 'L3'){
        var sy = SpreadsheetApp.openById(lev3);
        var ti1 = sy.getSheetByName('EXERCISES').getRange(d2[y][30]).setValue(d2[y][7]);  
        var ti2 = sy.getSheetByName('EXERCISES').getRange(d2[y][32]).setValue(d2[y][12]);  
        var ti3 = sy.getSheetByName('EXERCISES').getRange(d2[y][31]).setFormula('=HYPERLINK("' + d2[y][9] + '","' + d2[y][4] + '")');
        var c = s2.getRange(l2, 1).setValue('');  
        }
        
        else if (d2[y][0] == 'L4'){
        var sy = SpreadsheetApp.openById(lev4);
        var ti1 = sy.getSheetByName('EXERCISES').getRange(d2[y][30]).setValue(d2[y][7]); 
        var ti2 = sy.getSheetByName('EXERCISES').getRange(d2[y][32]).setValue(d2[y][12]);  
        var ti3 = sy.getSheetByName('EXERCISES').getRange(d2[y][31]).setFormula('=HYPERLINK("' + d2[y][9] + '","' + d2[y][4] + '")');
        var c = s2.getRange(l2, 1).setValue('');  
        }
         
      }
}


function grabGradesSCH(){
 var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EXERCISES");
 var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
 for(var x=0; x<n; x++){ var l = 1 + x; var k = d[x][0]; if (k == '') {continue;} else if(k == 'x') { 
    var form = FormApp.openById(d[x][1]);
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
          var avg = Number((sum / scores.length * 2).toFixed(1)); 
          
           try {    
            var courseId = d[0][7]; var courseWorkId = d[x][7];
            var studentSubmissions = Classroom.Courses.CourseWork.StudentSubmissions.list(courseId, courseWorkId,{'userId': email});
            var id = studentSubmissions['studentSubmissions'][0].id;
            var studentSubmission = {'assignedGrade': avg, 'draftGrade': avg}
            Classroom.Courses.CourseWork.StudentSubmissions.patch(studentSubmission,courseId,courseWorkId,id,{'updateMask':'assignedGrade,draftGrade'});
           } catch (e) {continue;}
        } 
      }
     }
    }
gradesOYG();
}


function gradesSCH() {
var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('EXERCISES');
var t = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AS');
var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var id = s.getRange('H1').getValue();
var st = Classroom.Courses.Students.list(id);
var w = st.students; var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i]; var us = c.profile; var gr = us.emailAddress;
    arr.push([gr]); 
  } 
var len = t.getRange(5, 3, arr.length, arr[0].length).setValues(arr);
var cuanto = len.getValues();
var howlong = cuanto.length;
arr=[];

    for (var x = 0; x < n; x++) {
    var l = 1 + x;
    var q = d[x][0];
    var col = d[x][8];
    var courseWorkId = d[x][2];
    var arr2 = [];
      if (q == ''){continue;}
      else if (q == 'x'){
      var users = t.getRange(5,3,howlong,1).getValues();
          for (k=0; k<users.length; k++){
            var list = users[k]; 
            var assign = Classroom.Courses.CourseWork.StudentSubmissions.list(id, courseWorkId, {'userId': list}); 
            var sub = assign.studentSubmissions;
            for (jll = 0; jll < sub.length; jll++) {
              var dll = sub[jll];
              var gr = dll.assignedGrade;
              arr2.push([gr]); 
            }
          }
          for (var m in arr2) { if (arr2[m] == '') { arr2[m] = [0]; } }
          t.getRange(5, col, arr2.length, arr2[0].length).setValues(arr2);
          arr2=[];
      var del = s.getRange(l,1).setValue('');
      Utilities.sleep(1000);
      }
    }

}


