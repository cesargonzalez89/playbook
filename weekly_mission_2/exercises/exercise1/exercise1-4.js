/*
Twitter
user const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}
*/

const user = {
  user: "cesar",
  userName: "cgr",
  bio: "this is a bio",
  age: 28,
  getBio: function(){
    return this.bio
  },
  getGeneralInfo: function(){
    return `The user ${this.userName} has ${this.age} years old`
  }
 }
 
 console.log("Nombre del user: " + user.user)
 console.log(user.getGeneralInfo())
 console.log(user.getBio())