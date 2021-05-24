var ID = '1IYtN0qfTwwql7mihJsiYvUGpZcBlesbsqsE-Efgkt-Q';

function onOpen() {
  var menu = SpreadsheetApp.getUi()
    .createMenu('Forms');

  menu.addItem(
    'CREATE TEMPLATE', 
    'createTemplate')
    .addToUi();

  menu.addItem(
    'CREATE FORM', 
    'createForm')
    .addToUi();

  menu.addItem(
    'CREATE FORMS', 
    'createForms')
    .addToUi();
}


function createTemplate() {
  var s = SpreadsheetApp
    // .getActiveSpreadsheet()
    .openById(ID)
    .getActiveSheet();

  s.deleteColumns(17, 8);
  s.deleteRows(100,900);
  s.setColumnWidth(1, 110);
  s.setColumnWidth(2, 400);
  s.setColumnWidths(3, 16, 110);
  s.setFrozenColumns(2);
  s.setFrozenRows(3);

  s.getRange('A4:A100')
    .setDataValidation(
      SpreadsheetApp
        .newDataValidation()
        .setAllowInvalid(false)
        .requireValueInList([
          'ACCEPTANCE', 
          'CHECKBOX', 
          'CHECKGRID', 
          'CHOICE', 
          'DATE', 
          'GRID', 
          'IMAGE1', 
          'IMAGE2', 
          'LIST', 
          'PAGE', 
          'PARAGRAPH', 
          'SCALE', 
          'SECTION', 
          'TEXT', 
          'TIME', 
          'VIDEO'
          ], 
          true
        ).build()
    );

  s.getRange('A1:A100')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');

  s.getRange('A1')
    .setValue('EXERCISE');

  s.getRange('A2')
    .setValue('DESCRIBE');

  s.getRange('A3')
    .setValue('TYPE');

  s.getRange('C1')
    .setValue('FOLDER ID:')
    .setFontWeight('bold')
    .setHorizontalAlignment('right');

  s.getRange('E1')
    .setValue('PUBLIC URL:')
    .setFontWeight('bold')
    .setHorizontalAlignment('right');

  s.getRange('G1')
    .setValue('COPY FORM:')
    .setFontWeight('bold')
    .setHorizontalAlignment('right');

  s.getRange('H1')
    .setDataValidation(
      SpreadsheetApp
        .newDataValidation()
        .setAllowInvalid(false)
        .requireValueInList(
          ['YES'], 
          true
        ).build()
    );

  s.getRange('I1')
    .setValue('LINK COPY:')
    .setFontWeight('bold')
    .setHorizontalAlignment('right');

  s.getRange('K1')
    .setValue('SHUFFLE:')
    .setFontWeight('bold')
    .setHorizontalAlignment('right');

  s.getRange('L1')
    .setDataValidation(
      SpreadsheetApp
        .newDataValidation()
        .setAllowInvalid(false)
        .requireValueInList(
          ['YES'], 
          true).build()
    );

  s.getRange('B3')
    .setValue('QUESTION')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');

  s.getRange('C3')
    .setValue('INSTRUCTIONS')
    .setFontWeight('bold')
    .setBackground('#c4daea')
    .setHorizontalAlignment('center');

  s.getRange('D3')
    .setValue('POINTS')
    .setFontWeight('bold')
    .setBackground('#ffff66')
    .setHorizontalAlignment('center');

  s.getRange('E3')
    .setValue('TEXT TRUE')
    .setFontWeight('bold')
    .setBackground('#00ffff')
    .setHorizontalAlignment('center');

  s.getRange('F3')
    .setValue('TEXT FALSE')
    .setFontWeight('bold')
    .setBackground('#00ffff')
    .setHorizontalAlignment('center');

  s.getRange('G3')
    .setValue('LINK')
    .setFontWeight('bold')
    .setBackground('#00ffff')
    .setHorizontalAlignment('center');

  s.getRange('H3')
    .setValue('LINK TEXT')
    .setFontWeight('bold')
    .setBackground('#00ffff')
    .setHorizontalAlignment('center');

  s.getRange('I3:R3')
    .setValue('OPTION')
    .setFontWeight('bold')
    .setBackground('#d4dee5')
    .setHorizontalAlignment('center');

  s.getRange('E4:H100')
    .setBackground('#00ffff');

  s.getRange('I4:R100')
    .setBackground('#d4dee5');

  s.getRange('C4:C100')
    .setBackground('#c4daea');

  s.getRange('D4:D100')
    .setBackground('#ffff66');
}










function body(s) {
  var r = s.getDataRange();
  var nr = r.getNumRows();
  var nc = r.getNumColumns();
  var d = r.getValues();
  var fol = DriveApp
    .getFolderById(d[0][3]);
  Logger.log(d[0][3])

  if (d[0][7] === 'YES') {
    var fm = DriveApp
      .getFileById(d[0][9])
      .makeCopy(d[0][1], fol);
    var id = fm.getId();
    var f = FormApp.openById(id);
    Logger.log(id)
  } 

  else {
    var fm = FormApp.create(d[0][1]);
    var id = fm.getId();
    var f = FormApp.openById(id);
  }

  f.setDescription(d[1][1]);
  f.setIsQuiz(true);  

  var ur = f.getPublishedUrl();
  s.getRange('F1').setValue(ur);
  s.getRange('F2').setValue(id);

  var file = DriveApp
    .getFileById(id);

  fol.addFile(file);

  DriveApp
    .getRootFolder()
    .removeFile(file);
  

  for(var x=0;x<nr;x++){ // Beginning of for loop with x
    var i = d[x][0];
    var cr = 1 + x;
    var ro = s.getRange(cr, 8, 1, 10);
    var op = ro.getValues();

    if(i==''){continue;}

// CHOICE OPTION
    
    else if (i =='CHOICE') {
      var arr = [];    

      if (d[0][11] == "YES"){ 
        var its = f.getItems();
        for (
          var w = 0; 
          w < its.length; 
          w += 1
          ){ 
          var ite = its[w]; 
          if (ite.getTitle() === "CHOICE"){ 
            var q = ite
              .asMultipleChoiceItem()
              .duplicate(); 
          }
        }
     } 

      else { 
        var q = f.addMultipleChoiceItem(); 
      }
          
      q.setTitle(d[x][1])
        .setHelpText(d[x][2])
        .setRequired(true);
          
      if (d[x][3] !== ''){
        q.setPoints(d[x][3])
      }
          
      for (var ccc = 8; ccc<nc; ccc++) {
        var cu = 1 + ccc;

        if (
          s.getRange(cr,cu,1,1)
            .getValue() !== '' && 
          s.getRange(cr,cu,1,1)
            .getBackground() === "#00ff00"
          ){
          var q1 = q.createChoice(
            d[x][ccc], 
            true
          ); 
          arr.push(q1);
        } 

        else if (
          s.getRange(cr,cu,1,1)
            .getValue() !== '' && 
          s.getRange(cr,cu,1,1)
            .getBackground() !== "#00ff00"
          ){
          var q1 = q.createChoice(
            d[x][ccc], 
            false
          ); 
          arr.push(q1);
        }
        
      }
          
      q.setChoices(arr);
          
      if (d[x][4] !== ""){
        var correctFeedback = FormApp
          .createFeedback()
          .setText(d[x][4]).build();

        q.setFeedbackForCorrect(
          correctFeedback
        );
      }

      if (d[x][5] !== ""){
        var incorrectFeedback = FormApp
          .createFeedback()
          .setText(d[x][5])
          .addLink(d[x][6],d[x][7])
          .build();

        q.setFeedbackForIncorrect(
          incorrectFeedback
        );
      }   

    }
 
    else if (i =='SECTION') {
      f.addSectionHeaderItem()
        .setTitle(d[x][1])
        .setHelpText(d[x][2]);
    }
    
    else if (i =='PAGE') {
      f.addPageBreakItem()
        .setTitle(d[x][1])
        .setHelpText(d[x][2]);
    }
     
    else if(i =='ACCEPTANCE'){
      var item = f
        .addMultipleChoiceItem();

      var goSubmit = item.
        createChoice(
          'YES', 
          FormApp
            .PageNavigationType
            .SUBMIT
        );

      var goRestart = item
        .createChoice(
          'NO', 
          FormApp
            .PageNavigationType
            .RESTART
        );     

      item.setRequired(true);
      item.setTitle(d[x][1]);
      item.setHelpText(d[x][2]);

      item.setChoices([
        goSubmit,
        goRestart]
      );   
    } 
      
  } // End of principle for loop with x




  var iti = f.getItems();

  for (var y = 0; y < iti.length; y += 1){
    var ito = iti[y];

    if (ito.getTitle() === "CHOICE"){ 
      f.deleteItem(ito); 
    } 

    else if (ito.getTitle() === "LIST"){
      f.deleteItem(ito); 
    }

    else if (ito.getTitle() === "CHECKBOX"){
      f.deleteItem(ito); 
    }
  }
 
} // End of body function


function createForm() {

  var s = SpreadsheetApp
    // .getActiveSpreadsheet()
    .openById(ID)
    .getSheetByName('Sheet2');
  Logger.log(s)

  body(s); 
  return 'form created'
}


function dform(){
  var s = SpreadsheetApp
    // .getActiveSpreadsheet()
    .openById(ID)
    .getSheetByName('Sheet2');
  var r = s.getDataRange();
  var nr = r.getNumRows();
  var nc = r.getNumColumns();
  var d = r.getValues();

  var f = FormApp.openById(d[1][5]);
  var arr1 = ['a','b','c','d','e','f','g']
  const ran = arr1[
    Math.floor(
      Math.random() * arr1.length
    )
  ];

  s.getRange('C2').setValue(ran);

  var iti = f.getItems();

  for (var y = 4; y < iti.length; y += 1){
    var ito = iti[y];

    if (ito.getType() == "MULTIPLE_CHOICE"){ 
      f.deleteItem(ito); 
    } 
  } 

  var iti2 = f.getItems();
  for (var y = 0; y < iti2.length; y += 1){
    var ito2 = iti2[y];

    if (ito2.getType() == "MULTIPLE_CHOICE"){ 
      var ch = ito2.getId()
    } 
  } 


  for(var x=0;x<nr;x++){ // Beginning of for loop with x
    var i = d[x][0];
    var cr = 1 + x;
    var ro = s.getRange(cr, 8, 1, 10);
    var op = ro.getValues();

    if(i==''){continue;}

    else if (i =='CHOICE') {
      var arr2 = [];
      var q = f.getItemById(ch)
        .asMultipleChoiceItem()
        .duplicate() 
        .setTitle(d[x][1])
        .setHelpText(d[x][2])
        .setRequired(true);
          
      if (d[x][3] !== ''){
        q.setPoints(d[x][3])
      }
          
      for (var ccc = 8; ccc<nc; ccc++) {
        var cu = 1 + ccc;

        if (
          s.getRange(cr,cu,1,1)
            .getValue() !== '' && 
          s.getRange(cr,cu,1,1)
            .getBackground() === "#00ff00"
          ){
          var q1 = q.createChoice(
            d[x][ccc], 
            true
          ); 
          arr2.push(q1);
        } 

        else if (
          s.getRange(cr,cu,1,1)
            .getValue() !== '' && 
          s.getRange(cr,cu,1,1)
            .getBackground() !== "#00ff00"
          ){
          var q1 = q.createChoice(
            d[x][ccc], 
            false
          ); 
          arr2.push(q1);
        }
        
      }
          
      q.setChoices(arr2);
          
      if (d[x][4] !== ""){
        var correctFeedback = FormApp
          .createFeedback()
          .setText(d[x][4]).build();

        q.setFeedbackForCorrect(
          correctFeedback
        );
      }

      if (d[x][5] !== ""){
        var incorrectFeedback = FormApp
          .createFeedback()
          .setText(d[x][5])
          .addLink(d[x][6],d[x][7])
          .build();

        q.setFeedbackForIncorrect(
          incorrectFeedback
        );
      } 
    }  
  }

  f.deleteItem(f.getItemById(ch));
 
  var iti3 = f.getItems();

  for (let y = 0; y < iti3.length; y += 1){
    var ito3 = iti3[y];

    if (ito3.getTitle() === "FINAL"){ 
      f.moveItem(ito3,iti3.length - 1); 
    } 
  }

  return 'done';
}
