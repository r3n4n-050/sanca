//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180;timeIni=180; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡Muy bien!"; messageTime="Se terminó el tiempo"; messageError=""; messageErrorG=""; messageAttempts="Vuelve a intentarlo."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="UklUX0lOVFJP"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["","","","","","","",""];im1=["redonda_im.jpg","blanca_im.jpg","negra_im.jpg","corchea_im.jpg","semicorchea_im.jpg","","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["corchea_es.jpg","","blanca_es.jpg","","semicorchea_es.jpg","redonda_es.jpg","","negra_es.jpg"];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=5; rows=2; items=5; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjU=","MjI=","Mjc=","MjA=","MjQ=","LTE=","LTE=","LTE="];
var boardGame=[["","","","",""],["","","","",""]]; dirMedia="RIT_INTRO_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
