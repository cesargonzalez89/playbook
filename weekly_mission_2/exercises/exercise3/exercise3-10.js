
/*
Uber
profile
*/
class Profile{
  constructor(name, lastName, userName, age, street,
    city, state, country, ranking, uberRewards){
    this.name = name,
    this.lastName = lastName,
    this.userName = userName,
    this.age = age,
    this.street = street,
    this.city = city,
    this.state = state,
    this.country = country,
    this.ranking = ranking,
    this.uberRewards = uberRewards
  }

  getRanking(){
    return this.ranking
  }

  getGeneralInfo(){
    return `The user ${this.name} ${this.lastName} live in ${this.street} ${this.city} ${this.state}`
  }
}

const profile = new Profile("Cesar", "Cesar", "cgr", 27,
  "Calle falsa 123", "Racoon city", "Guanajuato",  "Mexico",
  4.6, 1500)
 
 console.log("Nombre del usuario: " + profile.name)
 console.log("Ranking: " + profile.getRanking())
 console.log(profile.getGeneralInfo())