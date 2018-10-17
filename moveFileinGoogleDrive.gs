

function moveFile() {   
var rootFolder = DriveApp.getRootFolder(); 
var originalFolder = DriveApp.getFolderById('ID').getId();
var destinationFolder = DriveApp.getFolderById('ID').getId();
var fileToMove = DriveApp.getFileById('ID');
DriveApp.getFolderById(destinationFolder).addFile(fileToMove);
DriveApp.getFolderById(originalFolder).removeFile(fileToMove);   
}


