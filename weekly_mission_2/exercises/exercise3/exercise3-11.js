/*
Uber
travel
*/
class Travel{
  constructor(userId, userName, driverId, driverName,
    initialPoint, finalPoint, totalKm, cost){
      this.userId = userId,
      this.userName = userName,
      this.driverId = driverId,
      this.driverName = driverName,
      this.initialPoint = initialPoint,
      this.finalPoint = finalPoint,
      this.totalKm = totalKm,
      this.cost = cost
  }

  getKmsAndCost(){
    return `This travel have ${this.totalKm} kilometers and a cost of ${this.cost}`
  }
}

const travel = new Travel(530, "carlogilmar", 225, "JPerez",
  199, 299, 10, 120)
 
 console.log("Nombre del solicitante: " + travel.userName)
 console.log(travel.getKmsAndCost())