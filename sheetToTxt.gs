function sheetToTxt() {

// Line 5 should be commented out the first time you run it, then afterwards it will get rid of the old file.

  DriveApp.getFolderById('ID').getFilesByName('testfile.txt').next().setTrashed(true);
  
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('NAME').getDataRange().getValues();
  var t = s.map( function (a) {return a.join('\t');} ).join('\n');
  
  var txt = DriveApp.createFile('testfile.txt', t, MimeType.PLAIN_TEXT);
  
  var folder = DriveApp.getFolderById('ID').addFile(txt);
  DriveApp.getRootFolder().removeFile(txt);
 
}
