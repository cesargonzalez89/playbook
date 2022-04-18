/*
Facebook
post
*/

const post = {
  title: "vacations",
  author: "cgr",
  likes: 100,
  dislikes: 1,
  tags: ["vacations","fun","famili"],
  getTotalReactions: function(){
    return this.likes + this.dislikes
  },
  getGeneralInfo: function(){
    return `This post ${this.title} was created by ${this.author}`
  }
 }
 
 console.log("Nombre del post: " + post.title)
 console.log("Reacciones totales: " + post.getTotalReactions())
 console.log(post.getGeneralInfo())