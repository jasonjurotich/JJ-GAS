

function onOpen(){
var s = SpreadsheetApp.getUi().createMenu('Calendar');
s.addItem('LIST CALS', 'listCals').addToUi();
s.addItem('EDIT CALS', 'editCals').addToUi();  
}


function listCals() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  var cal = CalendarApp.getAllCalendars();
  var arr = [];
  for (x=0; x<cal.length; x++){
    var l = 1 + x;
    var ca = cal[x];
    var id = ca.getId();
    var name = ca.getName();
    arr.push([id,name]); 
  }
  s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}



function editCals() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1 + x; var color = d[x][3];
    if(i==''){continue;} else if (i=='D'){ 
      var cal = CalendarApp.getCalendarById(d[x][1]); 
      var hid = cal.setHidden(true); 
      var sel = cal.setSelected(false);
      var col = cal.setColor(color);
      var end = s.getRange(l, 1).setValue(''); 
      Utilities.sleep(2000);  
    }
  }
}


