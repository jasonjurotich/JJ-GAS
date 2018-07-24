

function GETDOMAIN(email){
  return email.substring(email.lastIndexOf("@")+1);
}


function GETEMAIL(email){
  return email.replace(/@.*$/,"");
}


function SUB(i){
  
var replaceChars={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","ü":"u","Ü":"U","ñ":"n","Ñ":"N", 
                  "MA. DE LOS ":" ","MA. DE LAS ":" "," MA. DE LOS ":" "," MA. DE LAS ":" "," MA. DE ":" ","MA. DE ":" ",
                  " DE LOS ":" "," DE LAS ":" "," LOS ":" "," LAS ":" "," MA ":""," DE ":" "," DEL ":" "," LA ":" ",
                  "ma. de los ":" ","ma. de las ":" "," ma. de los ":" "," ma. de las ":" "," ma. de ":" ","ma. de ":" ",
                  " de los ":" "," de las ":" "," los ":" "," las ":" "," ma ":""," de ":" "," del ":" "," la ":" ",", ":" "};
  
return i.replace(/á|é|í|ó|ú|Á|É|Í|Ó|Ú|ü|Ü|ñ|Ñ|MA. DE LOS |MA. DE LAS |MA. DE | MA. DE LOS | MA. DE LAS | MA. DE |MA. DE | DE LOS | DE LAS | LOS | LAS | MA | DE | DEL | LA |ma. de los |ma. de las |ma. de | ma. de los | ma. de las | ma. de |ma. de | de los | de las | los | las | ma | de | del | la s|, /gi,function(match) {return replaceChars[match];});

}


