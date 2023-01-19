function nCalendarioH() {
	this.fecha = new Date();
	this.año = this.fecha.getFullYear();
	this.mes = this.fecha.getMonth();
	this.dia = this.fecha.getDay();
	this.hoy = this.fecha.getDate();}

nCalendarioH.prototype.mesDia = function(){
		var mesCal = document.getElementById("mes");
	if (this.mes == 0) {mesCal.innerHTML = "ENERO DE " + this.año;}
	else if (this.mes == 1) {mesCal.innerHTML = "FEBRERO DE " + this.año;}
	else if (this.mes == 2) {mesCal.innerHTML = "MARZO DE " + this.año;}
	else if (this.mes == 3) {mesCal.innerHTML = "ABRIL DE " + this.año;}
	else if (this.mes == 4) {mesCal.innerHTML = "MAYO DE " + this.año;}
	else if (this.mes == 5) {mesCal.innerHTML = "JUNIO DE " + this.año;}
	else if (this.mes == 6) {mesCal.innerHTML = "JULIO DE " + this.año;}
	else if (this.mes == 7) {mesCal.innerHTML = "AGOSTO DE " + this.año;}
	else if (this.mes == 8) {mesCal.innerHTML = "SEPTIEMBRE DE " + this.año;}
	else if (this.mes == 9) {mesCal.innerHTML = "OCTUBRE DE " + this.año;}
	else if (this.mes == 10) {mesCal.innerHTML = "NOVIEMBRE DE " + this.año;}
	else {mesCal.innerHTML = "DICIEMBRE DE " + this.año;}
}
nCalendarioH.prototype.cal = function(){
	var diaM = [0,1,2,3,4,5,6];
	var diaH = diaM[this.dia];
	var mesD = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	var diasPostF = mesD.slice(0, 27+1);
	var diasPostFB = mesD.slice(0, 28+1);
	var diasPostMC = mesD.slice(0, 29+1);
	var diasPostML = mesD.slice(0, 30+1);
	var fila1_6 = document.getElementsByTagName("td");
	var semD = 5;
	var conMarcV = semD-1;

	function bucleMeses(semDi) {
			if (this.año % 4 == 0 && this.mes == 1){
			for (var j=0; j<=diasPostFB.length; j++){fila1_6[j+semDi].innerHTML = diasPostFB[j]==undefined?"":diasPostFB[j];}}
			else if (this.año % 4 != 0 && this.mes == 1){
			for (var j=0; j<=diasPostF.length; j++){fila1_6[j+semDi].innerHTML = diasPostF[j]==undefined?"":diasPostF[j];}}
			else if(this.mes==3||this.mes==5||this.mes==8||this.mes==10){
			for (var j=0; j<=diasPostMC.length; j++){fila1_6[j+semDi].innerHTML = diasPostMC[j]==undefined?"":diasPostMC[j];}}
			else{
			for (var j=0; j<=diasPostML.length; j++){fila1_6[j+semDi].innerHTML = diasPostML[j]==undefined?"":diasPostML[j];}}
			fila1_6[this.hoy+semDi-1].style.backgroundColor='lightblue';}

	do{	for (var i=(this.hoy-1);i>=0;i--) {
		if(mesD[i] ==1){
			switch(diaH){
				case 0:	semD +=1; bucleMeses.call(this, semD); break;
				case 1: semD-=5; bucleMeses.call(this, semD); break;
				case 2:	semD-=4;bucleMeses.call(this, semD);break;
				case 3:	semD-=3;bucleMeses.call(this, semD);break;
				case 4:	semD-=2;bucleMeses.call(this, semD);break;
				case 5:	semD-=1;bucleMeses.call(this, semD);break;
				case 6:	bucleMeses.call(this, semD);break;}}
			if(diaH==0){diaH+=7;}
		diaH-=1;}}while(mesD>0);}

function nCalendarioES(eFecha,eMes,eAño) {
	this.fecha2 = new Date();
	this.fecha2.setDate(eFecha);
	this.fecha2.setMonth(eMes-1);
	this.fecha2.setFullYear(eAño);
	this.año = this.fecha2.getFullYear();
	this.mes = this.fecha2.getMonth();
	this.dia = this.fecha2.getDay();
	this.hoy = this.fecha2.getDate();}

nCalendarioES.prototype = new nCalendarioH();

window.onload =
function objCalendario() {
	alert("Introduzca una fecha para ver el calendario de esa fecha.\nSi no introduce nada, verá según la fecha actual.")
	var fechaI = prompt("introduzca el día: ");		
	var mesI = prompt("introduzca el mes: ");
	var añoI = prompt("introduzca el año: ");
	fechaI = Number(fechaI);
	mesI = Number(mesI);
	añoI = Number(añoI);

	if(fechaI||mesI||añoI){var defCal2 = new nCalendarioES(fechaI,mesI,añoI);defCal2.mesDia();	defCal2.cal();}
	else{	var defCal = new nCalendarioH();defCal.mesDia();defCal.cal();}}

