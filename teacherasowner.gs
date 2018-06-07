function changeTeacherOwner() { 
var course = { 'ownerId': "EMAIL" };
Classroom.Courses.patch(course, "COURSE ID",  {'updateMask':'ownerId'}); 
}
