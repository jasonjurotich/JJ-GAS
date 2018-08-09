

function sheetToCalendar() {
  var c = CalendarApp.getCalendarById('qv89o4j2hmmfl038rd4sqm7uik@group.calendar.google.com');
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange();
  var n = r.getNumRows();
  var d = r.getValues();
  
  for (x=0; x<n; x++){
    var i = d[x][0];
    var w1 = d[x][8];
    var w2 = d[x][9];
    var l = 1 + x;
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
// https://www.epochconverter.com/weeks/2018    
    
      if (i == ''){continue;}
      
      else if (i == 'D') {
        var recur1 = CalendarApp.newRecurrence().addDailyRule().times(rep);
        var ne1 = c.createEventSeries(title, start, stop, recur1, options).getId();
        var col = CalendarApp.getEventById(ne1).setColor(d[x][12]);
        var cc = s.getRange(l, 11, 1, 1).setValue(ne1);
        var end = s.getRange(l, 1).setValue('');  
      }
      
      else if (i == 'A') {
        var recur2 = CalendarApp.newRecurrence().addDailyRule().times(rep);
        var ne2 = c.createAllDayEventSeries(title, start, recur2, options).getId();
        var col = CalendarApp.getEventById(ne2).setColor(d[x][12]);
        s.getRange(l, 11, 1, 1).setValue(ne2);
        var end = s.getRange(l, 1).setValue('');  
      }
         
      else if (i == 'AW') {
        var ne3 = c.createAllDayEvent(title, start, stop, options).getId();
        var col = CalendarApp.getEventById(ne3).setColor(d[x][12]);
        s.getRange(l, 11, 1, 1).setValue(ne3);
        var end = s.getRange(l, 1).setValue('');  
      }    
           
      
      else if (i == 'S') {
        var day;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;} 
        var recur4 = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekday(day).until(until);
        var ne4 = c.createEventSeries(title, start, stop, recur4, options).getId();
        s.getRange(l, 11, 1, 1).setValue(ne4);
        var col = CalendarApp.getEventById(ne4).setColor(d[x][12]);
        var end = s.getRange(l, 1).setValue('');  
        var color = s.getRange(l, 1,1,s.getLastColumn()).setBackground('#bad1d1'); 
      }
      
      
      else if (i == 'F') {
        var day;
        var dai;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;}
        if (w2 == rd1){dai = day1;} else if (w2 == rd2){dai = day2;} else if (w2 == rd3){dai = day3;} else if (w2 == rd4){dai = day4;} else if (w2 == rd5){dai = day5;}
        var recur5 = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekdays([day,dai]).until(until);
        var ne5 = c.createEventSeries(title, start, stop, recur5, options).getId();
        s.getRange(l, 11, 1, 1).setValue(ne5);
        var col = CalendarApp.getEventById(ne5).setColor(d[x][12]);
        var end = s.getRange(l, 1).setValue('');  
        var color = s.getRange(l, 1,1,s.getLastColumn()).setBackground('#bad1d1');
      }
      
      
      else if (i == 'M') {
        var day;
        if (w1 == rd1){day = day1;} else if (w1 == rd2){day = day2;} else if (w1 == rd3){day = day3;} else if (w1 == rd4){day = day4;} else if (w1 == rd5){day = day5;}
        var recur6 = CalendarApp.newRecurrence().addYearlyRule().onlyOnWeeks(rep.split(",")).onlyOnWeekday(day);
        var ne6 = c.createEventSeries(title, start, stop, recur6, options).getId();
        s.getRange(l, 11, 1, 1).setValue(ne6);
        var col = CalendarApp.getEventById(ne6).setColor(d[x][12]);
        var end = s.getRange(l, 1).setValue('');  
        var color = s.getRange(l, 1,1,s.getLastColumn()).setBackground('#bad1d1');
      }
 
  }
}


