/*
Uber
travel
*/

const travel = {
  userId: 530,
  userName: "carlogilmar",
  driverId: 225,
  driverName: "JPerez",
  initialPoint: 199,
  finalPoint: 299,
  totalKm: 10,
  cost: 120,
  getKmsAndCost: function(){
    return `This travel have ${this.totalKm} kilometers and a cost of ${this.cost}`
  }
 }
 
 console.log("Nombre del solicitante: " + travel.userName)
 console.log(travel.getKmsAndCost())