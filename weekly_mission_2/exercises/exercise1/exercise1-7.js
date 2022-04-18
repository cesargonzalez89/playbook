/*
Facebook
user
*/

const facebookUser = {
  name: "Cesar",
  lastName: "G",
  userName: "cgr",
  password: "pass123",
  birthday: "10/10/1900",
  gender: "male",
  getNameAndGender: function(){
    return this.name + this.gender
  },
  getGeneralInfo: function(){
    return `The user ${this.name} born in ${this.birthday}`
  }
 }
 
 console.log("Nombre del user:" + facebookUser.name)
 console.log(facebookUser.getGeneralInfo())