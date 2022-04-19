/*
Facebook
post
*/
class Post{
  constructor(title, author, likes, dislikes, tags){
    this.title = title,
    this.author = author,
    this.likes = likes,
    this.dislikes = dislikes,
    this.tags = tags
  }

  getTotalReactions(){
    return this.likes + this.dislikes
  }

  getGeneralInfo(){
    return `This post ${this.title} was created by ${this.author}`
  }
}

const post = new Post("vacations", "cgr", 100, 1, ["vacations","fun","famili"])
 
 console.log("Nombre del post: " + post.title)
 console.log("Reacciones totales: " + post.getTotalReactions())
 console.log(post.getGeneralInfo())