

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




function folderTree() {
    var pf = DriveApp.getRootFolder();
    getFolders(pf); 
}


function getFolders(parent) {
  var cf = parent.getFolders();
  while (cf.hasNext()) {
    var ch = cf.next();
    var f = ch.getFiles(); 
    var c = 0;
    
    while (f.hasNext()){
      var no = f.next();
      try{
      no.addEditor('jason.jurotich@ieducando.com');  
//    no.setOwner('jason.jurotich@ieducando.com')
      c++;
      } catch(e){continue;}
    }
         
    
    getFolders(ch);
  } 
}





function folderTree() {
    var pf = DriveApp.getFolderById('ID');
    getFolders(pf); 
}


function getFolders(parent) {
  var cf = parent.getFolders();
  while (cf.hasNext()) {
    var ch = cf.next();
    var f = ch.getFiles(); 
    var c = 0;
    
    while (f.hasNext()){
      var no = f.next();
      try{
        no.makeCopy(no.getName());       
      c++;
      } catch(e){continue;}
    }   
    getFolders(ch);
  } 
}








