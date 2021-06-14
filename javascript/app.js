'use strict';

let salmonProfiles = document.getElementById('salmonProfiles');

let hour= ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

function Country(name,min,max,avarg){
  this.name = name;
  this.min = min;
  this.max= max;
  this.avarg = avarg;
  this.results=[];
  this.Total=0;
  //this.totalEachDay=0;
}
Country.prototype.getRandomCoustmer=function() {       
  return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); 
};
Country.prototype.getCookiesPerHour=function(){
  let totalCookies=0;
  for(let i=0;i<hour.length;i++){
    this.results.push(this.avarg*this.getRandomCoustmer());
    totalCookies+= this.avarg*this.getRandomCoustmer();
    this.Total=totalCookies;   
  }
  console.log(this.avarg*this.getRandomCoustmer());
};
  
      
Country.prototype.render= function() {
      
  
  let titleElement = document.createElement('h1');
  titleElement.textContent = 'seattle';
  salmonProfiles.appendChild(titleElement);
  
  let divElement =document.createElement('div');
  salmonProfiles.appendChild(divElement);

  let salamonList = document.createElement('ul');
  divElement.appendChild(salamonList);
      
  for(let i = 0; i < this.hour.length; i++) {
    let listItem = document.createElement('li');
    salamonList.appendChild(listItem);
    listItem.textContent = `${hour[i]},${Math.ceil(this.results[i])} cookies`;

    }
    let listItem = document.createElement('li');
    salamonList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
};
  
let seatil = new Country('seatil', 23,65,6.3);
seatil.getCookiesPerHour();
seatil.render();


// let Tokyo = {
//     name: 'Tokyo',
//     avarg: 1.2,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:3,
//     max:24,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//         let totalCookies=0; 
//         for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.avarg*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.avarg*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Tokyo';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]},${Math.ceil(this.results[i])} cookies`;
//       }
  
//       let listItem = document.createElement('li');
//     salamonList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;  
//     }
//   };
// let Dubai = {
//     name: 'Dubai',
//     avarg: 3.7,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:11,
//     max:38,
//     results:[],
//     Total: 0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//           for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.avarg*this.getRandomCoustmer();
//             this.Total=totalCookies;   
//              Math.floor(this.results.push(this.avarg*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Dubai';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]},${Math.ceil(this.results[i])} cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total ${Math.ceil( this.Total)} cookies`;
     
//     }
// };
// let Paris = {
//     name: 'Paris',
//     avarg: 2.3,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:20,
//     max:38,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.avarg*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.avarg*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Paris';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]},${Math.ceil(this.results[i])} cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total ${Math.ceil( this.Total)} cookies`;
     
//     }
// };
// let Lima = {
//     name: 'Lima',
//     avarg: 4.6,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:2,
//     max:16,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//           for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.avarg*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.avarg*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Lima';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]},${Math.ceil(this.results[i])} cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total ${Math.ceil( this.Total)} cookies`;
     
//     }
// };



 
  
 
  
 
  
