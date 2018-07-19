

function importFullName() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet3');
  var r = s.getDataRange();
  var n = r.getNumRows();
  var d = r.getValues();
  var ar = [];
  var c = ContactsApp.getContacts();
 
   for (i = 0; i < c.length; i++) {
     var cs = c[i];
       if (cs.getFullName() == ''){cs.setFullName('NO NAME');} 
       if (cs.getEmails()[0] == undefined){cs.addEmail(ContactsApp.Field.HOME_EMAIL,'noemail@gmail.com').isPrimary();} 
       if (cs.getPhones()[0] == undefined){cs.addPhone(ContactsApp.Field.HOME_PHONE,'+000000000000').isPrimary();} 
       if (cs.getAddresses()[0] == undefined){cs.addAddress(ContactsApp.Field.HOME_ADDRESS,'NO ADDRESS').isPrimary();} 
       var na = cs.getFullName();
       var em = cs.getEmails()[0].getAddress();
       var ph = cs.getPhones()[0].getPhoneNumber();
       var di = cs.getAddresses()[0].getAddress();
     ar.push([na,em,ph,di]);
   }
  s.getRange(1, 1, ar.length, ar[0].length).setValues(ar);  
}


