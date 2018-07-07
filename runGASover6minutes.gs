

function over6 (){
createTrigger_("assign6",10);
assign6();
}


function assign6(){
var sh = SpreadsheetApp.getActiveSpreadsheet();
var ch = sh.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var t = ch.getRange('A1').getValue() || 0;
  for (; t<1000; t++){ 

   FUNCTION_TO_RUN_HERE();

elapsedTime =  +new Date() -  startTime;
if (elapsedTime>300000){ ch.getRange('A1').setValue(t);return; }  
    
};
  deleteTriggers_();     
} 
 
 
function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) { ScriptApp.deleteTrigger(trigger); Utilities.sleep(1000); });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}

