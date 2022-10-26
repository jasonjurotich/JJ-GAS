function RemoveEditors(){ 
  var files = DriveApp.getFolderById("ID").getFiles();
  while (files.hasNext()) {
    var file = files.next();    
    var docs = DriveApp.getFileById(file.getId());    
    var users = docs.getEditors();
        for (i in users) {
          email = users[i].getEmail();
          if (email != "") {
            docs.removeEditor(email);
} 
}
}
}
    
