function sendPdf() {

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
   
  var family = d[x][1]; 
  var referencia = d[x][2];  
  var sub = d[x][3];
  
// This is for the one or two emails of the family 
  var er1 = sh.getRange(rr, 5, 1, 2);
  var ev1 = er1.getValues();
  
  for (q=0; q<ev1[0].length; q++){
    if (ev1[0][q] !== ''){
      arr1.push(ev1[0][q]);
    }
  } 
  var toget1 = arr1.join(',');
  var emails1 = toget1;
  
  
// This is to put the BCC for the school.
  var er2 = sh.getRange(rr, 7, 1, 5);
  var ev2 = er2.getValues();
  
  for (w=0; w<ev2[0].length; w++){
    if (ev2[0][w] !== ''){
      arr2.push(ev2[0][w]);
    }
  } 
  var toget2 = arr2.join(',');
  var emails2 = toget2;
  
  
// This is the text and attachments
  
  var m = 'TEXT, ' + 
    family + '\n \nTEXT. \n \nTEXT \nTEXT \nTEXT ' + 
      referencia + '\n \nTEXT. \n2. TEXT. \n3. TEXT. \n4. TEXT. \n \nTEXT.  \n \nTEXT \n \nTEXT';
  
  var pdf1 = DriveApp.getFileById('ID').getAs('application/pdf').getBytes();
  var attach1 = {fileName: 'TEXT', content:pdf1, mimeType:'application/pdf'};
  
  
// This is to actually send the email.
  
MailApp.sendEmail(emails1,sub,m,{bcc: emails2,attachments:[attach1]});

  
// Theses last two are to get rid of the "D" which indicates that the row should be done and to color it so as to mark it as done.  
var end = sh.getRange(rr, 1).setValue('');  
var color = sh.getRange(rr, 1,1,sh.getLastColumn()).setBackground('#bad1d1'); 

}

}}
