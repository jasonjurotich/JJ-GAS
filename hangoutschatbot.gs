// I will be adding more functions to the bot as time goes on. It will include sending emails, creating docs, forms, classes en Classroom, etc.
// Right now, it can create calendar events. 


function onAddToSpace(e) {
var mes = "Added and ready to serve."; 
return {"text": mes};  
} 
    
function onMessage(e) {
var m = e.message.text;
  
  if (m.indexOf('cal') > -1) {  
    var sp = m.split('-');
    var r = sp[1];
    Logger.log(r);
    bcal(r);  
  } 
 else if (m.indexOf('des') > -1){
    var sp = m.split('-');
    var r = sp[1];
    Logger.log(r);
    var s = sp[2];
    var f = sp[3];
    var d = sp[4];
    var g = sp[5];
    bcaldes(r,s,f,d,g);
  }
 
return {"text": "Done."};   
}

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
