

// ROUGH DRAFT


function onOpen(){ 
var s1 = SpreadsheetApp.getUi().createMenu('User'); 
s1.addItem('CREATE USER', 'createUserSCHOOL').addToUi(); 
s1.addItem('LIST USERS', 'listUserSCHOOL').addToUi();  
s1.addItem('UPDATE NAME', 'updateUserNameSCHOOL').addToUi();
s1.addItem('UPDATE EMAIL', 'updateUserEmailSCHOOL').addToUi();  
s1.addItem('CHANGE ORG', 'changeUserOrgSCHOOL').addToUi();  
s1.addItem('CHANGE PASS', 'updateUserPassSCHOOL').addToUi();
s1.addItem('ADD MEMBER', 'addGroupMemberSCHOOL').addToUi();
s1.addItem('MOVE MEMBER', 'moveGroupMemberSCHOOL').addToUi();  
s1.addItem('SUSPEND USER', 'suspendUserSCHOOL').addToUi();
s1.addItem('CREATE GROUP', 'createGroupSCHOOL').addToUi();
s1.addItem('LIST GROUPS', 'listGroupSCHOOL').addToUi();
s1.addItem('EDIT GROUP CONFIG', 'editGroupConfigSCHOOL').addToUi();
s1.addItem('EDIT GROUP INFO', 'editGroupInfoSCHOOL').addToUi();
s1.addItem('DELETE GROUP','deleteGroupSCHOOL').addToUi();  
s1.addItem('LIST USERS GROUPS', 'listUsersInGroupSCHOOL').addToUi();  
s1.addItem('CREATE ORG', 'createOrgSCHOOL').addToUi();
s1.addItem('LIST ORGS', 'listOrgSCHOOL').addToUi();  
s1.addItem('EDIT ORG', 'editOrgSCHOOL').addToUi();
s1.addItem('DELETE ORG', 'deleteOrgSCHOOL').addToUi(); 
s1.addItem('LIST CHROMEOS', 'listChromeOsSCHOOL').addToUi();
s1.addItem('MOVE CHROMEOS', 'moveChromeOsSCHOOL').addToUi();  
s1.addItem('EDIT CHROMEOS', 'editChromeOsSCHOOL').addToUi();
s1.addItem('SUSPEND CHROMEOS', 'suspendChromeOsSCHOOL').addToUi();   

var s2 = SpreadsheetApp.getUi().createMenu('Class'); 
s2.addItem('CREATE COURSE', 'createCourseSCHOOL').addToUi();
s2.addItem('LIST COURSES', 'listCourseSCHOOL').addToUi();
s2.addItem('UPDATE COURSE', 'updateCourseSCHOOL').addToUi();
s2.addItem('CHANGE COURSE STATE', 'changeStateSCHOOL').addToUi();
s2.addItem('CHANGE OWNER', 'changeOwnerSCHOOL').addToUi();
s2.addItem('DELETE COURSE', 'deleteCourseSCHOOL').addToUi();
s2.addItem('ADD STUDENT', 'addStudentSCHOOL').addToUi();
s2.addItem('ADD TEACHER', 'addTeacherSCHOOL').addToUi();
s2.addItem('ADD ST/TE', 'addStudentTeacherSCHOOL').addToUi();
s2.addItem('DELETE STUDENT', 'deleteStudentSCHOOL').addToUi();
s2.addItem('DELETE TEACHER', 'deleteTeacherSCHOOL').addToUi();
s2.addItem('LIST STUDENT', 'listStudentSCHOOL').addToUi();
s2.addItem('LIST TEACHER', 'listTeacherSCHOOL').addToUi();
s2.addItem('ADD ASSIGN', 'addAssignmentSCHOOL').addToUi();
s2.addItem('LIST ASSIGN', 'listAssignmentSCHOOL').addToUi();
s2.addItem('LIST ALL ASSIGN', 'listAllAssignmentSCHOOL').addToUi();
s2.addItem('DELETE ASSIGN', 'deleteAssignmentSCHOOL').addToUi();

var s3 = SpreadsheetApp.getUi().createMenu('System'); 
s3.addItem('CREATE TEMPLATE', 'createTemplate').addToUi(); 
s3.addItem('ADD SHEETS', 'addSheets').addToUi(); 
s3.addItem('EDIT FORM', 'editForm').addToUi(); 
s3.addItem('DELETE SHEETS', 'deleteSheets').addToUi(); 
s3.addItem('CREATE TRIGGERS', 'createTriggers').addToUi(); 
s3.addItem('LIST CALS', 'listCalSCHOOL').addToUi(); 
s3.addItem('EDIT CALS', 'editCalSCHOOL').addToUi(); 
}



function createTemplate(){
var folder = DriveApp.getFolderById('ID');
var form = FormApp.openById('ID').getId();
var sh = SpreadsheetApp
    .openById('ID')
    .getSheetByName('ADMIN');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=1; x<n; x++){ var i = d[x][0];  var l = 1 + x; if (i === 'x') {
var createForm = DriveApp.getFileById(form).makeCopy(d[x][1], folder).getId();
var f = FormApp.openById(createForm); var arr = [];
  arr.push([f.getId(), f.getEditUrl(), f.getPublishedUrl()]);
  sh.getRange(l, 3, arr.length, arr[0].length).setValues(arr);
var ss = SpreadsheetApp.create(d[x][1]); var ssid = ss.getId();
var sf =  DriveApp.getFileById(ssid);
DriveApp.getFolderById(folder.getId()).addFile(sf);
DriveApp.getRootFolder().removeFile(sf);
f.setDestination(FormApp.DestinationType.SPREADSHEET, ssid);
sh.getRange(l,6).setValue(ssid);
sh.getRange(l,1).setValue('');
  }
 }
}


function editForm(){

}



function ceateTriggers(){

}


function addSheets(){
var sh1 = SpreadsheetApp.openById('ID');
var r = sh1.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=1; x<n; x++){ var i = d[x][0];  var l = 1 + x; if (i === 'x') {
  var sh = SpreadsheetApp.openById(d[x][5]);
  var sn = sh.getName();
  var sname = sn.split(" ").pop();
  var cu = sh.getSheets()[1]; cu.insertColumns(26,4);  
   var cuname =  cu.setName('CUSER');
    cu.setFrozenRows(1); cu.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    cu.getRange('A1').setValue('COMPLETE NAMES'); cu.getRange('B1')
      .setValue('FIRST NAMES'); cu.getRange('C1').setValue('LAST NAMES'); 
    cu.getRange('D1').setValue('FIRST NAME'); cu.getRange('E1')
      .setValue('SECOND NAME'); cu.getRange('F1').setValue('THIRD NAME'); 
    cu.getRange('G1').setValue('FOURTH NAME'); cu.getRange('H1')
      .setValue('CONCATENATE'); cu.getRange('I1').setValue('FILTER'); 
    cu.getRange('J1').setValue('DEYMA'); cu.getRange('K1').setValue('SPLIT');  
    cu.getRange('K1:P1').mergeAcross(); 
    cu.getRange('Q1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['FIRST','LAST'],true).build()); 
    cu.getRange('Q1:T1').mergeAcross(); 
    cu.getRange('U1').setValue('FIRST NAME'); cu.getRange('V1')
      .setValue('LAST NAME'); cu.getRange('W1').setValue('USER');  
    cu.getRange('Y1').setValue('PASSWORD'); cu.getRange('Z1').setValue('ORG'); 
    cu.getRange('AA1').setValue('GROUP');
    cu.getRange('AB1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    cu.getRange('AC1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    cu.getRange('AD1').setValue('DO'); 
    cu.setColumnWidth(1,350); cu.setColumnWidth(2,250); cu.setColumnWidth(3,250); 
    cu.setColumnWidth(4,130); cu.setColumnWidth(5,130); cu.setColumnWidth(6,130); 
    cu.setColumnWidth(7,130); cu.setColumnWidth(8,350); cu.setColumnWidth(9,350);
    cu.setColumnWidth(10,350); cu.setColumnWidth(21,200); cu.setColumnWidth(22,200); 
    cu.setColumnWidth(23,200); cu.setColumnWidth(24,300); cu.setColumnWidth(25,200); 
    cu.setColumnWidth(26,350); cu.setColumnWidth(27,250); cu.setColumnWidth(28,100); 
    cu.setColumnWidth(29,100); cu.setColumnWidth(30,40);    
    cu.getRange('H2').setFormula('=UPPER(IF(B2<>"",CONCATENATE(B2," ",C2),IF(D2<>"",CONCATENATE(D2," ",E2," ",F2," ",G2),A2)))');
    cu.getRange('I2').setFormula('=TRIM(UPPER(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(H2,".",""),"Á","A"),"É","E"),"Í","I"),"Ó","O"),"Ú","U"),"Ü","U"),"Ñ","N"),"MA DE LOS "," ")," MA DE LOS "," "),"MA DEL "," ")," MA DEL "," ")," DE LOS "," ")," DE LA "," ")," DE LAS "," ")," DEL "," ")," LAS "," ")," LOS "," ")," LA "," ")," DE "," ")," MA "," "),", "," "),","," ")))');
    cu.getRange('J2').setFormula('=IF(SUM(COUNTIF(I2,"DEL*"))>0,SUBSTITUTE(I2,"DEL ",""),IF(SUM(COUNTIF(I2,"DE*"))>0,SUBSTITUTE(I2,"DE ",""),IF(SUM(COUNTIF(I2,"MA*"))>0,SUBSTITUTE(I2,"MA ",""),I2)))');
    cu.getRange('K2').setFormula('=IFERROR(SPLIT(J2," ",),"")');
    cu.getRange('Q2').setFormula('=IF(AND($Q$1="FIRST",$P2<>""),ARRAYFORMULA({$K2:$L2,$N2:$O2}),(IF(AND($Q$1="FIRST",$N2=""),ARRAYFORMULA({$K2,$N2,$L2:$M2}),(IF(AND($Q$1="FIRST",$N2<>""),ARRAYFORMULA({$K2:$L2,$M2:$N2}),(IF(AND($Q$1="LAST",$P2<>""),ARRAYFORMULA({$N2:$O2,$K2:$L2}),(IF(AND($Q$1="LAST",$N2=""),ARRAYFORMULA({$M2:$N2,$K2:$L2}),(IF(AND($Q$1="LAST",$N2<>""),ARRAYFORMULA({$M2:$N2,$K2:$L2}),"")))))))))))');
    cu.getRange('U2').setFormula('=TRIM(PROPER(CONCATENATE(Q2," ",R2)))');
    cu.getRange('V2').setFormula('=TRIM(PROPER(CONCATENATE(S2," ",T2)))');
    cu.getRange('W2').setFormula('=TRIM(LOWER(CONCATENATE(Q2,S2,LEFT(T2,1))))');
    cu.getRange('X2').setFormula('=IF(U2<>"",CONCATENATE(W2,"@",$X$1),"")');
    cu.getRange('Y2').setFormula('=IF(X2<>"", CONCATENATE(W2,12345),"")'); 
    cu.getRange('AA2').setFormula('=IF(Z2<>"",LOWER(TRIM(CONCATENATE(SUBSTITUTE(RIGHT(Z2,10)," ",""),$X$1))),"")');
    cu.getRange('A2:AD2').autoFill(cu.getRange('A2:AD1000'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    
   

  var lu = sh.insertSheet().activate(); 
    lu.setName('LUSER').setFrozenRows(1); lu.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lu.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lu.getRange('A1').setValue('DO'); lu.getRange('B1').setValue('FIRST');  
    lu.getRange('C1').setValue('LAST'); lu.getRange('D1').setValue('EMAIL'); 
    lu.getRange('E1').setValue('PASS'); lu.getRange('F1').setValue('ORG'); 
    lu.getRange('G1').setValue('ID'); lu.getRange('H1').setValue('SUSPEND'); 
    lu.getRange('I1').setValue('CHANGEPASS'); lu.getRange('J1').setValue('GLOBAL'); 
    lu.getRange('H2').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    lu.getRange('I2').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    lu.getRange('J2').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build());  
    lu.getRange('H3').setFormula('=$H$2');lu.getRange('I3').setFormula('=$I$2');
    lu.getRange('J3').setFormula('=$J$2');
    lu.getRange('K1').setValue('GROUPTO'); lu.getRange('L1').setValue('GROUPFROM');
    lu.getRange('H3:J3').autoFill(lu.getRange('H3:J1000'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    lu.getRange('L2').setFormula('=IF(F2<>"",LOWER(TRIM(CONCATENATE(SUBSTITUTE(RIGHT(F2,10)," ",""),CUSER!$X$1))),"")');
    lu.getRange('L2').autoFill(lu.getRange('L2:L1000'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    lu.setColumnWidth(1,40) ;lu.setColumnWidth(2,200); lu.setColumnWidth(3,200); 
    lu.setColumnWidth(4,250); lu.setColumnWidth(5,250); lu.setColumnWidth(6,350);
    lu.setColumnWidth(7,100); lu.setColumnWidth(8,200); lu.setColumnWidth(9,200); 
    lu.setColumnWidth(10,100); lu.setColumnWidth(11,200); lu.setColumnWidth(12,200); 
    lu.deleteColumns(13,14); lu.setFrozenColumns(1);

  var cg = sh.insertSheet().activate();
    cg.setName('CGROUP').setFrozenRows(1); cg.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    cg.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    cg.getRange('A1').setValue('DO'); cg.getRange('B1').setValue('EMAIL');
    cg.getRange('C1').setValue('NAME'); cg.getRange('D1').setValue('DESCRIPTION');
    cg.getRange('E1').setValue('ID');    
    cg.setColumnWidth(1,40); cg.setColumnWidth(2,250); cg.setColumnWidth(3,200); 
    cg.setColumnWidth(4,200); cg.setColumnWidth(5,200); cg.deleteColumns(6,21); 
    cg.deleteRows(350,650); cg.setFrozenColumns(1);
    cg.getRange('D2').setFormula('=C2'); 
    cg.getRange('D2').autoFill(cg.getRange('D2:D350'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 

  var lg = sh.insertSheet().activate();
    lg.setName('LGROUP').setFrozenRows(1); lg.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    lg.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lg.getRange('A1').setValue('DO'); lg.getRange('B1').setValue('EMAIL'); 
    lg.getRange('C1').setValue('NAME'); lg.getRange('D1').setValue('DESCRIPT'); 
    lg.getRange('E1').setValue('ID'); lg.getRange('F1').setValue('COL'); 
    lg.setColumnWidth(1,40); lg.setColumnWidth(2,250); lg.setColumnWidth(3,200);
    lg.setColumnWidth(4,200); lg.setColumnWidth(5,200); lg.setColumnWidth(6,60);
    lg.deleteColumns(7,20); lg.deleteRows(350,650); lg.setFrozenColumns(1);

  var ug = sh.insertSheet().activate();
    ug.setName('UGROUP').setFrozenRows(1); ug.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    ug.getRange('A1').setFormula('=TRANSPOSE(LGROUP!A2:A)'); 
    ug.insertColumns(26,600); ug.setColumnWidths(1,626,250);
    ug.deleteRows(350,650);

  var co = sh.insertSheet().activate();
    co.setName('CORG').setFrozenRows(1); co.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    co.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    co.getRange('A1').setValue('DO'); 
    co.getRange('B1').setValue('NAME'); co.getRange('C1').setValue('DESCRIPTION');
    co.getRange('D1').setValue('PATH'); co.getRange('E1').setValue('PARENT PATH'); 
    co.getRange('F1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build());  
    co.setFrozenColumns(1); co.setColumnWidth(1,40); co.setColumnWidth(2,200); 
    co.setColumnWidth(3,200); co.setColumnWidth(4,350); co.setColumnWidth(5,250); 
    co.setColumnWidth(6,150); co.deleteColumns(7,20); co.deleteRows(350,650); 
    co.getRange('C2').setFormula('=B2'); 
    co.getRange('C2').autoFill(co.getRange('C2:C350'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    
  var lo = sh.insertSheet().activate();
    lo.setName('LORG').setFrozenRows(1); lo.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    lo.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lo.getRange('A1').setValue('DO'); 
    lo.getRange('B1').setValue('NAME'); lo.getRange('C1').setValue('DESCRIPTION');
    lo.getRange('D1').setValue('PATH'); lo.getRange('E1').setValue('PARENT PATH');
    lo.setFrozenColumns(1);
    lo.setColumnWidth(1,40); lo.setColumnWidth(2,200);  lo.setColumnWidth(3,200); 
    lo.setColumnWidth(4,350); lo.setColumnWidth(5,250); lo.setColumnWidth(6,150);
    lo.deleteColumns(7,20); lo.deleteRows(350,650);
    

  var lc = sh.insertSheet().activate();
    lc.setName('LCB').setFrozenRows(1); lc.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lc.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lc.getRange('A1').setValue('DO'); lc.getRange('B1').setValue('DEVICE ID'); 
    lc.getRange('C1').setValue('SERIAL'); 
    lc.getRange('D1').setValue('USER'); lc.getRange('E1').setValue('MAC');
    lc.getRange('F1').setValue('MODEL'); lc.getRange('G1').setValue('PATH');
    lc.getRange('H1').setValue('NOTES'); lc.getRange('I1').setValue('OS'); 
    lc.getRange('J1').setValue('USERS'); lc.getRange('K1').setValue('STATUS');
    lc.getRange('L1').setValue('ACTION'); lc.getRange('M1').setValue('REASON');
    lc.setColumnWidth(1,40); lc.setColumnWidth(2,250); lc.setColumnWidth(3,100);
    lc.setColumnWidth(4,250); lc.setColumnWidth(5,100); lc.setColumnWidth(6,250);
    lc.setColumnWidth(7,350); lc.setColumnWidth(8,250); lc.setColumnWidth(9,100); 
    lc.setColumnWidth(10,250); lc.setColumnWidth(11,100); lc.setColumnWidth(12,150); 
    lc.setColumnWidth(13,250);     
    lc.setColumnWidth(10,100); lc.setColumnWidth(11,250); lc.deleteColumns(14,13);
    lc.deleteRows(500,500); lc.setFrozenColumns(1);
  
  var ccl = sh.insertSheet().activate();
    ccl.setName('CCLASS').setFrozenRows(1); ccl.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    ccl.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    ccl.getRange('A1').setValue('DO'); ccl.getRange('B1').setValue('ID'); 
    ccl.getRange('C1').setValue('CLASS'); ccl.getRange('D1').setValue('SECTION'); 
    ccl.getRange('E1').setValue('ROOM'); ccl.getRange('F1').setValue('HEADING'); 
    ccl.getRange('G1').setValue('DESCRIPT'); ccl.getRange('H1').setValue('STATE');
    ccl.getRange('I1').setValue('OWNER');  
    ccl.setColumnWidth(1,40); ccl.setColumnWidth(2,100); ccl.setColumnWidth(3,250);
    ccl.setColumnWidth(4,250); ccl.setColumnWidth(5,100); ccl.setColumnWidth(6,100)
    ccl.setColumnWidth(7,100); ccl.setColumnWidth(8,100); ccl.setColumnWidth(9,60);
    ccl.deleteColumns(10,17);
    ccl.getRange('H2').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['ACTIVE','ARCHIVED'],true).build());  
    ccl.getRange('H2').autoFill(ccl.getRange('H2:H521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    ccl.deleteRows(522,478); ccl.setFrozenColumns(1);

  var lcl = sh.insertSheet().activate();
    lcl.setName('LCLASS').setFrozenRows(1); lcl.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lcl.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lcl.getRange('A1').setValue('DO'); lcl.getRange('B1').setValue('ID'); 
    lcl.getRange('C1').setValue('CLASS'); lcl.getRange('D1').setValue('SECTION');
    lcl.getRange('E1').setValue('ROOM'); lcl.getRange('F1').setValue('HEADING'); 
    lcl.getRange('G1').setValue('DESCRIPT'); lcl.getRange('H1').setValue('STATE'); 
    lcl.getRange('I1').setValue('CODE'); lcl.getRange('J1').setValue('LINK'); 
    lcl.getRange('K1').setValue('FOLDER'); lcl.getRange('L1').setValue('CREATED'); 
    lcl.getRange('M1').setValue('EDITED'); lcl.getRange('N1').setValue('OWNER ID'); 
    lcl.getRange('O1').setValue('OWNER'); 
    lcl.setColumnWidth(1,40); lcl.setColumnWidth(2,100); lcl.setColumnWidth(3,250);
    lcl.setColumnWidth(4,250); lcl.setColumnWidth(5,100); lcl.setColumnWidth(6,100); 
    lcl.setColumnWidth(7,100); lcl.setColumnWidth(8,100); lcl.setColumnWidth(9,100);
    lcl.setColumnWidth(10,100); lcl.setColumnWidth(11,100); lcl.setColumnWidth(12,100);
    lcl.setColumnWidth(13,100); lcl.setColumnWidth(14,100); lcl.setColumnWidth(15,100);
    lcl.deleteColumns(16,11); lcl.deleteRows(550,450); lcl.setFrozenColumns(1);
    lcl.getRange('I2').setFormula('=IFERROR(INDEX(LUSER!D$2:D,MATCH(H2,LUSER!G$2:G,0)),"")');
    lcl.getRange('I2').autoFill(lcl.getRange('I2:I520'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    
  var ca = sh.insertSheet().activate();
    ca.setName('CASSIGN').setFrozenRows(1); ca.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    ca.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    ca.getRange('A1').setValue('DO');  ca.getRange('B1').setValue('NUM'); 
    ca.getRange('C1').setValue('ID CLASS'); ca.getRange('D1').setValue('ID ASSIGN');
    ca.getRange('E1').setValue('NAME'); ca.getRange('F1').setValue('ID ORGINAL');
    ca.getRange('G1').setValue('ID NUEVO'); ca.getRange('H1').setValue('URL');
    ca.getRange('I1').setValue('URL PUB'); ca.getRange('J1').setValue('WORKTYPE');
    ca.getRange('K1').setValue('STATE');ca.getRange('L1').setValue('TITLE'); 
    ca.getRange('M1').setValue('INSTRUCTIONS'); ca.getRange('N1')
      .setValue('SHARE MODE'); ca.getRange('O1').setValue('POINTS'); 
    ca.getRange('P1').setValue('DATE'); ca.getRange('Q1').setValue('SCHEDULE');
    ca.getRange('R1').setValue('UTC'); ca.getRange('S1').setValue('YEAR'); 
    ca.getRange('T1').setValue('MONTH');ca.getRange('U1').setValue('DAY'); 
    ca.getRange('V1').setValue('HOUR'); ca.getRange('W1').setValue('MIN');
    ca.getRange('X1').setValue('SEC'); ca.getRange('Y1').setValue('R1');
    ca.insertColumns(26,2); ca.getRange('Z1').setValue('R2'); 
    ca.getRange('AA1').setValue('R3'); ca.getRange('AB1').setValue('R4');
    ca.getRange('Q2').setFormula('=IF(P2<>"",(P2-7)-8/24,"")'); 
    ca.getRange('R2').setFormula('=IF(P2<>"",TEXT(Q3,"YYYY-MM-DDThh:mm:ssZ"),"")'); 
    ca.getRange('S2').setFormula('=IF(P2<>"",TEXT(P2,"YYYY"),"")'); 
    ca.getRange('T2').setFormula('=IF(P2<>"",TEXT(P2,"MM"),"")'); 
    ca.getRange('U2').setFormula('=IF(P2<>"",TEXT(P2,"DD"),"")'); 
    ca.getRange('V2').setFormula('=IF(P2<>"",TEXT(P2+0/24,"HH"),"")'); 
    ca.getRange('W2').setFormula('=IF(P2<>"",RIGHT(TEXT(P2,"hmm"), LEN(TEXT(P2,"hmm"))-2),"")'); 
    ca.getRange('X2').setFormula('=IF(P2<>"",TEXT(P2,"ss"),"")'); 
    ca.getRange('Y2:Y3').setValues([['B2'],['B3']]);
    ca.getRange('Y2:Y3').activate(); 
    ca.getActiveRange().autoFill(ca.getRange('Y2:Y522'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ca.getRange('Z2:Z3').setValues([['D2'],['D3']]);
    ca.getRange('Z2:Z3').activate(); 
    ca.getActiveRange().autoFill(ca.getRange('Z2:Z522'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ca.getRange('AA2:AA3').setValues([['F2'],['F3']]);
    ca.getRange('AA2:AA3').activate(); 
    ca.getActiveRange().autoFill(ca.getRange('AA2:AA522'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ca.getRange('AB2:AB3').setValues([['G2'],['G3']]);
    ca.getRange('AB2:AB3').activate(); 
    ca.getActiveRange().autoFill(ca.getRange('AB2:AB522'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ca.setColumnWidth(1,40); ca.setColumnWidth(2,100); ca.setColumnWidth(3,100);
    ca.setColumnWidth(4,100); ca.setColumnWidth(5,100); ca.setColumnWidth(6,100);
    ca.setColumnWidth(7,100); ca.setColumnWidth(8,100); ca.setColumnWidth(9,100);
    ca.setColumnWidth(10,100); ca.setColumnWidth(11,100); ca.setColumnWidth(12,100);
    ca.setColumnWidth(13,100); ca.setColumnWidth(14,250); ca.setColumnWidth(15,150);
    ca.setColumnWidth(16,150); ca.setColumnWidth(17,150); ca.setColumnWidth(18,150);
    ca.setColumnWidth(19,150); ca.setColumnWidth(20,150); ca.setColumnWidth(21,150);
    ca.setColumnWidth(22,150); ca.setColumnWidth(23,150); ca.setColumnWidth(24,150);
    ca.setColumnWidth(25,60); ca.setColumnWidth(26,60); ca.setColumnWidth(27,60);
    ca.setColumnWidth(28,60);
    ca.getRange('N2').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(
        ['ASSIGNMENT','ANNOUNCEMENT','SHORT ANSWER QUESTION'],true).build()); 
    ca.getRange('A2:X2').autoFill(ca.getRange('A2:X1000'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ca.deleteRows(523,477); ca.setFrozenColumns(1); 

  var la = sh.insertSheet().activate();
    la.setName('LASSIGN').setFrozenRows(1); la.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    la.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    la.getRange('A1').setValue('DO');  la.getRange('B1').setValue('CLASS'); 
    la.getRange('C1').setValue('CREATOR'); la.getRange('D1').setValue('CREATOR ID');  
    la.getRange('E1').setValue('ID CLASS'); la.getRange('F1').setValue('ID ASSIGN'); 
    la.getRange('G1').setValue('ASSIGN'); la.getRange('H1').setValue('DESCRIPT'); 
    la.getRange('I1').setValue('STATE'); la.getRange('J1').setValue('LINK'); 
    la.getRange('K1').setValue('CREATED'); la.getRange('L1').setValue('EDITED'); 
    la.getRange('M1').setValue('SCHEDULED');  la.getRange('N1').setValue('DUE DATE'); 
    la.getRange('O1').setValue('DUE TIME');  la.getRange('P1').setValue('WORKTYPE'); 
    la.getRange('Q1').setValue('POINTS');  la.setFrozenColumns(1); la.deleteColumns(18,9); 
    la.setColumnWidth(1,40); la.setColumnWidth(2,250); la.setColumnWidth(3,200);
    la.setColumnWidth(4,200); la.setColumnWidth(5,350); la.setColumnWidth(6,350);
    la.setColumnWidth(7,150); la.setColumnWidth(8,150); la.setColumnWidth(9,100);
    la.setColumnWidth(10,150); la.setColumnWidth(11,150); la.setColumnWidth(12,150);
    la.setColumnWidth(13,150); la.setColumnWidth(14,250); la.setColumnWidth(15,250); 
    la.setColumnWidth(16,250);  la.setColumnWidth(17,250); 

  var cs = sh.insertSheet().activate(); cs.setName('CSTUD').setFrozenRows(3); 
    cs.getRange('1:3').setFontWeight('bold').setHorizontalAlignment('center')
      .setBackground('#00ff00');
    cs.insertColumns(26,300); cs.setColumnWidths(1,326,250);  
    cs.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    cs.deleteRows(350,650);
 
  var ls = sh.insertSheet().activate();
   ls.setName('LSTUD').setFrozenRows(3); ls.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    ls.insertColumns(26,300); ls.setColumnWidths(1,326,250); 
    ls.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    ls.deleteRows(350,650);

  var cp = sh.insertSheet().activate();
    cp.setName('CPROF').setFrozenRows(3); cp.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    cp.insertColumns(26,300); cp.setColumnWidths(1,326,250); 
    cp.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    cp.deleteRows(350,650);

  var lp = sh.insertSheet().activate();
    lp.setName('LPROF').setFrozenRows(3); lp.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lp.insertColumns(26,300); lp.setColumnWidths(1,326,250);  
    lp.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    lp.deleteRows(350,650);

  var cal = sh.insertSheet().activate(); 
    cal.setName('CAL').setFrozenRows(1); cal.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    cal.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    cal.deleteRows(500,500); cal.deleteColumns(5,22);
    cal.getRange('A1').setValue('DO'); cal.getRange('B1').setValue('ID');
    cal.getRange('C1').setValue('NAME'); cal.getRange('D1').setValue('COLOR');
    cal.setColumnWidth(1,40); cal.setColumnWidth(2,500); cal.setColumnWidth(3,350);
    cal.setColumnWidth(4,100); cal.setFrozenColumns(1);

  var ll = sh.insertSheet().activate();
    ll.setName('CONSTRUCT'); ll.getRange('B2').setValue('A'); ll.getRange('B3')
      .setFormula("=CHAR(CODE(B2)+1)"); 
    ll.getRange('B3').autoFill(ll.getRange('B3:B27'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);    
    ll.getRange('B2:B521').activate();
    ll.getRange('B2:B27').copyTo(ll.getActiveRange(), 
      SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
    ll.getRange('A28:A53').setValue('A'); ll.getRange('A54:A79').setValue('B');
    ll.getRange('A80:A105').setValue('C'); ll.getRange('A106:A131').setValue('D');
    ll.getRange('A132:A157').setValue('E'); ll.getRange('A158:A183').setValue('F');
    ll.getRange('A184:A209').setValue('G'); ll.getRange('A210:A235').setValue('H');
    ll.getRange('A236:A261').setValue('I'); ll.getRange('A262:A287').setValue('J');
    ll.getRange('A288:A313').setValue('K'); ll.getRange('A314:A339').setValue('L');
    ll.getRange('A340:A365').setValue('M'); ll.getRange('A366:A391').setValue('N');
    ll.getRange('A392:A417').setValue('O'); ll.getRange('A418:A444').setValue('P');
    ll.getRange('A444:A469').setValue('Q'); ll.getRange('A470:A495').setValue('R');
    ll.getRange('A496:A521').setValue('S'); ll.getRange('C2:C521').setValue('4'); 
    ll.getRange('D2:D521').setValue(':'); var alfa2 = ll.getRange('A2:A521').getValues();
    ll.getRange('E2:E521').setValues(alfa2); var alfa3 = ll.getRange('B2:B521').getValues(); 
    ll.getRange('F2:F521').setValues(alfa3); ll.getRange('G2:G521').setValue('500');
    ll.getRange('H2').setFormula('=CONCATENATE(A2:C2)');
    ll.getRange('H2').autoFill(ll.getRange('H2:H521'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ll.getRange('I2').setFormula('=CONCATENATE(A2:G2)');
    ll.getRange('I2').autoFill(ll.getRange('I2:I521'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ll.getRange('J2:J3').setValues([['D2'],['D3']]);
    ll.getRange('J2:J3').activate(); 
    ll.getActiveRange().autoFill(ll.getRange('J2:J521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);  
    ll.getRange('K2').setFormula('=ARRAYFORMULA(LUSER!G2:G)');
    ll.getRange('L2').setFormula('=ARRAYFORMULA(LUSER!D2:D)');
    ll.getRange('M2').setFormula('=ARRAYFORMULA(LASSIGN!D2:D)');
    ll.getRange('N2').setFormula('=IFERROR(INDEX(L2:L,MATCH(M2,K2:K,0)),"")');
    ll.getRange('N2').autoFill(ll.getRange('N2:N521'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ll.getRange('P2').setFormula('=ARRAYFORMULA(LCLASS!B2:B)');
    ll.getRange('Q2').setFormula('=ARRAYFORMULA(LCLASS!C2:C)');
    ll.getRange('R2').setFormula('=ARRAYFORMULA(LASSIGN!E2:E)');
    ll.getRange('S2').setFormula('=IFERROR(INDEX(Q2:Q,MATCH(R2,P2:P,0)),"")');
    ll.getRange('S2').autoFill(ll.getRange('S2:S521'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ll.hideSheet();
    var first = sh.getSheetByName('CUSER');
    sh.setActiveSheet(first);
    sh.moveActiveSheet(2);
    sh1.getSheetByName('ADMIN').getRange(l,1).setValue('');
  }  
  }
}


function deleteSheets(){
var sh1 = SpreadsheetApp.openById('ID');
var r = sh1.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=1; x<n; x++){ var i = d[x][0];  var l = 1 + x; if (i === 'x') {
var s = SpreadsheetApp.openById(d[x][5]);
var nsh = s.getNumSheets();
  for(x = 1; x < nsh; x++){
    var ss = s.getSheets(); 
    var last = ss.length-1;
    s.setActiveSheet(ss[last]);
    s.deleteActiveSheet();
  }
var ns = s.insertSheet();
sh1.getSheetByName('ADMIN').getRange(l,1).setValue('');
}}
} 



function createUserSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][30]; var l = 1 + x; 
    if (i === 'x') {
      try {
       var user = { primaryEmail:d[x][23], name:{givenName: d[x][20], familyName:d[x][21]},
          password: d[x][24], changePasswordAtNextLogin: d[x][4],
          includeInGlobalAddressList: d[x][5], orgUnitPath: d[x][25] };
        var org = AdminDirectory.Users.insert(user); 
        var userEmail = d[x][23];
        var groupKey = d[x][26];
        var resource = {email: userEmail, role: 'MEMBER'};
        var gr = AdminDirectory.Members.insert(resource, groupKey);   
        var end = s.getRange(l, 31).setValue(''); 
        Utilities.sleep(1000);
      } catch (e){continue;}
    }   
  }  
}



function listUserSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var dom = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CUSER');
  var school = dom.getRange('X1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  var pageToken = null, urs = []; 
  do{
    var us = AdminDirectory.Users.list({
    domain: school, pageToken: pageToken, pageSize:100});
    pageToken = us.nextPageToken;
    urs = urs.concat(us.users);  
    } while(pageToken); 
  var arr = [];
      for (i = 0; i < urs.length; i++) {
        var ur = urs[i]; 
        var first = ur.name.givenName;
        var last = ur.name.familyName;
        var email = ur.primaryEmail;
        var pass = ur.password;
        var org = ur.orgUnitPath;
        var id = ur.id;
        var suspend = ur.suspended;
        var changepass = ur.changePasswordAtNextLogin;
        var global = ur.includeInGlobalAddressList;
        arr.push([first,last,email,pass,org,id,suspend,changepass,global]); 
      }
      s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);  
}



function updateUserNameSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {primaryEmail: d[x][3], name: {givenName: d[x][1],
          familyName: d[x][2]} };
        var org = AdminDirectory.Users.update(resource, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    }  
  }  
}


// THIS NEEDS TO BE TESTED STILL!!
function updateUserEmailSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][6];
        var resource = {primaryEmail: d[x][3]};
        var org = AdminDirectory.Users.update(resource, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    }  
  }  
}



function changeUserOrgSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {orgUnitPath: d[x][5]};
        var org = AdminDirectory.Users.update(resource, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function changeUserPassSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {password: d[x][4], changePasswordAtNextLogin: d[0][8]};
        var org = AdminDirectory.Users.update(resource, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function addGroupMemberSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;  
   if (i === 'x') {
      try{ 
        var user = d[x][3]; var groupKey = d[x][10];
        var resource = {email: user, role: 'MEMBER'};
        var gr = AdminDirectory.Members.insert(resource, groupKey);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000); 
         } catch (e){continue;} 
    }
  }
}



function MoveGroupMemberSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;  
    if (i === 'x') {
      try{ 
        var user = d[x][3]; 
        var gk1 = d[x][10];
        var resource = {email: user, role: 'MEMBER'};
        var gr = AdminDirectory.Members.insert(resource, gk1);
        var gk2 = d[x][11];
        var gr = AdminDirectory.Members.remove(gk2, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000); 
         } catch (e){continue;}  
    }
  }
}



function suspendUserSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {suspended: d[x][7]};
        var org = AdminDirectory.Users.update(resource, user);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function createGroupSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CGROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x'){
      try{
        var gr = {email: d[x][1], name: d[x][2], description: d[x][3]};
        var gro = AdminDirectory.Groups.insert(gr);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function listGroupSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LGROUP');
  var dom = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CUSER');
  var school = dom.getRange('X1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  var pageToken = null, grs = []; 
  do{
    var gr = AdminDirectory.Groups.list({domain: school, 
      pageToken: pageToken, pageSize:100}); pageToken = gr.nextPageToken;
      grs = grs.concat(gr.groups);  
  } while(pageToken); 
  var arr = [];
      for (i = 0; i < grs.length; i++) {
        var or = grs[i]; 
        var email = or.email;
        var names = or.name;
        var des = or.description; 
        var ids = or.id;
        arr.push([email,names,des,ids]); 
      }
      s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);  
}
      


function editGroupInfoSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LGROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x'){
      try{
        var groupKey = d[x][4];  
        var gr = {email: d[x][1], name: d[x][2], description: d[x][3]};
        var gro = AdminDirectory.Groups.update(gr, groupKey);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function editGroupConfigSCHOOL(){ 
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LGROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;     
    if (i === 'x') {
      try{
        var groupId = d[x][1]; // This is ONLY the email username, NOT the ID.
        var group = AdminGroupsSettings.newGroups();
        group.whoCanAdd = 'NONE_CAN_ADD';
        group.whoCanJoin = 'INVITED_CAN_JOIN';
        group.whoCanViewMembership = 'ALL_MEMBERS_CAN_VIEW';
        group.whoCanViewGroup = 'ALL_MEMBERS_CAN_VIEW';
        group.whoCanInvite = 'ALL_MANAGERS_CAN_INVITE';
        group.allowExternalMembers = false;
        group.whoCanPostMessage = 'ALL_MEMBERS_CAN_POST';
        group.allowWebPosting = true;
        group.showInGroupDirectory = false;
        group.allowGoogleCommunication = false;
        group.membersCanPostAsTheGroup = false;
        group.includeInGlobalAddressList = false;
        group.whoCanLeaveGroup = 'NONE_CAN_LEAVE'; 
        AdminGroupsSettings.Groups.patch(group, groupId);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
      } catch (e){continue;}
    } 
  }  
}



function deleteGroupSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LGROUP');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x'){
      try{
        var groupKey = d[x][4];  
        var gro = AdminDirectory.Groups.remove(groupKey);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}
    } 
  }  
}



function listUsersInGroupSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GROUPS');
  var dom = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CUSER');
  var school = dom.getRange('X1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  for (x=1; x<nr; x++){ var b = d[x][0]; var l = 1 + x;
  if (b === 'x') {
    try{
     var s1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('UGROUP');
     var pageToken; var gr = AdminDirectory.Members.list(d[x][1], {domain: school,
        maxResults: 500, pageToken: pageToken});
     var grs = gr.members;  var arr = [];
        for (i = 0; i < grs.length; i++) {
          var or = grs[i]; 
          var email = or.email;
          arr.push([email]); 
        }
        s1.getRange(2, d[x][5], arr.length, arr[0].length).setValues(arr);  
      } catch (e){continue;} 
  }
var end = s.getRange(l, 1).setValue('');   
  }
}


  
function createOrgSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CORG');
  var ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = ID.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x') {
      try{
        var or = {name: d[x][1], description: d[x][2], parentOrgUnitPath: d[x][2],
          blockInheritance: false}
        var me = adminId;
        var org = AdminDirectory.Orgunits.insert(or, me);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}  
    } 
  }  
}

  

function listOrgSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = s.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  var org = AdminDirectory.Orgunits.list(me, {orgUnitPath: '/', type: 'all'});
  var orgs = org.organizationUnits; var arr = []; var me = adminId;
      for (i = 0; i < orgs.length; i++) {
        var or = orgs[i]; 
        var names = or.name;
        var des = or.description;
        var path = or.orgUnitPath;
        var pp = or.parentOrgUnitPath;
        var ids = or.orgUnitId;
        arr.push([names,des,path,pp,ids]); 
      }
      s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);  
}
        


function editOrgSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = s.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x') {
      try{  
        var or = {name: d[x][1], description: d[x][2], parentOrgUnitPath: d[x][4],
          blockInheritance: false}
        var orgUnitPath = d[x][3];
        var me = adminId;
        var org = AdminDirectory.Orgunits.update(or, me, orgUnitPath);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}  
    } 
  }  
}



function deleteOrgSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = s.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x') {
      try{  
        var orgUnitPath = d[x][3];
        var me = adminId;
        var org = AdminDirectory.Orgunits.remove(me, orgUnitPath);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}  
    } 
  }  
}



function listChromeOsSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LCB');
  var ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = ID.getRange('F1').getValue();
  var dom = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CUSER');
  var school = dom.getRange('X1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();
  var pageToken; var me = adminId; var pageToken = null, orgs = []; var arr = [];
  do{
    var org = AdminDirectory.Chromeosdevices.list(me,{domain: school, 
      pageToken: pageToken, pageSize:100});
    pageToken = org.nextPageToken;
    orgs = orgs.concat(org.chromeosdevices);  
    } while (pageToken);
      for (i = 0; i < orgs.length; i++) {
        var or = orgs[i]; 
        var ids = or.deviceId;
        var ser = or.serialNumber;
        var user = or.annotatedUser;
        var mac = or.macAddress;
        var mod = or.model;
        var path = or.orgUnitPath;
        var note = or.notes;
        var ver = or.osVersion;
        var use = or.recentUsers; 
        var stat = or.status;
        arr.push([ids,ser,user,mac,mod,path,note,ver,use,stat]); 
      }
      s.getRange(2, 2, arr.length, arr[0].length).setValues(arr);  
}



function moveChromeOsSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LCB');
  var ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = ID.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x') {
      try{  
        var cb = {deviceIds: [d[x][1]]};  
        var orgUnitPath = d[x][6];
        var me = adminId;
        var org = AdminDirectory.Chromeosdevices.moveDevicesToOu(cb, me, orgUnitPath);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
      } catch (e){continue;}  
    } 
  }  
}



function editChromeOsSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LCB');
  var ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = ID.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;   
    if (i === 'x') {
      try{  
        var resource = {annotatedUser: d[x][3], notes: d[x][7], orgUnitPath: d[x][6]} 
        var me = adminId;
        var deviceId = d[x][1];
        var org = AdminDirectory.Chromeosdevices.update(resource, me, deviceId);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}  
    } 
  }  
}



function suspendChromeOsSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LCB');
  var ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LORG');
  var adminId = ID.getRange('F1').getValue();
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][0]; var l = 1 + x;  
    if (i === 'x') {
      try{  
        var resource = {action: d[x][11], deprovisionReason: d[x][12]} 
        /* action can take: "deprovision","disable","reenable". deprovisionReason can
         take "different_model_replacement","retiring_device","same_model_replacement"
         You can comment out deprovisionReason if you are only going to use action.
        */
        var me = admimId;
        var deviceId = d[x][1];   
        var org = AdminDirectory.Chromeosdevices.action(resource, me, deviceId);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000);
         } catch (e){continue;}  
    } 
  }  
}



function createCourseSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('CCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x;
  if(i==''){continue;} else if (i=='x'){   
    var course = Classroom.newCourse(); 
    course.name = d[x][2];
    course.section = d[x][3];
    course.room = d[x][4];
    course.descriptionHeading = d[x][5];
    course.description = d[x][6];
    course.courseState = d[x][7]; 
    course.ownerId = d[x][8];
    course = Classroom.Courses.create(course);
    var c = course.id;
    var id = sh.getRange(l, 2).setValue(c);  
    var end = sh.getRange(l, 1).setValue('');  
    }
  }
}



function listCourseSCHOOL() {
var ss = SpreadsheetApp.getActiveSpreadsheet(); var sh = ss.getSheetByName('LCLASS');
var response = Classroom.Courses.list(); var courses = response.courses; var arr=[];
  for (i = 0; i < courses.length; i++) {
    var course = courses[i];
    var ids = course.id;
    var title = course.name;
    var sec = course.section;
    var room = course.room;
    var head = course.descriptionHeading;
    var des = course.description;
    var state = course.courseState;
    var code = course.enrollmentCode;
    var link = course.link;
    var folder = course.teacherFolder;
    var created = course.creationTime;
    var edited = course.updateTime;
    var owner = course.ownerId; 
    arr.push([ids,title,sec,room,head,des,state,code,link,folder,created,edited,owner]);
  }
  sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);   
}



function updateCourseSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){   
      try {
        var course = Classroom.Courses.get(d[x][1]);
        course.name = d[x][2];
        course.section = d[x][3];
        course.room = d[x][4];
        course.descriptionHeading = d[x][5];
        course.description = d[x][6];
        Classroom.Courses.update(course, d[x][1]);
          } catch(e){continue;}
    var end = sh.getRange(l, 1).setValue('');  
    }
  }
}



function changeStateSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){   
      try {
        var course = Classroom.Courses.get(d[x][1]);
        course.courseState = d[x][7];
        Classroom.Courses.update(course, d[x][1]);
        var end = sh.getRange(l, 1).setValue('');  
          } catch (e){continue;}
    }
  }
}



function changeOwnerSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){   
      try {
        var course = {'ownerId': d[x][13]};
        Classroom.Courses.patch(course, d[x][1], {'updateMask':'ownerId'});   
          } catch(e){continue;}
    var end = sh.getRange(l, 1).setValue('');  
    }
  }
}



function deleteCourseSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){  
      Classroom.Courses.remove(d[x][1]); 
      var end = sh.getRange(l, 1).setValue('');  
    }
  }
}



// NEEDS TO BE TESTED

function addStudentSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var sh3 = s.getSheetByName('CSTUD');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var lr = sh3.getLastRow();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh3.getRange(d2[x][10] + lr).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Students.create({userId: list,}, d[x][1]);  
          } catch (e){continue;}
        }
      } 
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}




function addTeacherSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var sh3 = s.getSheetByName('CPROF');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var lr = sh3.getLastRow();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh3.getRange(d2[x][10] + lr).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Teachers.create({userId: list,}, d[x][1]);
          } catch (e){continue;}
        }
      } 
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function addStudentTeacherSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var sh3 = s.getSheetByName('CPROF');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var lr = sh3.getLastRow();
var sh4 = s.getSheetByName('CSTUD');
var r4 = sh4.getDataRange(); var n4 = r4.getNumRows(); var d4 = r4.getValues();
var lr2 = sh4.getLastRow();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh3.getRange(d2[x][10] + lr).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Teachers.create({userId: list,}, d[x][1]);
          } catch (e){continue;}
        }
      } 
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh4.getRange(d2[x][10] + lr2).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Students.create({userId: list,}, d[x][1]);  
          } catch (e){continue;}
        }
      } 
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function deleteStudentsSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var sh3 = s.getSheetByName('LSTUD');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var lr = sh3.getLastRow();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh3.getRange(d2[x][10] + lr).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Students.remove(d[x][1], list);
          } catch (e){continue;}
        }
      } 
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function deleteProfesSCHOOL() { 
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var sh3 = s.getSheetByName('LPROF');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var lr = sh3.getLastRow();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){    
      var a = sh3.getRange(d2[x][10] + lr).getValues();
      var b = [].concat.apply([], a); 
      for (k=0; k<a.length; k++){
        var list = b[k];
        if (b[k] !== ""){ 
          try {  
            Classroom.Courses.Teachers.remove(d[x][1], list);
          } catch (e){continue;}
        }
      } 
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function listStudentSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('LSTUD');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var lr = sh2.getLastRow();
var sh3 = s.getSheetByName('CONSTRUCT');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){ 
    var page = null; var t = []; var arr=[];
    do{
      var tea = Classroom.Courses.Students.list(d[x][1], {pageToken: page, pageSize:100});
      page = tea.nextPageToken; t = t.concat(tea.students);  
      } while(page); 
        try {
          for (i = 0; i < t.length; i++) {
            var c = t[i]; var ids = c.profile; var em = ids.emailAddress; 
            arr.push([em]);   
          }
        } catch (e){continue;} 
  
    sh2.getRange(4, d3[x][9], arr.length, arr[0].length).setValues(arr);
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function listTeacherSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('LPROF');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
var lr = sh2.getLastRow();
var sh3 = s.getSheetByName('CONSTRUCT');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; 
    if(i==''){continue;} else if (i=='x'){ 
    var page = null; var t = []; var arr=[];
    do{
      var tea = Classroom.Courses.Teachers.list(d[x][1], {pageToken: page, pageSize:100});
      page = tea.nextPageToken; t = t.concat(tea.teachers);  
      } while(page); 
        try {
          for (i = 0; i < t.length; i++) {
            var c = t[i]; var ids = c.profile; var em = ids.emailAddress; 
            arr.push([em]);   
          }
        } catch (e){continue;} 
  
    sh2.getRange(4, d3[x][15], arr.length, arr[0].length).setValues(arr);
    }
  var end = sh.getRange(l, 1).setValue('');  
  }
}



function addAssignmentSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('CASSIGN');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh2 = s.getSheetByName('CONSTRUCT');
var r2 = sh2.getDataRange(); var n2 = r2.getNumRows(); var d2 = r2.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; if(i==''){continue;}                   
    else if (i=='x'){   
      var assignment = {
        workType: d[x][9], state: d[x][10], title: d[x][11], description: d[x][12],
        materials: [{ 
          driveFile: {driveFile: {id: d[x][4], title: d[x][6]}, shareMode: d[x][13]} }],
        maxPoints: d[x][14], scheduledTime: d[x][16], 
        dueDate: {year: d[x][18], month: d[x][19], day: d[x][20]},
        dueTime: {hours: d[x][21], minutes: d[x][22], seconds: d[x][23]} }; 
      var a = Classroom.Courses.CourseWork.create(assignment, d[x][1]);
      var c = a.id;
      var id = sh.getRange(d2[x][11]).setValue(c);   
      var end = sh.getRange(l, 1).setValue('');  
    }
  }
}



function listAssignmentSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LCLASS'); var sh2 = s.getSheetByName('LASSIGN');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var sh3 = s.getSheetByName('CONSTRUCT');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1 + x; if(i==''){continue;} 
    else if (i=='x'){
      try {                   
        var clas = Classroom.Courses.CourseWork.list(d[x][1]);
        var w = clas.courseWork; var arr=[];
        for (q = 0; q < w.length; q++) {
          var c = w[q];
          var cre = c.creatorUserId;
          var cour = c.courseId;  
          var ids = c.id;
          var ti = c.title;
          var des = c.description;
          var st = c.state;
          var link = c.alternateLink;
          var create = c.creationTime; 
          var edit = c.updateTime; 
          var sch = c.scheduledTime;
          var due = c.dueDate;
          var duet = c.dueTime;
          var typ = c.workType;
          var poi = c.maxPoints; 
          arr.push([cre,cour,ids,ti,des,st,link,create,edit,sch,due,duet,typ,poi]);
        }
      } catch (e){continue;}     
    sh2.getRange(2, 4, arr.length, arr[0].length).setValues(arr);
    if (sh3.getRange('N2') !== '') {
      var em1 = sh3.getRange(2,14,sh3.getLastRow()).getValues();    
      sh2.getRange(2,3,sh2.getLastRow()).setValues(em);
      var em2 = sh3.getRange(2,19,sh3.getLastRow()).getValues();    
      sh2.getRange(2,2,sh2.getLastRow()).setValues(em2);
      } 
    var end = sh.getRange(l, 1).setValue('');  
    
    }
  }
}



function listAllAssignmentSHCOOL() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sh = s.getSheetByName('LCLASS'); var sh2 = s.getSheetByName('LASSIGN');
var lr = sh.getRange('B2:B').getLastRow(); var aa = sh.getRange('B2:B' + lr).getValues();
var sh3 = s.getSheetByName('CONSTRUCT');
var r3 = sh3.getDataRange(); var n3 = r3.getNumRows(); var d3 = r3.getValues();
var a = aa.filter(String); var b = [].concat.apply([], a); 
  for (i=0; i<b.length; i++){ var list = b[i]; var page = null; var t = []; var arr=[];
    do{
      var tea = Classroom.Courses.CourseWork.list(list, {pageToken: page, pageSize:100});
      page = tea.nextPageToken; t = t.concat(tea.courseWork);  
      } while(page);  
        try {
          var w = class.courseWork;
          for (k = 0; k < w.length; k++) {
            var c = w[k]; 
            var cre = c.creatorUserId;
            var cour = c.courseId;  
            var ids = c.id;
            var ti = c.title;
            var des = c.description;
            var st = c.state;
            var link = c.alternateLink;
            var create = c.creationTime; 
            var edit = c.updateTime; 
            var sch = c.scheduledTime;
            var due = c.dueDate;
            var duet = c.dueTime;
            var typ = c.workType;
            var poi = c.maxPoints; 
            arr.push([cre,cour,ids,ti,des,st,link,create,edit,sch,due,duet,typ,poi]);
            }
          } catch (e){continue;} 
        }
    sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr); 
    if (sh3.getRange('N2') !== '') {
      var em1 = sh3.getRange(2,14,sh3.getLastRow()).getValues();    
      sh2.getRange(2,3,sh2.getLastRow()).setValues(em);
      var em2 = sh3.getRange(2,19,sh3.getLastRow()).getValues();    
      sh2.getRange(2,2,sh2.getLastRow()).setValues(em2);
      } 
}



function deleteAssignmentSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); 
var sh = s.getSheetByName('LASSIGN');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1+x; if(i==''){continue;}                   
  else if (i=='D'){
    Classroom.Courses.CourseWork.remove(d[x][2], d[x][3]);
  }
  else if (i=='L'){
    Classroom.Courses.CourseWork.remove(d[x][2], d[x][3]);
  } 
 }
var end = sh.getRange(l, 1).setValue('');  
}



function listCalSHCOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('CAL');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
var cal = CalendarApp.getAllCalendars(); var arr = [];
  for (x=0; x<cal.length; x++){ var i = d[x][0]; var l = 1 + x;
    var ca = cal[x]; var id = ca.getId(); var name = ca.getName();
    arr.push([id,name]); 
  }
  sh.getRange(2, 2, arr.length, arr[0].length).setValues(arr);
}



function editCalSCHOOL() {
var s = SpreadsheetApp.getActiveSpreadsheet(); var sh = s.getSheetByName('CAL');
var r = sh.getDataRange(); var n = r.getNumRows(); var d = r.getValues();
  for (x=0; x<n; x++) {var i=d[x][0]; var l = 1 + x; var color = d[x][3];   
    if(i==''){continue;} else if (i=='x'){ 
      var cal = CalendarApp.getCalendarById(d[x][1]); 
      var hid = cal.setHidden(true); 
      var sel = cal.setSelected(false);
      var col = cal.setColor(color);
      var end = s.getRange(l, 1).setValue(''); 
      Utilities.sleep(2000);  
    }
  }
}


