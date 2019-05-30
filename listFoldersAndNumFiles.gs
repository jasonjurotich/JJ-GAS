

function folderTree() {
    var pf = DriveApp.getRootFolder();
    getFolders(pf); 
}

function getFolders(parent) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var childFolders = parent.getFolders();
  while (childFolders.hasNext()) {
    var ch = childFolders.next();
    var f = ch.getFiles(); var c = 0;
    while (f.hasNext()){f.next();c++;}
    var arr = [ch.getName(), ch.getUrl(), c];
    s.appendRow(arr);
    getFolders(ch);
  } 
}
