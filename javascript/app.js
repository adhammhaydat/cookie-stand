'use strict';

let salmonProfiles = document.getElementById('salmonProfiles');
let table = document.getElementById('salesTable');
let formSubmit = document.getElementById('formLocation');

let hour= ['','6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];
let nameCountry=['Seatil', 'Tokyo','Dubai','Paris','Lima'];

function Country(name,min,max,avarg){
  this.name = name;
  this.min = min;
  this.max= max;
  this.avarg = avarg;
  this.results=[];
  this.Total=0;
  Country.totalCookiesForEachCountry.push(this);
}
Country.totalCookiesForEachCountry=[];
Country.prototype.getRandomCoustmer=function() {       
  return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); 
};
Country.prototype.getCookiesPerHour=function(){
  let totalCookies=0;
  for(let i=0;i<hour.length;i++){
    let value= this.avarg*this.getRandomCoustmer();
    this.results.push(Math.ceil(value));
    totalCookies+= this.avarg*this.getRandomCoustmer();
    this.Total=totalCookies;   
  }
  
};
  
// Country.prototype.headr=function(){
  
    
// };

function createHeader(){
 let tr=document.createElement('tr');
 table.appendChild(tr);
 for(let i=0;i<hour.length;i++){
   let th =document.createElement('th');
   tr.appendChild(th);
   th.textContent =`${hour[i]}`;
   th.setAttribute("style", "width: 70px;text-align:center;");
 }
}
      
Country.prototype.render= function() {  

      let tr=document.createElement('tr');
      table.appendChild(tr);
      let td =document.createElement('td');
      tr.appendChild(td);
      td.textContent =`${this.name}`;
      td.setAttribute("style", "width: 70px;text-align:center;");
      for(let x=0 ;x<hour.length-1;x++){
        td =document.createElement('td');
        tr.appendChild(td);
        td.textContent =`  ${this.results[x]}`;
        td.setAttribute("style", "width: 70px;text-align:center;");
      }
      td.textContent=`${Math.ceil(this.Total)}`
      
    
};

function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("salesTable").deleteRow(i);
}


function createFooter(){
  let tr=document.createElement('tr');
  table.appendChild(tr);
  let th=document.createElement('th');
  tr.appendChild(th);
  th.textContent ='Total';
  
  let totalHour=0;
  let totalOfTotal=0;

  for(let i=0;i<hour.length-1;i++){
    totalHour=0;
    let totalEndTotal=0;

    for(let j=0;j<Country.totalCookiesForEachCountry.length;j++){
      totalEndTotal = Country.totalCookiesForEachCountry[j].results[i];
      totalHour+=totalEndTotal;

    }    
    th =document.createElement('th');
    tr.appendChild(th);
    th.textContent = totalHour;
    totalOfTotal += totalHour;
    th.textContent = totalOfTotal;
    th.setAttribute("style", "width: 70px;text-align:center;");
  }
  
}
 

 createHeader();
 
 function getDataForm(event){
  event.preventDefault();
  let name = event.target.nameLocation.value;
  let max =  parseFloat(event.target.maxCustomer.value);
  let min = parseFloat(event.target.minCustomer.value);
  let avg =parseFloat(event.target.avargCustomer.value);

  
let newLocation = new Country(name,min,max,avg);

newLocation.getCookiesPerHour();

table.deleteRow(Country.totalCookiesForEachCountry.length);
newLocation.render();
createFooter();
document.getElementById('formLocation').reset();


}

formSubmit.addEventListener('submit', getDataForm);


 
let seatil = new Country(nameCountry[0], 23,65,6.3);
seatil.getRandomCoustmer();
seatil.getCookiesPerHour();
seatil.render();

let tokyo = new Country(nameCountry[1], 3,24,1.2);
tokyo.getRandomCoustmer()
tokyo.getCookiesPerHour();
tokyo.render();

let dubai = new Country(nameCountry[2], 11,38,3.7);
dubai.getRandomCoustmer()
dubai.getCookiesPerHour();
dubai.render();

let paris = new Country(nameCountry[3], 20,38,2.3);
paris.getCookiesPerHour();
paris.render();

let lima = new Country(nameCountry[4], 2,16,4.6);
lima.getCookiesPerHour();
lima.render();

createFooter();