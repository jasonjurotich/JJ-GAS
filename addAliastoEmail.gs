var service_account = {
"private_key": "-----BEGIN PRIVATE KEY-----",
"client_email": "changealiastest4@project-id-[].iam.gserviceaccount.com",
"client_id": "ID",
"user_email": "teststudent@school.edu.mx"
};

function getOAuthService(user) {
  return OAuth2.createService('Service Account')
    .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
    .setTokenUrl('https://accounts.google.com/o/oauth2/token')
    .setClientId('ID')
    .setPrivateKey(service_account.private_key)
    .setIssuer(service_account.client_email)
    .setSubject(service_account.user_email)
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setParam('access_type', 'offline')
    .setParam('approval_prompt', 'force')
    .setScope('https://www.googleapis.com/auth/script.external_request https://www.googleapis.com/auth/gmail.settings.sharing https://www.googleapis.com/auth/gmail.settings.basic');
}

function changeEmail() {
  var userEmail = 'teststudent@school.edu.mx'; 
  var aliasEmail = 'aliastest1@school.edu.mx';
  var aliasName = 'TS';

  var service = getOAuthService();
    service.reset();
    if (service.hasAccess()) {

  var url = 'https://www.googleapis.com/gmail/v1/users/me/settings/sendAs'
    var headers ={
      "Authorization": 'Bearer ' + service.getAccessToken(),
      "Accept":"application/json", 
      "Content-Type":"application/json",
      };

  var resource ={
     sendAsEmail: aliasEmail,
     displayName: aliasName,
     replyToAddress : aliasEmail,
     treatAsAlias: true,
     verificationStatus: 'accepted'
   };  

  var options = {
  'headers': headers,
  'method': 'POST',
  'payload': JSON.stringify(resource),
  'muteHttpExceptions': true
  };

Logger.log(options);
var response = UrlFetchApp.fetch(url, options);
Logger.log(response.getContentText()); 

  }
}
