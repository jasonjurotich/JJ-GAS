function onEdit(event) {
  
  //SETTINGS
  var tsheet = 'Sheet1'; //the sheet you are monitoring for edits
  var lcol = 1; //left-most column number you are monitoring; A=1, B=2 etc
  var rcol = 3; //right-most column number you are monitoring
  var tcol = 4; //column number in which you wish to populate the timestamp
  //
  
  var s = event.source.getActiveSheet();
  var sname = s.getName();
  if (sname == tsheet) {
    var r = event.source.getActiveRange();
    var scol = r.getColumn();
    if (scol >= lcol && scol <= rcol) {
      s.getRange(r.getRow(), tcol).setValue(new Date());
    }
  }
  
}
