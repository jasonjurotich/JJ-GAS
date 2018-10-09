// This is still a rough draft. It will be used to administer almost everything in the Google Admin Console.

function createTemplate(){
var f = DriveApp.createFolder('DOMAIN ADMIN').getId();
var s = SpreadsheetApp.create('USERS CLASSES CHROMEBOKS').getId();
var sf =  DriveApp.getFileById(s); 
  DriveApp.getFolderById(f).addFile(sf);
  DriveApp.getRootFolder().removeFile(sf);  
var sh = SpreadsheetApp.openById(s);
  var cu = sh.getActiveSheet(); cu.insertColumns(26,4); 
    cu.setName('CUSER').setFrozenRows(1); cu.getRange('1:1').setFontWeight('bold')
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
    cu.getRange('X1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['cumbresleon.edu.mx','oyg.edu.mx',
      'mirafloresleon.edu.mx','institutohispanoingles.edu.mx','bms.edu.mx',
      'amagno.edu.mx','cadc.edu.mx','institutooviedo.edu.mx'],true).build());  
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
    cu.getRange('X2').setFormula('=IF(U2<>"",CONCATENATE(W2,'@',$X$1),"")');
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
    lu.getRange('G1').setValue('ID'); 
    lu.getRange('H1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    lu.getRange('I1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build()); 
    lu.getRange('J1').setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false).requireValueInList(['true','false'],true).build());  
    lu.getRange('K1').setValue('GROUPTO'); lu.getRange('L1').setValue('GROUPFROM');
    lu.setColumnWidth(1,40) ;lu.setColumnWidth(2,200); lu.setColumnWidth(3,200); 
    lu.setColumnWidth(4,250); lu.setColumnWidth(5,250); lu.setColumnWidth(6,350);
    lu.setColumnWidth(7,100); lu.setColumnWidth(8,200); lu.setColumnWidth(9,200); 
    lu.setColumnWidth(10,100); lu.setColumnWidth(11,200); lu.setColumnWidth(12,200); 
    lu.deleteColumns(13,14); lu.setFrozenColumns(1);

  var lo = sh.insertSheet().activate();
    lo.setName('LORG').setFrozenRows(1); lo.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    lo.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lo.getRange('A1').setValue('DO'); 
    lo.getRange('B1').setValue('NAME'); lo.getRange('C1').setValue('DESCRIPTION');
    lo.getRange('D1').setValue('PATH'); lo.getRange('E1').setValue('PARENT PATH');
    lo.getRange('F1').setValue('ID'); lo.setFrozenColumns(1);
    lo.setColumnWidth(1,40); lo.setColumnWidth(2,200);  lo.setColumnWidth(3,200); 
    lo.setColumnWidth(4,350); lo.setColumnWidth(5,250); lo.setColumnWidth(6,150);
    lo.deleteColumns(7,20); lo.deleteRows(350,650);

  var co = sh.insertSheet().activate();
    co.setName('CORG').setFrozenRows(1); co.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    co.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    co.getRange('A1').setValue('DO'); 
    co.getRange('B1').setValue('NAME'); co.getRange('C1').setValue('DESCRIPTION');
    co.getRange('D1').setValue('PATH'); co.getRange('E1').setValue('PARENT PATH'); 
    co.getRange('F1').setValue('ID');  co.setFrozenColumns(1); 
    co.setColumnWidth(1,40); co.setColumnWidth(2,200); co.setColumnWidth(3,200);
    co.setColumnWidth(4,350); co.setColumnWidth(5,250); co.setColumnWidth(6,150);
    co.deleteColumns(7,20); co.deleteRows(350,650);

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

  var ug = sh.insertSheet().activate();
    ug.setName('UGROUP').setFrozenRows(1); ug.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00'); 
    ug.getRange('A1').setFormula('=TRANSPOSE(LGROUP!A2:A)'); 
    ug.insertColumns(26,600); ug.setColumnWidths(1,626,250);
    ug.deleteRows(350,650);

  var lc = sh.insertSheet().activate();
    lc.setName('LCB').setFrozenRows(1); lc.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lc.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lc.getRange('A1').setValue('DO'); lc.getRange('B1').setValue('DEVICE ID'); 
    lc.getRange('C1').setValue('SERIAL'); 
    lc.getRange('D1').setValue('USER'); lc.getRange('E1').setValue('MAC');
    lc.getRange('F1').setValue('MODEL'); lc.getRange('G1').setValue('PATH');
    lc.getRange('H1').setValue('NOTES'); lc.getRange('I1').setValue('STATUS'); 
    lc.getRange('J1').setValue('OS'); lc.getRange('K1').setValue('RECENT USERS');
    lc.setColumnWidth(1,40); lc.setColumnWidth(2,250); lc.setColumnWidth(3,100);
    lc.setColumnWidth(4,250); lc.setColumnWidth(5,100); lc.setColumnWidth(6,250);
    lc.setColumnWidth(7,350); lc.setColumnWidth(8,250); lc.setColumnWidth(8,100); 
    lc.setColumnWidth(10,100); lc.setColumnWidth(11,250); lc.deleteColumns(12,15);
    lc.deleteRows(500,500); lc.setFrozenColumns(1);

  var cc = sh.insertSheet().activate();
    cc.setName('CCB').setFrozenRows(1); cc.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    cc.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    cc.getRange('A1').setValue('DO'); cc.getRange('B1').setValue('DEVICE ID'); 
    cc.getRange('C1').setValue('SERIAL'); 
    cc.getRange('D1').setValue('USER'); cc.getRange('E1').setValue('MAC');
    cc.getRange('F1').setValue('MODEL'); cc.getRange('G1').setValue('PATH');
    cc.getRange('H1').setValue('NOTES'); cc.getRange('I1').setValue('STATUS'); 
    cc.getRange('J1').setValue('OS'); cc.getRange('K1').setValue('RECENT USERS');
    cc.setColumnWidth(1,40); cc.setColumnWidth(2,250); cc.setColumnWidth(3,100);
    cc.setColumnWidth(4,250); cc.setColumnWidth(5,100); cc.setColumnWidth(6,250);
    cc.setColumnWidth(7,350); cc.setColumnWidth(8,250); cc.setColumnWidth(8,100); 
    cc.setColumnWidth(10,100); cc.setColumnWidth(11,250); cc.deleteColumns(12,15);
    cc.deleteRows(500,500); cc.setFrozenColumns(1);

  var lcl = sh.insertSheet().activate();
    lcl.setName('LCLASS').setFrozenRows(1); lcl.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lcl.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    lcl.getRange('A1').setValue('DO'); lcl.getRange('B1').setValue('ID'); 
    lcl.getRange('C1').setValue('CLASS'); lcl.getRange('D1').setValue('SECTION');
    lcl.getRange('E1').setValue('ROOM'); lcl.getRange('F1').setValue('HEADING'); 
    lcl.getRange('G1').setValue('DESCRIPT'); lcl.getRange('H1').setValue('OWNER ID'); 
    lcl.getRange('I1').setValue('OWNER'); lcl.getRange('J1').setValue('CODE'); 
    lcl.getRange('K1').setValue('LINK'); lcl.getRange('L1').setValue('FOLDER'); 
    lcl.getRange('M1').setValue('CREATED'); lcl.getRange('N1').setValue('EDITED'); 
    lcl.setColumnWidth(1,40); lcl.setColumnWidth(2,100); lcl.setColumnWidth(3,250);
    lcl.setColumnWidth(4,250); lcl.setColumnWidth(5,100); lcl.setColumnWidth(6,100); 
    lcl.setColumnWidth(7,100); lcl.setColumnWidth(8,250); lcl.setColumnWidth(9,60);
    lcl.setColumnWidth(10,100); lcl.setColumnWidth(11,100); lcl.setColumnWidth(12,100);
    lcl.setColumnWidth(13,100); lcl.deleteColumns(14,13); 
    lcl.deleteRows(550,450); lcl.setFrozenColumns(1);
    lcl.getRange('I2').setFormula('=IFERROR(INDEX(LUSER!D$2:D,MATCH(H2,LUSER!G$2:G,0)),"")');
    lcl.getRange('I2').autoFill(lcl.getRange('I2:I520'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 
    
  var ccl = sh.insertSheet().activate();
    ccl.setName('CCLASS').setFrozenRows(1); ccl.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    ccl.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    ccl.getRange('A1').setValue('DO');  ccl.getRange('B1').setValue('ID'); 
    ccl.getRange('C1').setValue('CLASS'); ccl.getRange('D1').setValue('SECTION');
    ccl.getRange('E1').setValue('ROOM'); ccl.getRange('F1').setValue('HEADING'); 
    ccl.getRange('G1').setValue('DESCRIPTION'); ccl.getRange('H1')
      .setValue('OWNER'); ccl.getRange('H1').setValue('STATE'); 
    ccl.getRange('I1').setValue('R1'); ccl.getRange('J1').setValue('R2'); 
    ccl.getRange('K1').setValue('R3'); ccl.getRange('L1').setValue('R4');
    ccl.getRange('M1').setValue('R5'); 
    ccl.setColumnWidth(1,40); ccl.setColumnWidth(2,100); ccl.setColumnWidth(3,250);
    ccl.setColumnWidth(4,250); ccl.setColumnWidth(5,100); ccl.setColumnWidth(6,100)
    ccl.setColumnWidth(7,100); ccl.setColumnWidth(8,100); ccl.setColumnWidth(9,60);
    ccl.setColumnWidth(10,60); ccl.setColumnWidth(11,60); ccl.setColumnWidth(12,60);
    ccl.setColumnWidth(13,90); ccl.deleteColumns(14,13);
    ccl.getRange('I2:I3').setValues([[1],[2]]); ccl.getRange('I2:I3').activate(); 
    ccl.getActiveRange().autoFill(ccl.getRange('I2:I521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ccl.getRange('J2:J3').setValues([['A3'],['A4']]);
    ccl.getRange('J2:J3').activate();
    ccl.getActiveRange().autoFill(ccl.getRange('J2:J521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ccl.getRange('K2:K3').setValues([['B3'],['B4']]);
    ccl.getRange('K2:K3').activate();
    ccl.getActiveRange().autoFill(ccl.getRange('K2:K521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ccl.getRange('L2').setValue(4);
    ccl.getRange('L2').autoFill(ccl.getRange('L2:L521'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    ccl.deleteRows(522,478); ccl.setFrozenColumns(1);
    
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
    la.getRange('C1').setValue('ID CLASS'); la.getRange('D1').setValue('ID ASSIGN'); 
    la.getRange('E1').setValue('ASSIGN'); la.getRange('F1').setValue('DESCRIPT'); 
    la.getRange('G1').setValue('CREATOR ID'); la.getRange('H1').setValue('CREATOR'); 
    la.getRange('I1').setValue('STATE');  la.getRange('J1').setValue('LINK'); 
    la.getRange('K1').setValue('CREATED'); la.getRange('L1').setValue('EDITED'); 
    la.getRange('M1').setValue('SCHEDULED');  la.getRange('N1').setValue('DUE DATE'); 
    la.getRange('O1').setValue('DUE TIME');  la.getRange('P1').setValue('WORKTYPE'); 
    la.getRange('Q1').setValue('POINTS');  la.setFrozenColumns(1); 
    la.setColumnWidth(1,40); la.setColumnWidth(2,250); la.setColumnWidth(3,200);
    la.setColumnWidth(4,200); la.setColumnWidth(5,350); la.setColumnWidth(6,350);
    la.setColumnWidth(7,150); la.setColumnWidth(8,150); la.setColumnWidth(9,100);
    la.setColumnWidth(10,150); la.setColumnWidth(11,150); la.setColumnWidth(12,150);
    la.setColumnWidth(13,150); la.setColumnWidth(14,250); la.setColumnWidth(15,250); 
    la.setColumnWidth(16,250);  la.setColumnWidth(17,250); la.deleteColumns(18,9);
    la.getRange('H2').setFormula('=IFERROR(INDEX(LUSER!D$2:D,MATCH(G2,LUSER!G$2:G,0)),"")');
    la.getRange('H2').autoFill(la.getRange('H2:H1000'),
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 

  var ls = sh.insertSheet().activate();
   ls.setName('LSTUDENT').setFrozenRows(3); ls.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    ls.insertColumns(26,300); ls.setColumnWidths(1,326,250); 
    ls.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    ls.deleteRows(350,650);

  var cs = sh.insertSheet().activate(); cs.setName('CSTUDENT').setFrozenRows(3); 
    cs.getRange('1:3').setFontWeight('bold').setHorizontalAlignment('center')
      .setBackground('#00ff00');
    cs.insertColumns(26,300); cs.setColumnWidths(1,326,250);  
    cs.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    cs.deleteRows(350,650);

  var lp = sh.insertSheet().activate();
    lp.setName('LPROF').setFrozenRows(3); lp.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    lp.insertColumns(26,300); lp.setColumnWidths(1,326,250);  
    lp.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    lp.deleteRows(350,650);

  var cp = sh.insertSheet().activate();
    cp.setName('CPROF').setFrozenRows(3); cp.getRange('1:3').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    cp.insertColumns(26,300); cp.setColumnWidths(1,326,250); 
    cp.getRange('A1').setFormula('=TRANSPOSE(LCLASS!C2:E)'); 
    cp.deleteRows(350,650);

  var cal = sh.insertSheet().activate(); 
    cal.setName('CALENDAR').setFrozenRows(1); cal.getRange('1:1').setFontWeight('bold')
      .setHorizontalAlignment('center').setBackground('#00ff00');
    cal.getRange('A:A').setFontWeight('bold').setHorizontalAlignment('center');
    cal.deleteRows(500,500); cal.deleteColumns(5,22);
    cal.getRange('A1').setValue('DO'); cal.getRange('B1').setValue('ID');
    cal.getRange('C1').setValue('NAME'); cal.getRange('D1').setValue('COLOR');
    cal.setColumnWidth(1,40); cal.setColumnWidth(2,500); cal.setColumnWidth(3,350);
    cal.setColumnWidth(4,100); cal.setFrozenColumns(1);

  var ll = sh.insertSheet().activate();
    ll.setName('CONSTRUCT'); ll.getRange('B1').setValue('A'); ll.getRange('B2')
      .setFormula("=CHAR(CODE(B1)+1)"); 
    ll.getRange('B2').autoFill(ll.getRange('B2:B26'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);    
    ll.getRange('B1:B520').activate();
    ll.getRange('B1:B26').copyTo(ll.getActiveRange(), 
      SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
    ll.getRange('A27:A52').setValue('A'); ll.getRange('A53:A78').setValue('B');
    ll.getRange('A79:A104').setValue('C'); ll.getRange('A105:A130').setValue('D');
    ll.getRange('A131:A156').setValue('E'); ll.getRange('A157:A182').setValue('F');
    ll.getRange('A183:A208').setValue('G'); ll.getRange('A209:A234').setValue('H');
    ll.getRange('A235:A260').setValue('I'); ll.getRange('A261:A286').setValue('J');
    ll.getRange('A287:A312').setValue('K'); ll.getRange('A313:A338').setValue('L');
    ll.getRange('A339:A364').setValue('M'); ll.getRange('A365:A390').setValue('N');
    ll.getRange('A391:A416').setValue('O'); ll.getRange('A417:A442').setValue('P');
    ll.getRange('A443:468').setValue('Q'); ll.getRange('A469:A494').setValue('R');
    ll.getRange('A495:A520').setValue('S'); ll.getRange('C1:C520').setValue('3');
    ll.getRange('D1:D520').setValue(':'); var alfa2 = ll.getRange('A1:A520').getValues();
    ll.getRange('E1:E520').setValues(alfa2); var alfa3 = ll.getRange('B1:B520').getValues(); 
    ll.getRange('F1:F520').setValues(alfa3); ll.getRange('G1:G520').setValue('500');
    ll.getRange('H1').setFormula('=CONCATENATE(A1:G1)');
    ll.getRange('H1').autoFill(ll.getRange('H1:H520'), 
      SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    var alfa4 = ll.getRange('H1:H520').getValues();
    ccl.getRange('M2:M521').setValues(alfa4); ll.hideSheet();
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



function listUsersSCHOOL() {
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



function updateUserSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows();  
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {primaryEmail: d[x][3], name: {givenName: d[x][1],
          familyName: d[x][2]},
          includeInGlobalAddressList: d[x][9]};
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



function updateUserPassSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;   
    if (i === 'x') {
      try{
        var user = d[x][3];
        var resource = {password: d[x][4],changePasswordAtNextLogin: d[0][8]};
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
        var userEmail = d[x][3]; var groupKey = d[x][10];
        var resource = {email: userEmail, role: 'MEMBER'};
        var gr = AdminDirectory.Members.insert(resource, groupKey);
        var end = s.getRange(l, 1).setValue(''); 
        Utilities.sleep(1000); 
         } catch (e){continue;} 
    }
  }
}



function removeGroupMemberSCHOOL() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LUSER');
  var r = s.getDataRange(); var d = r.getValues(); var nr = r.getNumRows(); 
  for (x=1; x<nr; x++){ var i = d[x][0];  var l = 1 + x;  
    if (i === 'x') {
      try{ 
        var userEmail = d[x][3]; var groupKey = d[x][10];
        var resource = {email: userEmail, role: 'MEMBER'};
        var gr = AdminDirectory.Members.remove(groupKey, userEmail);
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
