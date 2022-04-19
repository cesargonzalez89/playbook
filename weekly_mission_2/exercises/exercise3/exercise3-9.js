/*
Facebook
biography
*/
class Biography{
  constructor(name, userName, age, street, city, state,
    country){
    this.name = name,
    this.userName = userName,
    this.age = age,
    this.street = street,
    this.city = city,
    this.state = state,
    this.country = country
  }

  getNameAndAge(){
    return this.issues_open + this.issues_close
  }

  getGeneralInfo(){
    return `The user ${this.name} live in ${this.street} ${this.city} ${this.state}`
  }

}
const biography = new Biography("Cesar", "cgr", 27, "Calle falsa 123",
  "Racoon city", "Guanajuato", "Mexico")
 
 console.log("Nombre del usuario: " + biography.name)
 console.log(biography.getGeneralInfo())