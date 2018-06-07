function StartProcess (){
createTrigger_("addStudentsOverSix",10);
addStudentsOverSix();
}


function addStudentsOverSix(){
var s = SpreadsheetApp.getActiveSpreadsheet();
var ch = s.getSheetByName('CACHE');  
var elapsedTime, startTime = +new Date();
var i = ch.getRange('A1').getValue() || 0;

for (; i<1000; i++){ 
  
var sh = s.getSheetByName('CLASS');
var r = sh.getDataRange();
var n = r.getNumRows();
var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; if(i==''){continue;}  

else if (i=='M'){    
    
 var s = SpreadsheetApp.getActiveSpreadsheet();
 var sh = s.getSheetByName('STUDENT');
 var lr = sh.getLastRow();
 var a = sh.getRange(d[x][10] + lr).getValues();
 var b = [].concat.apply([], a); 
  for (k=0; k<a.length; k++){
    var list = b[k];
    if (b[k] !== ""){  
    try {  
    Classroom.Courses.Students.create({userId: list,}, d[x][8]);  
    }
    catch (e){continue;} 
    }       
  }
}}
    
elapsedTime =  +new Date() -  startTime;
    if (elapsedTime>300000){
    ch.getRange('A1').setValue(i);
    return;
    }      
};
  deleteTriggers_();     
} 


function deleteTriggers_() {
var triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function (trigger) {ScriptApp.deleteTrigger(trigger);   
  Utilities.sleep(1000);                                    
  });  
};


function createTrigger_(funcName,minutes) {
deleteTriggers_();
ScriptApp.newTrigger(funcName).timeBased().everyMinutes(minutes).create();  
}
