

function onOpen (){
var m = SpreadsheetApp.getUi().createMenu('Emails');
  m.addItem('DOC', 'Create Email').addToUi();
}

function DOC(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('EMAILS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
  for (x=0; x<n; x++) { 
    var i=d[x][0]; 
    var rr = 1 + x;
    if(i==''){continue;} else if (i=='D'){
      var family = d[x][1]; 
      var referencia = d[x][2];  
      
      var ih = sh.getRange('M2').getValue();
      var co = DriveApp.getFileById(ih).makeCopy().getId();
      sh.getRange(rr, 13).setValue(co);  
      var body = DocumentApp.openById(co).getBody();
      body.replaceText('##Familia##', family);  
      body.replaceText('##Referencia##', referencia);     
    }
  }
ScriptApp.newTrigger('sendEmail').timeBased().after(500).create();  
}


function sendEmail() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('EMAILS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
 for (x=0; x<n; x++) {
  var i=d[x][0]; 
  var arr1 = [];
  var arr2 = [];
  var rr = 1 + x; 
  
  if(i==''){continue;} else if (i=='D'){
    var sub = d[x][3];
    
    var er1 = sh.getRange(rr, 5, 1, 2);
    var ev1 = er1.getValues();
    for (q=0; q<ev1[0].length; q++){
      if (ev1[0][q] !== ''){
        arr1.push(ev1[0][q]);
      }
    } 
    var toget1 = arr1.join(',');
    var emails1 = toget1;
    
    var er2 = sh.getRange(rr, 7, 1, 6);
    var ev2 = er2.getValues();
    for (w=0; w<ev2[0].length; w++){
      if (ev2[0][w] !== ''){
        arr2.push(ev2[0][w]);
      }
    } 
    var toget2 = arr2.join(',');
    var emails2 = toget2;
    
    var docID = d[x][12];
    var url = "https://docs.google.com/feeds/download/documents/export/Export?id="+docID+"&exportFormat=html";
    var param = {method: "get", headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()}, muteHttpExceptions:true};
    var h = UrlFetchApp.fetch(url,param).getContentText();
    
    MailApp.sendEmail({to: emails1, bcc: emails2, subject: sub, htmlBody: h});
    DriveApp.getFileById(docID).setTrashed(true);  
    
    var end = sh.getRange(rr, 1).setValue('');  
    var color = sh.getRange(rr, 1,1,sh.getLastColumn()).setBackground('#bad1d1');  
    
  }
 }
deleteTriggers_();
}
  

function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {
  ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
}
  
  
  
