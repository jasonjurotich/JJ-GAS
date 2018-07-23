

function onOpen() {
  var menuEntries = [];
  menuEntries.push({name:"GET EVENTS", functionName: "exportEvents"});
  menuEntries.push({name:"SEND PDF", functionName: "sendPdf"});
  SpreadsheetApp.getActiveSpreadsheet().addMenu("Do", menuEntries);
}

function grabDaily() {
  ScriptApp.newTrigger('exportEvents').timeBased().everyDays(1).create();
}

function exportEvents(){
var mycal = 'ID@group.calendar.google.com';
var cal = CalendarApp.getCalendarById(mycal);
var events = cal.getEvents(new Date("January 1, 2017 00:00:00 CST"), new Date("December 30, 2018 23:59:59 CST"));
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('EVENTS');
sheet.clearContents(); 

for (var i=0;i<events.length;i++) {
var row=i+2;
var details=[[events[i].getTitle(), events[i].getDescription(), events[i].getStartTime(), events[i].getEndTime()]];
var range=sheet.getRange(row,1,1,4);
range.setValues(details);

var cell=sheet.getRange(row,5);
cell.setFormula('=(HOUR(D' +row+ ')+(MINUTE(D' +row+ ')/60))-(HOUR(C' +row+ ')+(MINUTE(C' +row+ ')/60))');
cell.setNumberFormat('.00');
}

}


