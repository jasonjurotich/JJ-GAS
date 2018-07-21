

function myFunction1() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues(); var l = r.getLastRow();
  
  for (x=0; x<n; x++){
    var l = 1 + x;
    var name = d[x][1];
    var em = d[x][2];
    var ph = d[x][3];    
    var ad = d[x][4];
    var sub = 'TEST';
    var mes = 'THIS IS A TEST';    
    if(d[x][5] != 'ENVIADO'){
      var newc = ContactsApp.createContact(name, name, em);
      MailApp.sendEmail(em, sub, mes);
      newc.addAddress(ContactsApp.Field.WORK_ADDRESS, ad).isPrimary();
      newc.addPhone(ContactsApp.Field.WORK_PHONE, ph).isPrimary();
      s.getRange(l, 6).setValue('ENVIADO');
    } 
  }
}


