function onOpen() {
  var menuEntries = [];
  menuEntries.push({name:"FORM", functionName: "CreateFormfromSheet"});
  SpreadsheetApp.getActiveSpreadsheet().addMenu("SCRIPTS", menuEntries);
}

function CreateFormfromSheets() {
var s = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getActiveSheet();

// var s = SpreadsheetApp.getActiveSpreadsheet().getSheets();
// for (var k=0; k<s.length; k++) {  
// var sh = s[k];
	
	
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
   
var folder = DriveApp.getFolderById(d[0][3]);
var createForm = DriveApp.getFileById(d[0][6]).makeCopy(d[0][1], folder).getId();
var form = FormApp.openById(createForm);
form.setDescription(d[1][1]);

  
  
for(var i=0;i<n;i++){
  var id = d[i][0];  
  
  if (id=='CHECKBOX') {  
          var its = form.getItems();
              for (var w = 0; w < its.length; w += 1){
                 var ite = its[w];
                 if (ite.getTitle() === "CH"){
          var dup = ite.asCheckboxItem().duplicate();
          var q = dup.setTitle(d[i][1]).setHelpText(d[i][2]).setRequired(true).setPoints(d[i][3]);  
          
          if (d[i][22] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false),q.createChoice(d[i][21], false),q.createChoice(d[i][22], false)]);}
          else if (d[i][21] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false),q.createChoice(d[i][21], false)]);}
          else if (d[i][20] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false)]);}  
          else if (d[i][19] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false)]);} 
          else if (d[i][18] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false)]);}
          else if (d[i][17] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false)]);}
          else if (d[i][16] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false)]);}
          else if (d[i][15] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false)]);}
          else if (d[i][14] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false)]);}
          else if (d[i][13] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false)]);}
          else if (d[i][12] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false)]);}
          else if (d[i][11] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false)]);}
          else if (d[i][10] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false)]);}
          else if (d[i][9] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false)]);}               
          
          if (d[i][4] !== ""){
            var correctFeedback = FormApp.createFeedback().setText(d[i][4]).build();
            q.setFeedbackForCorrect(correctFeedback);
          }
          if (d[i][5] !== ""){
            var incorrectFeedback = FormApp.createFeedback().setText(d[i][5]).addLink(d[i][6],d[i][7]).build();
            q.setFeedbackForIncorrect(incorrectFeedback);
          }  
  
                 }}
   }
  
   else if (id=='LIST') {  
          var its = form.getItems();
              for (var w = 0; w < its.length; w += 1){
                 var ite = its[w];
                 if (ite.getTitle() === "LI"){
          var dup = ite.asListItem().duplicate();
          var q = dup.setTitle(d[i][1]).setHelpText(d[i][2]).setRequired(true).setPoints(d[i][3]);  
          
          if (d[i][22] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false),q.createChoice(d[i][21], false),q.createChoice(d[i][22], false)]);}
          else if (d[i][21] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false),q.createChoice(d[i][21], false)]);}
          else if (d[i][20] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false),q.createChoice(d[i][20], false)]);}  
          else if (d[i][19] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false),
            q.createChoice(d[i][19], false)]);} 
          else if (d[i][18] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false),q.createChoice(d[i][18], false)]);}
          else if (d[i][17] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false),q.createChoice(d[i][17], false)]);}
          else if (d[i][16] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false),q.createChoice(d[i][16], false)]);}
          else if (d[i][15] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false),
            q.createChoice(d[i][15], false)]);}
          else if (d[i][14] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false),q.createChoice(d[i][14], false)]);}
          else if (d[i][13] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false),q.createChoice(d[i][13], false)]);}
          else if (d[i][12] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false),q.createChoice(d[i][12], false)]);}
          else if (d[i][11] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false),
            q.createChoice(d[i][11], false)]);}
          else if (d[i][10] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false),q.createChoice(d[i][10], false)]);}
          else if (d[i][9] !== undefined) {
            q.setChoices([q.createChoice(d[i][8], true),q.createChoice(d[i][9], false)]);}               
          
          if (d[i][4] !== ""){
            var correctFeedback = FormApp.createFeedback().setText(d[i][4]).build();
            q.setFeedbackForCorrect(correctFeedback);
          }
          if (d[i][5] !== ""){
            var incorrectFeedback = FormApp.createFeedback().setText(d[i][5]).addLink(d[i][6],d[i][7]).build();
            q.setFeedbackForIncorrect(incorrectFeedback);
          }  
  
                 }}
      }  
  
     else if (id=='TEXT') {
              var txt = form.addTextItem().setTitle(d[i][1]).setHelpText(d[i][2]).setRequired(true).setPoints(d[i][3]);                               
              var textValidation = FormApp.createTextValidation().requireTextMatchesPattern(d[i][8]).build();
                  txt.setValidation(textValidation);         
              if (d[i][5] != ""){
              var feedBack = FormApp.createFeedback().setText(d[i][5]).addLink(d[i][6],d[i][7]).build();
                 txt.setGeneralFeedback(feedBack);
                 }
              }
  
    else if (id=='TITLE') {
              form.addSectionHeaderItem().setTitle(d[i][1]).setHelpText(d[i][2]);
              }

  
} //This is the for loop.

var iti = form.getItems();
for (var y = 0; y < iti.length; y += 1){
var ito = iti[y];
if (ito.getTitle() === "CH"){
form.deleteItem(ito);
}
else if (ito.getTitle() === "LI"){
form.deleteItem(ito);
}
}

// }
}
