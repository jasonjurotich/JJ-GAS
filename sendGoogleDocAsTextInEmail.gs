

function Html(){
  var docID = 'ID';
  var url = "https://docs.google.com/feeds/download/documents/export/Export?id="+docID+"&exportFormat=html";
  var param = {method: "get", headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()}, muteHttpExceptions:true};
  var html = UrlFetchApp.fetch(url,param).getContentText();
  return html; 

}

function mailer(){
   var em = 'email@gmail.com';
   var su = 'This is a test';
   var body = Html();
   MailApp.sendEmail({to: em, subject: su, htmlBody: body});
}


