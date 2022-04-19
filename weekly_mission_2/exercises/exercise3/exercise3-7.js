/*
Facebook
user
*/

class FacebookUser{
  constructor(name, lastName, userName, password, birthday,
  gender){
    this.name = name,
    this.lastName = lastName,
    this.userName = userName,
    this.password = password,
    this.birthday = birthday,
    this.gender = gender
  }

  getNameAndGender(){
    return this.name + this.gender
  }

  getGeneralInfo(){
    return `The user ${this.name} born in ${this.birthday}`
  }
}

const facebookUser = new FacebookUser("Cesar", "G", "cgr", "pass123",
  "10/10/1900", "male")
 
 console.log("Nombre del user:" + facebookUser.name)
 console.log(facebookUser.getGeneralInfo())