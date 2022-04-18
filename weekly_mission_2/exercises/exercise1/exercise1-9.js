/*
Facebook
biography
*/

const biography = {
  name: "Cesar",
  userName: "cgr",
  age: 27,
  street: "Calle falsa 123",
  city: "Racoon city",
  state: "Guanajuato",
  country: "Mexico",
  getNameAndAge: function(){
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function(){
    return `The user ${this.name} live in ${this.street} ${this.city} ${this.state}`
  }
 }
 
 console.log("Nombre del user: " + biography.name)
 console.log(biography.getGeneralInfo())