

function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('CORREOS');
s.addItem('MANDAR CORREO', 'mandarCorreoAhora').addToUi();  
}


function mandarCorreoForm() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues(); 
  
  for (x=1; x<n; x++){
    var l = 1 + x;
    var na = d[x][1];
    var ap = d[x][2]
    var em = d[x][3];
    var ph = d[x][4];    
    var ad = d[x][5];
    var no = d[x][6];
  
      if(d[x][7] != 'ENVIADO'){
        var newc = ContactsApp.createContact(na, ap, em);
        newc.addAddress(ContactsApp.Field.WORK_ADDRESS, ad).isPrimary();
        newc.addPhone(ContactsApp.Field.WORK_PHONE, ph).isPrimary();
        newc.setNotes(no);
        var group = ContactsApp.getContactGroup('PROMOCION')
        group.addContact(newc);
        
        var referencia = d[x][1];  
        var ih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').getRange('B2').getValue();
        var co = DriveApp.getFileById(ih).makeCopy().getId();
        s.getRange(l, 8).setValue(co);  
        var body = DocumentApp.openById(co).getBody();  
        body.replaceText('##REFERENCIA##', referencia);
      }
    
  }
  ScriptApp.newTrigger('sendEmail').timeBased().after(500).create();  
}



function mandarCorreoAhora() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues(); 
  
  for (x=1; x<n; x++){
    var l = 1 + x;
      if(d[x][7] != 'ENVIADO'){
        var referencia = d[x][1];  
        var ih = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').getRange('B2').getValue();
        var co = DriveApp.getFileById(ih).makeCopy().getId();
        s.getRange(l, 8).setValue(co);  
        var body = DocumentApp.openById(co).getBody();  
        body.replaceText('##REFERENCIA##', referencia);
      }
  }
  ScriptApp.newTrigger('sendEmail').timeBased().after(500).create();  
}



function sendEmail() { 
var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues(); 
 
  for (x=1; x<n; x++) {
    var l = 1 + x;  
    
    if(d[x][7] != 'ENVIADO'){
    var sub = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').getRange('A2').getValue();
    var em = d[x][3];
    var docID = d[x][7];
    
    var url = "https://docs.google.com/feeds/download/documents/export/Export?id="+docID+"&exportFormat=html";
    var param = {method: "get", headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()}, muteHttpExceptions:true};
    var h = UrlFetchApp.fetch(url,param).getContentText();
    
    MailApp.sendEmail({to: em, subject: sub, htmlBody: h});
    DriveApp.getFileById(docID).setTrashed(true);  
    
    s.getRange(l, 8).setValue('ENVIADO'); 
    }
  }
 deleteTriggers();
 }
  


function deleteTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for ( var i in triggers ) { 
    if (triggers[i].getHandlerFunction() == "sendEmail") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  Utilities.sleep(1000);
}


