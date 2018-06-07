function sendMonthly() {
  ScriptApp.newTrigger('exportEvents').timeBased().onMonthDay(30).create();
}

function sendPdf() {

var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('EMAILS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){

var e = d[x][1];
var s = d[x][2];
var m = d[x][3];  
  
var pdf = DriveApp.getFileById(d[x][4]).getAs('application/pdf').getBytes();  

var attach = {fileName:d[x][5], content:pdf, mimeType:'application/pdf'};
MailApp.sendEmail(e, s, m, {attachments:[attach]});  

}
}
}
