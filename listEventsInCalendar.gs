

function listCals() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var r = s.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  var cal = Calendar.Events.list('ID');
  var lis = cal.items;
  var arr = [];
  for (x=0; x<lis.length; x++){
    var l = 1 + x;
    var ca = lis[x];
    var name = ca.summary;
    var beg = ca.start;
    var end = ca.end;
    var uid = ca.iCalUID;
    var col = ca.colorId;
    var des = ca.description;
    
    arr.push([name,beg,end,uid,col,des]); 
  }
  s.getRange(2, 1, arr.length, arr[0].length).setValues(arr);
}


