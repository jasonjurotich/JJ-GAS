function listStudents() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('LISTSTUDENTS');
  
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
  
sh.getRange(d[x][14], d[x][15], arr.length, arr[0].length).setValues(arr);
  
}
}
}
