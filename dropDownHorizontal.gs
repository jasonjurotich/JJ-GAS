

function depDrop_(range, sourceRange){
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange, true).build();
range.setDataValidation(rule);
}

function onEdit (){
var aCell = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getActiveCell();
var aRow = aCell.getRow();  
var aColumn = aCell.getColumn();
  
if (aRow == 1 && SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")){
var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange(aRow + 1, aColumn);
var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
depDrop_(range, sourceRange);
}
else if (aRow == 2 && SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")){
var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1").getRange(aRow + 1, aColumn);
var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
depDrop_(range, sourceRange);
}

}


