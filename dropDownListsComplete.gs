function onOpen() {
var m = SpreadsheetApp.getUi().createMenu('Drop Down');
m.addItem('TEMPLATE','DROPDOWNLISTS').addToUi();
m.addItem('RUN DROP', 'onEdit').addToUi();
}



function depDrop_(range, sourceRange){
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange, true).build();
range.setDataValidation(rule);
}
function onEdit (){
var aCell = SpreadsheetApp.getActiveSheet().getActiveCell();
var aColumn = aCell.getColumn();
if (aColumn == 1 && SpreadsheetApp.getActiveSheet()){
var range = SpreadsheetApp.getActiveSheet().getRange(aCell.getRow(), aColumn + 1);
var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
depDrop_(range, sourceRange);
}
else if (aColumn == 2 && SpreadsheetApp.getActiveSheet()){
var range = SpreadsheetApp.getActiveSheet().getRange(aCell.getRow(), aColumn + 1);
var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
depDrop_(range, sourceRange);
}

//if (aColumn == 8 && SpreadsheetApp.getActiveSheet()){
//var range = SpreadsheetApp.getActiveSheet().getRange(aCell.getRow(), aColumn + 1);
//var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
//depDrop_(range, sourceRange);
//}
//else if (aColumn == 9 && SpreadsheetApp.getActiveSheet()){
//var range = SpreadsheetApp.getActiveSheet().getRange(aCell.getRow(), aColumn + 1);
//var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(aCell.getValue());
//depDrop_(range, sourceRange);
//}
}



function DROPDOWNLISTS() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N:N').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('101:101').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('GROUPS');
  spreadsheet.getRange('B1:D1').activate()
  .mergeAcross();
  spreadsheet.getCurrentCell().setValue('SUBGROUPS');
  spreadsheet.getRange('E1:M1').activate()
  .mergeAcross();
  spreadsheet.getCurrentCell().setValue('SUB-SUBGROUPS');
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setHorizontalAlignment('center');
  spreadsheet.getRange('A2').activate();
  spreadsheet.getCurrentCell().setValue('MAIN');
  spreadsheet.getRange('B2').activate();
  spreadsheet.getCurrentCell().setValue('AAAA');
  spreadsheet.getRange('C2').activate();
  spreadsheet.getCurrentCell().setValue('BBBB');
  spreadsheet.getRange('D2').activate();
  spreadsheet.getCurrentCell().setValue('CCCC');
  spreadsheet.getRange('E2').activate();
  spreadsheet.getCurrentCell().setValue('AAA');
  spreadsheet.getRange('F2').activate();
  spreadsheet.getCurrentCell().setValue('AAB');
  spreadsheet.getRange('G2').activate();
  spreadsheet.getCurrentCell().setValue('AAC');
  spreadsheet.getRange('H2').activate();
  spreadsheet.getCurrentCell().setValue('BBB');
  spreadsheet.getRange('I2').activate();
  spreadsheet.getCurrentCell().setValue('BBC');
  spreadsheet.getRange('J2').activate();
  spreadsheet.getCurrentCell().setValue('BBD');
  spreadsheet.getRange('K2').activate();
  spreadsheet.getCurrentCell().setValue('CCC');
  spreadsheet.getRange('L2').activate();
  spreadsheet.getCurrentCell().setValue('CCD');
  spreadsheet.getRange('M2').activate();
  spreadsheet.getCurrentCell().setValue('CCE');
  spreadsheet.getRange('A3').activate();
  spreadsheet.getCurrentCell().setValue('AAAA');
  spreadsheet.getRange('A4').activate();
  spreadsheet.getCurrentCell().setValue('BBBB');
  spreadsheet.getRange('A5').activate();
  spreadsheet.getCurrentCell().setValue('CCCC');
  spreadsheet.getRange('B3').activate();
  spreadsheet.getCurrentCell().setValue('AAAA')
  .setValue('AAA');
  spreadsheet.getRange('B4').activate();
  spreadsheet.getCurrentCell().setValue('AAB');
  spreadsheet.getRange('B5').activate();
  spreadsheet.getCurrentCell().setValue('AAC');
  spreadsheet.getRange('C3').activate();
  spreadsheet.getCurrentCell().setValue('BBB');
  spreadsheet.getRange('C4').activate();
  spreadsheet.getCurrentCell().setValue('BBC');
  spreadsheet.getRange('C5').activate();
  spreadsheet.getCurrentCell().setValue('BBD');
  spreadsheet.getRange('D3').activate();
  spreadsheet.getCurrentCell().setValue('CCC');
  spreadsheet.getRange('D4').activate();
  spreadsheet.getCurrentCell().setValue('CCD');
  spreadsheet.getRange('D5').activate();
  spreadsheet.getCurrentCell().setValue('CCE');
  spreadsheet.getRange('E3').activate();
  spreadsheet.getCurrentCell().setValue('A1');
  spreadsheet.getRange('E4').activate();
  spreadsheet.getCurrentCell().setValue('A2');
  spreadsheet.getRange('E5').activate();
  spreadsheet.getCurrentCell().setValue('A3');
  spreadsheet.getRange('F3').activate();
  spreadsheet.getCurrentCell().setValue('A4');
  spreadsheet.getRange('F4').activate();
  spreadsheet.getCurrentCell().setValue('A5');
  spreadsheet.getRange('F5').activate();
  spreadsheet.getCurrentCell().setValue('A6');
  spreadsheet.getRange('G3').activate();
  spreadsheet.getCurrentCell().setValue('A7');
  spreadsheet.getRange('G4').activate();
  spreadsheet.getCurrentCell().setValue('A8');
  spreadsheet.getRange('G5').activate();
  spreadsheet.getCurrentCell().setValue('A9');
  spreadsheet.getRange('H3').activate();
  spreadsheet.getCurrentCell().setValue('b1')
  .setValue('B1');
  spreadsheet.getRange('H4').activate();
  spreadsheet.getCurrentCell().setValue('B2');
  spreadsheet.getRange('H5').activate();
  spreadsheet.getCurrentCell().setValue('B3');
  spreadsheet.getRange('I3').activate();
  spreadsheet.getCurrentCell().setValue('B4');
  spreadsheet.getRange('I4').activate();
  spreadsheet.getCurrentCell().setValue('B5');
  spreadsheet.getRange('I5').activate();
  spreadsheet.getCurrentCell().setValue('B6');
  spreadsheet.getRange('J3').activate();
  spreadsheet.getCurrentCell().setValue('B7');
  spreadsheet.getRange('J4').activate();
  spreadsheet.getCurrentCell().setValue('B8');
  spreadsheet.getRange('J5').activate();
  spreadsheet.getCurrentCell().setValue('B9');
  spreadsheet.getRange('K3').activate();
  spreadsheet.getCurrentCell().setValue('C1');
  spreadsheet.getRange('K4').activate();
  spreadsheet.getCurrentCell().setValue('C2');
  spreadsheet.getRange('K5').activate();
  spreadsheet.getCurrentCell().setValue('C3');
  spreadsheet.getRange('L3').activate();
  spreadsheet.getCurrentCell().setValue('C4');
  spreadsheet.getRange('L4').activate();
  spreadsheet.getCurrentCell().setValue('C5');
  spreadsheet.getRange('L5').activate();
  spreadsheet.getCurrentCell().setValue('C6');
  spreadsheet.getRange('M3').activate();
  spreadsheet.getCurrentCell().setValue('C7');
  spreadsheet.getRange('M4').activate();
  spreadsheet.getCurrentCell().setValue('C8');
  spreadsheet.getRange('M5').activate();
  spreadsheet.getCurrentCell().setValue('C9');
  spreadsheet.getRange('A:A').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().setColumnWidths(1, 13, 50);
  spreadsheet.getActiveSheet().setColumnWidths(1, 13, 70);
  spreadsheet.getActiveRangeList().setHorizontalAlignment('center')
  .setFontWeight(null)
  .setFontWeight('bold');
  spreadsheet.getRange('A1').activate();
  spreadsheet.getActiveSheet().setFrozenRows(2);
  spreadsheet.getRange('A1:A5').activate();
  spreadsheet.getActiveRangeList().setBackground('#00ff00');
  spreadsheet.getRange('B1:D1').activate();
  spreadsheet.getActiveRangeList().setBackground('#ffff00');
  spreadsheet.getRange('E1:M1').activate();
  spreadsheet.getActiveRangeList().setBackground('#00ffff');
  spreadsheet.getRange('B2:D5').activate();
  spreadsheet.getActiveRangeList().setBackground('#d5a6bd');
  spreadsheet.getRange('E2:G5').activate();
  spreadsheet.getActiveRangeList().setBackground('#fce5cd');
  spreadsheet.getRange('H2:J5').activate();
  spreadsheet.getActiveRangeList().setBackground('#ff9900');
  spreadsheet.getRange('K2:M5').activate();
  spreadsheet.getActiveRangeList().setBackground('#ff00ff');
  spreadsheet.setNamedRange('MAIN', spreadsheet.getRange('A3:A100'));
  spreadsheet.setNamedRange('AAAA', spreadsheet.getRange('B3:B100'));
  spreadsheet.setNamedRange('BBBB', spreadsheet.getRange('C3:C100'));
  spreadsheet.setNamedRange('CCCC', spreadsheet.getRange('D3:D100'));
  spreadsheet.setNamedRange('AAA', spreadsheet.getRange('E3:M3'));
  spreadsheet.setNamedRange('AAB', spreadsheet.getRange('F3:F100'));
  spreadsheet.setNamedRange('AAC', spreadsheet.getRange('G3:G100'));
  spreadsheet.setNamedRange('BBB', spreadsheet.getRange('H3:H100'));
  spreadsheet.setNamedRange('BBC', spreadsheet.getRange('I3:I100'));
  spreadsheet.setNamedRange('BBD', spreadsheet.getRange('J3:J100'));
  spreadsheet.setNamedRange('CCC', spreadsheet.getRange('C3:C100'));
  spreadsheet.getRange('C3:C100').activate();
  spreadsheet.setNamedRange('CCC', spreadsheet.getRange('K3:K100'));
  spreadsheet.setNamedRange('CCD', spreadsheet.getRange('L3:L100'));
  spreadsheet.setNamedRange('CCE', spreadsheet.getRange('M3:M100'));
  spreadsheet.getRange('E3:M3').activate();
  spreadsheet.setNamedRange('AAA', spreadsheet.getRange('E3:E100'));
  spreadsheet.insertSheet(1);
  spreadsheet.getRange('D:D').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('101:101').activate();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('A3').activate();
  spreadsheet.getRange('Sheet2!A1:A100').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(true)
  .requireValueInRange(spreadsheet.getRange('Sheet1!$A$3:$A'), true)
  .build());
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Sheet2'), true);
};
