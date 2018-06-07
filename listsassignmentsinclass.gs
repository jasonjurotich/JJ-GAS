function listAssignments() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('NAME');
  var class = Classroom.Courses.CourseWork.list(ID);
  var w = class.courseWork;
  var arr=[];
  for (i = 0; i < w.length; i++) {
    var c = w[i];
    var ids = c.id;
    arr.push([ids]);
  }
  sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr);   
}
