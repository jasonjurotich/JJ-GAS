function calculateAverage(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('GRADES');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;} else if (i=='D'){
  var form = FormApp.openById(d[x][5]);
  var formResponses = form.getResponses();
  if(formResponses.length == 0) {continue;}
  else { 
  var todo = [];
  var output = [];
  for(var i = 0; i < formResponses.length ; i++){
    var itemResponses = formResponses[i].getGradableItemResponses();
    var email = formResponses[i].getRespondentEmail(); 
  var scores = [];
  for(var j = 0; j < itemResponses.length; j++){
    var score = itemResponses[j].getScore();
    scores.push(score);
    }
    var sum = scores.reduce(function(a, b) { return a + b; });
    var avg = sum / scores.length * 2;  
    output.push(email,avg);
  }
    todo.push(output);
    sh.getRange(d[x][4], 7, todo.length, todo[0].length).setValues(todo);
      }

}
}
}
