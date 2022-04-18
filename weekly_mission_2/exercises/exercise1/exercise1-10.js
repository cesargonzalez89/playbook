
/*
Uber
profile
*/

const profile = {
  name: "Cesar",
  lastName: "Cesar",
  userName: "cgr",
  age: 27,
  street: "Calle falsa 123",
  city: "Racoon city",
  state: "Guanajuato",
  country: "Mexico",
  ranking: 4.6,
  uberRewards: 1500,
  getRanking: function(){
    return this.ranking
  },
  getGeneralInfo: function(){
    return `The user ${this.name} ${this.lastName} live in ${this.street} ${this.city} ${this.state}`
  }
 }
 
 console.log("Nombre del usuario: " + profile.name)
 console.log("Ranking: " + profile.getRanking())
 console.log(profile.getGeneralInfo())