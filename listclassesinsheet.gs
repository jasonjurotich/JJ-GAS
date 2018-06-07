function listCourses() {
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
