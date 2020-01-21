function sheetToCalendar() {
  
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange();
  var n = r.getNumRows();
  var d = r.getValues();
  
  for (x=0; x<n; x++){
    var i = d[x][0];
    var w1 = d[x][8];
    var w2 = d[x][9];
    var l = 1 + x;
    var c = CalendarApp.getCalendarById('CORREO');
    var title = d[x][1];
    var start = new Date(d[x][2]);
    var stop = new Date(d[x][3]);
    var options = {description: d[x][4], location: d[x][5]};
    var until = new Date(d[x][6]);
    var rep = d[x][7];
    var rd1 = 'LUNES';
    var rd2 = 'MARTES';
    var rd3 = 'MIERCOLES';
    var rd4 = 'JUEVES';
    var rd5 = 'VIERNES';
    var day1 = CalendarApp.Weekday.MONDAY;
    var day2 = CalendarApp.Weekday.TUESDAY;
    var day3 = CalendarApp.Weekday.WEDNESDAY;
    var day4 = CalendarApp.Weekday.THURSDAY;
    var day5 = CalendarApp.Weekday.FRIDAY;

// It is very important to format the cell which coincides with rep = d[x][7] as a number in the Google Sheet.
    
      if (i == ''){continue;}
      
      else if (i == 'D') {
        var recur1 = CalendarApp.newRecurrence().addDailyRule().times(rep);
        var ne1 = c.createEventSeries(title, start, stop, recur1, options);
        var id = ne1.getId(); 
        var col = CalendarApp.getEventById(id).setColor(d[x][12]);
        var cc = s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');  
      }
      
      else if (i == 'A') {
        var recur7 = CalendarApp.newRecurrence().addDailyRule().times(rep);
        var ne7 = c.createAllDayEventSeries(title, start, recur7, options);
        var id = ne7.getId();
        s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');  
      }
         
      else if (i == 'AW') {
        var ne7 = c.createAllDayEvent(title, start, stop, options);
        var id = ne7.getId();
        s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');  
      }   
      
      else if (i == 'S') {
        var day;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;} 
        var recur2 = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekday(day).until(until);
        var ne2 = c.createEventSeries(title, start, stop, recur2, options);
        var id = ne2.getId();
        s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');     
      }
     
      else if (i == 'F') {
        var day;
        var dai;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;}
        if (w2 == rd1){dai = day1;} else if (w2 == rd2){dai = day2;} else if (w2 == rd3){dai = day3;} else if (w2 == rd4){dai = day4;} else if (w2 == rd5){dai = day5;}
        var recur3 = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekdays([day,dai]).until(until);
        var ne3 = c.createEventSeries(title, start, stop, recur3, options);
        var id = ne3.getId();
        s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');  
      }
      
      
      else if (i == 'M') {
        var day;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;}
        var recur4 = CalendarApp.newRecurrence().addYearlyRule().onlyOnWeeks(rep.split(",")).onlyOnWeekday(day);
        var ne4 = c.createEventSeries(title, start, stop, recur4, options);
        var id = ne4.getId();
        s.getRange(l, 11, 1, 1).setValue(id);
        var end = s.getRange(l, 1).setValue('');  
      }
 
  }
}


// https://www.epochconverter.com/weeks/2018
