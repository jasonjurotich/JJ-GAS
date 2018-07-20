

function exportAsHTML1(){
  var forDriveScope = DriveApp.getStorageUsed(); //needed to get Drive Scope requested
  var docID = 'ID';
  var url = "https://docs.google.com/feeds/download/documents/export/Export?id="+docID+"&exportFormat=html";
  var param = {
    method      : "get",
    headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions:true,
  };
  var html = UrlFetchApp.fetch(url,param).getContentText();
  return html; 

}


function mailer(){
   var docbody = exportAsHTML1();
   MailApp.sendEmail({
     to: "jasonjurotich@gmail.com",
     subject: "document emailer",
     htmlBody:  docbody  });
}


