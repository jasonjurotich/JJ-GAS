


var ID = 'sheetID';

function onAddToSpace(e) {
var s = SpreadsheetApp.openById(ID).getSheets()[0];  
var int = s.getRange('A1').getValue(); 
return {"text": int};  
} 
   

function onMessage(e) {
var s = SpreadsheetApp.openById(ID).getSheets()[0];    
var mod = s.getRange('A2').getValue();   
var met = s.getRange('A3').getValue();   
var pre = s.getRange('A4').getValue();   
     
var m = e.message.text;
var email = e.user.email; 
    
  if (m.indexOf('modelos') > -1 && m.indexOf('asus') < 0 && m.indexOf('acer') < 0 && m.indexOf('hp') < 0 && m.indexOf('ctl') < 0){
   return {"text": mod};
  }
  
  else if (m.indexOf('cuesta') > -1 || m.indexOf('precio') > -1){
   return {"text": mod};
  }
  
  else if (m.indexOf('métodos de pago') > -1 || m.indexOf('metodos de pago') > -1){
   return {"text": met};
  }
  
  else if (m.indexOf('preguntas') > -1 || m.indexOf('metodos de pago') > -1){
   return {"text": pre};
  }
  
  else if (m.indexOf('referencia') > -1){
   var d = s.getDataRange().getValues();
   var ar = [];
   d.forEach(function(r){
     if (r[3] !== '' && r[4] !== ''){
      ar.push([r[3],r[4]]);
       }
    });
    if (ar[0][0] === email){
   return {"text": ar[0][1]};
    } 
  }
return {"text": "Done."};   
}




