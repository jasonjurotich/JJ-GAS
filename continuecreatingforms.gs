var RUN_TIME = 5*60*1000;

function theForms() {
  var start = new Date().getTime();
  var st = SpreadsheetApp.getActiveSpreadsheet();
  var origin = st.getSheetByName("FORMS"); 
  var fol1 = st.getSheetByName("FORMS").getRange("E3").getValue();
  
  var lastRowCompleted = CacheService.getUserCache().get('lastRowCompleted');
  if (lastRowCompleted) {
    lastRowCompleted = parseInt(lastRowCompleted, 10);
    CacheService.getUserCache().remove('lastRowCompleted');
  } 
  
  else {
    lastRowCompleted = 1; 
  }
  
  var data = origin.getRange(lastRowCompleted,1,origin.getLastRow(),origin.getLastColumn()).getValues();
  var complete = true;
  var now = new Date().getTime();
  
  while (data.length && complete) {
    var thisRow = data.shift();
    var id = thisRow[0]; 
    
    if (id!='AS'){
      lastRowCompleted++;
      continue;
    } 
    
    if (id=='AS') {  
      complete = createFormsFromSheets(thisRow[3],thisRow[1], start, thisRow[4], fol1);
    }
    
    if (!complete) {
      runAgain(lastRowCompleted);
      break;
    }
    
    lastRowCompleted++;
    now = new Date().getTime();  
  } 
}


function createFormsFromSheets(sheetId, sheetNumber, start, formId, fol1) {  
  var sheet = SpreadsheetApp.openById(sheetId).getSheets()[sheetNumber]; 
  var elapsed = new Date().getTime() - start; 
  var resumePrefs = CacheService.getUserCache().get('resumePrefs');
  
  if (resumePrefs) {
    var resumePrefs = JSON.parse(resumePrefs);
    var startRow = resumePrefs.startRow;
    var form = FormApp.openById(resumePrefs.formId);
    var data2 = sheet.getRange(startRow, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
    CacheService.getUserCache().remove('resumePrefs');
  } 

  else {
    startRow = 1;
    var data2 = sheet.getRange(startRow, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
    var st = SpreadsheetApp.getActiveSpreadsheet();
    var origin = st.getSheetByName("FORMS"); 
    var folder = DriveApp.getFolderById(fol1);
    var createForm = DriveApp.getFileById('1En9Wc7_OKVcoXCA1L0SkJhjE5ve5OaL1itEnpY66Wqs').makeCopy(data2[0][1], folder).getId();
    form = FormApp.openById(createForm);
    form.setIsQuiz(true);
    form.setTitle(data2[0][1]);
    form.setDescription(data2[1][1]);
    
    var list = [];
      var row = []
       row.push(form.getId(),form.getEditUrl(),form.getPublishedUrl())
       list.push(row);
       origin.getRange(formId,6,list.length,list[0].length).setValues(list);         
  }
  
while (data2.length && elapsed < RUN_TIME){
    processQuestionType(data2.shift(),form);
    startRow++;
    elapsed = new Date().getTime() - start;
  }
  
  if (data2.length) {
    CacheService.getUserCache().put('resumePrefs',JSON.stringify({startRow: startRow, formId: form.getId()}),3600); 
    return false;
  } 
  else {
    CacheService.getUserCache().remove('resumePrefs');
    return true;
  }
}


function processQuestionType(array, form) {
  var questionType = array[0];
   var realdata = array.slice(3);
  switch (questionType) {
  
            case '': break;           
            
            case 'TITLE':{
              form.addSectionHeaderItem().setTitle(array[1]).setHelpText(array[2]);
              break;}
              
            case 'PAGE':{
              form.addPageBreakItem().setTitle(array[1]).setHelpText(array[2]);
              break;} 
                             
            case 'LIST':{
              var dup = form.addListItem();
              var q = dup.setTitle(array[1]).setHelpText(array[2]).setRequired(true).setPoints(array[3]);  
                if (array[22] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false),q.createChoice(array[21], false),q.createChoice(array[22], false)]);}
                else if (array[21] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false),q.createChoice(array[21], false)]);}
                else if (array[20] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false)]);}  
                else if (array[19] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false)]);} 
                else if (array[18] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false)]);}
                else if (array[17] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false)]);}
                else if (array[16] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false)]);}
                else if (array[15] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false)]);}
                else if (array[14] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false)]);}
                else if (array[13] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false)]);}
                else if (array[12] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false)]);}
                else if (array[11] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false)]);}
                else if (array[10] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false)]);}
                else if (array[9] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false)]);}               
                  
            if (array[4] != ""){
            var correctFeedback = FormApp.createFeedback()
               .setText(array[4])
               .build();
              q.setFeedbackForCorrect(correctFeedback);
                }
            if (array[5] != ""){
           var incorrectFeedback = FormApp.createFeedback().setText(array[5]).addLink(array[6],array[7]).build();
              q.setFeedbackForIncorrect(incorrectFeedback);
                   }        
              break;} 
      
      case 'CHECKBOX':{
              var dup = form.addCheckboxItem();
              var q = dup.setTitle(array[1]).setHelpText(array[2]).setRequired(true).setPoints(array[3]);  
                if (array[22] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false),q.createChoice(array[21], false),q.createChoice(array[22], false)]);}
                else if (array[21] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false),q.createChoice(array[21], false)]);}
                else if (array[20] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false),q.createChoice(array[20], false)]);}  
                else if (array[19] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false),
                  q.createChoice(array[19], false)]);} 
                else if (array[18] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false),q.createChoice(array[18], false)]);}
                else if (array[17] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false),q.createChoice(array[17], false)]);}
                else if (array[16] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false),q.createChoice(array[16], false)]);}
                else if (array[15] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false),
                  q.createChoice(array[15], false)]);}
                else if (array[14] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false),q.createChoice(array[14], false)]);}
                else if (array[13] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false),q.createChoice(array[13], false)]);}
                else if (array[12] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false),q.createChoice(array[12], false)]);}
                else if (array[11] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false),
                  q.createChoice(array[11], false)]);}
                else if (array[10] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false),q.createChoice(array[10], false)]);}
                else if (array[9] !== "") {
                q.setChoices([q.createChoice(array[8], true),q.createChoice(array[9], false)]);}               
                  
            if (array[4] != ""){
            var correctFeedback = FormApp.createFeedback()
               .setText(array[4])
               .build();
              q.setFeedbackForCorrect(correctFeedback);
                }
            if (array[5] != ""){
           var incorrectFeedback = FormApp.createFeedback().setText(array[5]).addLink(array[6],array[7]).build();
              q.setFeedbackForIncorrect(incorrectFeedback);
                   }      
              break;}
                         
            case 'TEXT':{
              var txt = form.addTextItem().setTitle(array[1]).setHelpText(array[2]).setRequired(true).setPoints(array[3]);
              var textValidation = FormApp.createTextValidation().requireTextMatchesPattern(array[8]).build();
                  txt.setValidation(textValidation);         
              if (array[5] != ""){
              var feedBack = FormApp.createFeedback().setText(array[5]).addLink(array[6],array[7]).build();
                 txt.setGeneralFeedback(feedBack);
                 }
              break;}
} 
}
       
     
function runAgain(lastRowCompleted) {
  CacheService.getUserCache().put('lastRowCompleted',lastRowCompleted,3600);
  var oldTrigger = PropertiesService.getScriptProperties().getProperty('runAgainTrigger');
  if (oldTrigger) {
    var triggers = ScriptApp.getProjectTriggers();
    for (i in triggers) {
      if (triggers[i].getUniqueId() == oldTrigger) {
        ScriptApp.deleteTrigger(triggers[i]);
        PropertiesService.getScriptProperties().deleteProperty('runAgainTrigger');
        break;
      }
    }
  }
  var newTrigger = ScriptApp.newTrigger('theForms').timeBased().after(4*60*1000).create();
  PropertiesService.getScriptProperties().setProperty('runAgainTrigger',newTrigger.getUniqueId());  
}


function clearCache() {
  CacheService.getUserCache().removeAll(['lastRowCompleted','resumePrefs']);
}
