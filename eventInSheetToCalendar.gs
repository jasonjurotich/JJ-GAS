

function sheetToCalendar() {
  var c = CalendarApp.getCalendarById('ID');
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange();
  var n = r.getNumRows();
  var d = r.getValues();
  
  for (x=0; x<n; x++){
    var i = d[x][0];
    var l = 1 + x;
      if (i == ''){continue;}
      
      else if (i == 'D') {
      
      var title = d[x][1];
      var descrip = { description: d[x][2] };
      var start = new Date(d[x][3]);
      var stop = new Date(d[x][4]);
     
      var ne = c.createEvent(title, start, stop, descrip);
      
      var id = ne.getId();
      Logger.log(id);
      s.getRange(l, 6, 1, 1).setValue(id);
      
      }
  }
}

// The date format should be as follows in the cell: 7/29/2018 7:00:00


