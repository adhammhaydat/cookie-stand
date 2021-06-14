'use strict';

let salmonProfiles = document.getElementById('salmonProfiles');

let hour= ['','6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let nameCountry=['Seatil', 'Tokyo','Dubai','Paris','Lima','Totals'];
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
    let value= this.avarg*this.getRandomCoustmer();
    this.results.push(Math.ceil(value));
    totalCookies+= this.avarg*this.getRandomCoustmer();
    this.Total=totalCookies;   
  }
  
};
  
Country.prototype.headr=function(){
  let div = document.createElement('div');
     salmonProfiles.appendChild(div);
     
    let table = document.createElement('table');
    div.appendChild(table);

    let tr=document.createElement('tr');
    table.appendChild(tr);
    for(let i=0;i<hour.length;i++){
      let th =document.createElement('th');
      tr.appendChild(th);
      th.textContent =`${hour[i]}`;
    }

};
      
Country.prototype.render= function() {
      
  // 
     let div = document.createElement('div');
     salmonProfiles.appendChild(div);
  
      let table = document.createElement('table');
      div.appendChild(table);
    
      let tr=document.createElement('tr');
      table.appendChild(tr);
      let td =document.createElement('td');
      tr.appendChild(td);
      td.textContent =`${this.name}`;
      for(let x=0 ;x<hour.length-1;x++){
        td =document.createElement('td');
        tr.appendChild(td);
        td.textContent =`${this.results[x]}`;
      }
      table.setAttribute("border", "1");
    
}; 
let render=new Country(nameCountry[0], 23,65,6.3);  
render.headr(); 
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

let total = new Country(nameCountry[5], 2,16,4.6);
total.getCookiesPerHour();
total.render();

// let Tokyo = {
//     name: 'Tokyo',
//     avarg: 1.2,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     mi
//  /     max:24,
//    r5sults:[],
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

//       let salamontable = document.createElement('ul');
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



 
  
 
  // creates a <table> element and a <tbody> element
  // let tbl = document.createElement("table");
  // let tblBody = document.createElement("tbody");

  // // creating all cells
  // for (var i = 0; i <nameCountry.length ; i++) {
  //   // creates a table row
  //   var row = document.createElement("tr");
  //   let cell = document.createElement("td");
      

  //   for (var j = 0; j < hour.length+1; j++) {
  //     // Create a <td> element and a text node, make the text
  //     // node the contents of the <td>, and put the <td> at
  //     // the end of the table row
  //     let cell = document.createElement("td");
  //     let cellText = document.createTextNode(`${hour[j]}`);
  //     cellText = document.createTextNode(`${this.results[j]}`);
  //     cell.appendChild(cellText);
  //     row.appendChild(cell);
  //   }

  //   // add the row to the end of the table body
  //   tblBody.appendChild(row);
  // }

  // // put the <tbody> in the <table>
  // tbl.appendChild(tblBody);
  // // appends <table> into <body>
  // salmonProfiles.appendChild(tbl);
  // // sets the border attribute of tbl to 2;
  // tbl.setAttribute("border", "2");
 
  
