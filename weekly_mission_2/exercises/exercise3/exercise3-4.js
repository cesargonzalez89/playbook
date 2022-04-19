/*
Twitter
user const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}
*/

class User{
  constructor(user, userName, bio, age){
    this.user = user,
    this.userName = userName,
    this.bio = bio,
    this.age = age
  }

  getBio(){
    return this.bio
  }

  getGeneralInfo(){
    return `The user ${this.userName} has ${this.age} years old`
  }
}

const user = new User("cesar", "cgr", "this is a bio", 28)
 
 
 console.log("Nombre del user: " + user.user)
 console.log(user.getGeneralInfo())
 console.log(user.getBio())