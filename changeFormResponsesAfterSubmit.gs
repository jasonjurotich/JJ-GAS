function myFunction() {
var s = SpreadsheetApp.openById('ID').getSheetByName('options');
var sr = s.getRange(1, 1, s.getLastRow(), s.getLastColumn()).getValues();
Logger.log(sr);
 
var f = FormApp.openById('ID');
var a = f.getItems(); var ar = [];
for (q in sr){
 if (sr[q][0] != "" /* && s[q][2] > 0 */ ){ar.push(sr[q][0]);}}
  for (i=0;i<a.length;i+=1) {tq = a[i];
    if (tq.getTitle() === 'test1') {
      var qu = tq.asMultipleChoiceItem().setChoiceValues(ar);
    }
  }
  
}

// Put this in the spreadsheet to get rid of an option after a certain number: =B2–COUNTIF(responses!B:B,“=”&A2)
