// DATA LAYER

let passengerFullName = document.getElementById("nomeCognome");
let km = document.getElementById("km");
let ageRange = document.getElementById("fasciaEta");

let calcola = document.getElementById("calcola");
let annulla = document.getElementById("annulla");

let discountJunior = 0.20;
let discountSenior = 0.40;
let ticketRate = 0.21;
let outputPrice;
let totalPrice = 0;

// BUSINESS LAYER

calcola.addEventListener("click", function() {
  
  totalPrice = km.value * ticketRate;

  if(ageRange.value === "Minorenne") {
    outputPrice = (totalPrice * (1 - discountJunior)).toFixed(2)
  }else if (ageRange.value === "Senior"){
    outputPrice = (totalPrice * (1 - discountSenior)).toFixed(2)
  }else {
    outputPrice = totalPrice;
  }

  // PRESENTATION LAYER
  document.getElementById("passengerName").innerHTML = passengerFullName.value;
  document.getElementById("ticketPrice").innerHTML = `${outputPrice} &euro;`;
  document.getElementById("ticketType").append(ageRange.value);
});


annulla.addEventListener("click", function(){
  alert("troppo tardi t'ho già preso i soldi")
})

