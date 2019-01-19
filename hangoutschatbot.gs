// I will be adding more functions to the bot as time goes on. It will include sending emails, creating docs, forms, classes en Classroom, etc.
// Right now, it can create calendar events and send an email. 


function onAddToSpace(e) {
var mes = "Added and ready to serve."; 
return {"text": mes};  
} 
    
function onMessage(e) {
var m = e.message.text;
var email;  
  if (m.indexOf('cal') > -1) {  
    var sp = m.split('_');
    var r = sp[1];
    bcal(r);  
  } 
 else if (m.indexOf('cdes') > -1){
    var sp = m.split('_');
    var r = sp[1];
    var s = sp[2];
    var f = sp[3];
    var d = sp[4];
    var g = sp[5];
    bcaldes(r,s,f,d,g);
  }
 else if (m.indexOf('email') > -1){
    var sp = m.split('_');
    var em = sp[1];
    var su = sp[2];
    var me = sp[3];
   sendMessage(em,su,me); 
  }
  else if (m.indexOf('fac') > -1){
    sendFactura(m,email);
  }
  
    
return {"text": "Done."};   
}



// FUNCTIONS


function bcal(r) {
 var event = CalendarApp
 .createEventFromDescription(r);
}

function bcaldes(r,s,f,d,g){
 var event = CalendarApp.createEvent(r,
    new Date(s),
    new Date(f),
{description: d, guests:g, sendInvites: true}); 
}

function sendMessage(em,su,me){
  GmailApp.sendEmail(em, su, me);
}



//   var t = "fac_CUMBRES_20.45_ADF-FYG:1,FYG-ADP:2,ASDD-SD:4_a3wrwefqw3wese";




function sendFactura(m,email){ 
var ss = SpreadsheetApp.openById('ID'); 
var shurl =  ss.getSheetByName('Pre Factura');
var sheet = ss.getSheetByName('Factura');

var em = email;   
var sp = m.split('_');
var co = sp[1];
var cl = sp[2];
var ca = sp[3];
var re = sp[4];
  
shurl.getRange('B3').setValue(co);
shurl.getRange('E7').setValue(cl);
shurl.getRange('C37').setValue(re);
  
var result = [];
a = ca.split(','); 
while(a[0]) {result.push(a.splice(0,1));}
for(i=0;i<result.length;i++){
    result[i][0]=result[i][0].replace(/:/gi,","); 
  }
arr1 =[];
for(i=0;i<result.length;i++){
   b = result[i][0].split(','); arr1.push(b); 
 } 
for (i=0; i<arr1.length; i++){
  var lr = 16 + i;
  if (arr1[i][0] != '') {    
  s.getRange(lr,1).setValue(arr1[i][0]);
  s.getRange(lr,3).setValue(arr1[i][1]);  
  } else {continue;}     
}
  
  
var rows = shurl.getDataRange();
var numRows = rows.getNumRows() - 1;
var values = rows.getValues();
sheet.getRange(2,3).setValue(values[1][2]);
var i;
var o;
  
  for(i=3; i<14; i++){
    for(o=0;o<5;o++){
      sheet.getRange(i+1,o+1).setValue(values[i][o]);
    }
  } 

  for(i=14; i< 39; i++){
    for(o=0;o<4;o++){
      sheet.getRange(i+1,o+1).setValue(values[i][o]);
    }
  } 
  
 var destFolder = DriveApp.getFolderById("ID");
 var numf = shurl.getRange('D1').getValue();
 var sc = SpreadsheetApp.create('Factura sin OC jjurotich '+ numf);
 var newnumf = shurl.getRange('D1').setValue(numf+1);
 var ssid = sc.getId();
 var ssurl = sc.getUrl();
 shurl.getRange('E2').setValue(ssurl); 
 var des = SpreadsheetApp.openById(ssid);
 sheet.copyTo(des);
 var del = des.getSheetByName('Sheet1').activate(); 
 des.deleteActiveSheet();
 var sheet2 = des.getSheets()[0]; 
 sheet2.setName('Factura'); 
 var sf = DriveApp.getFileById(ssid);
 DriveApp.getFolderById(destFolder.getId()).addFile(sf);
 DriveApp.getRootFolder().removeFile(sf);
  
   
var s2 = SpreadsheetApp.openById('ID').getSheets()[0];
arr2 = [];  
var date = new Date();    
var link = s.getRange('E2').getValue();
arr2.push([date,em,link]);
var lr = s2.getLastRow();
var a1 = s2.getRange(lr+1,1,arr2.length,arr2[0].length).setValues(arr2);    
}



function sortEntrances() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('A:C');
  s.sort(1);
}






// You need to add this to the appscript.json file, remember to activate all APIs in the GCP beforehand.
// Review the example Google gives if you need to start from zero. https://codelabs.developers.google.com/codelabs/chat-apps-script/#0


{
  "timeZone": "America/Mexico_City",
  "dependencies": {
    "enabledAdvancedServices": [{
      "userSymbol": "Plus",
      "serviceId": "plus",
      "version": "v1"
    }, {
      "userSymbol": "Classroom",
      "serviceId": "classroom",
      "version": "v1"
    }, {
      "userSymbol": "AdminGroupsMigration",
      "serviceId": "groupsmigration",
      "version": "v1"
    }, {
      "userSymbol": "Drive",
      "serviceId": "drive",
      "version": "v2"
    }, {
      "userSymbol": "Slides",
      "serviceId": "slides",
      "version": "v1"
    }, {
      "userSymbol": "AdminDirectory",
      "serviceId": "admin",
      "version": "directory_v1"
    }, {
      "userSymbol": "AdminReports",
      "serviceId": "admin",
      "version": "reports_v1"
    }, {
      "userSymbol": "Gmail",
      "serviceId": "gmail",
      "version": "v1"
    }, {
      "userSymbol": "Sheets",
      "serviceId": "sheets",
      "version": "v4"
    }, {
      "userSymbol": "Calendar",
      "serviceId": "calendar",
      "version": "v3"
    }, {
      "userSymbol": "AdminGroupsSettings",
      "serviceId": "groupssettings",
      "version": "v1"
    }]
  },
  "exceptionLogging": "STACKDRIVER",
  "chat": {
  }
}
