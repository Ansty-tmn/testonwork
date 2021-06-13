/*Получение значения из текстовых инпутов*/

const sumDeposit = document.getElementById('sumDeposit'),
	  deposit2 = document.getElementById('deposit2');

/*Получение значения из ползунков*/

const deposit2Range = document.getElementById('Rdeposit2'),
      sumDepositRange =document.getElementById('RsumDeposit');
	
/*Results*/	
const Results = document.getElementById('Results');

/*Range*/
const inpitsRange = document.querySelectorAll('.input-range');
/*Кнопки*/
const deposit = document.querySelectorAll('.deposit');
console.log(deposit);  

const assignValue = () => {  
sumDeposit.value = sumDepositRange.value;
deposit2.value = deposit2Range.value;

}


/*ФУНКЦИИ ДЯЛ ПОЛЗУНКОВ*/
function fun1() {
   var rng=document.getElementById('r1'); 
   var i1=document.getElementById('i1'); 
  i1.value=rng.value;
}
function RangeForSumDeposit() {
   var rfsd=document.getElementById('RsumDeposit'); 
   var sd=document.getElementById('sumDeposit'); 
  sd.value=rfsd.value;
  
}
function RangeForSumDeposit2() {
   var rfsd=document.getElementById('RsumDeposit'); 
   var sd=document.getElementById('sumDeposit'); 
  rfsd.value=sd.value;
  
}
var simple = new Datepicker('#simple');
function RangeForDeposit() {
   var iDeposit=document.getElementById('deposit2'); 
   var rDeposit=document.getElementById('Rdeposit2'); 
  rDeposit.value=iDeposit.value;
  
}
function InputForDeposit() {
  var iDeposit=document.getElementById('deposit2'); 
   var rDeposit=document.getElementById('Rdeposit2'); 
  iDeposit.value=rDeposit.value;
  
}