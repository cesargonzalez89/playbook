/*
Twitter
hashtag
*/
class Hashtag{
  constructor(name, hashtag, description, qtyTweets,
  trend, author){
    this.name = name,
    this.hashtag = hashtag,
    this.description = description,
    this.qtyTweets = qtyTweets,
    this.trend = trend,
    this.author = author
  }

  getTrend(){
    return this.trend
  }

  getGeneralInfo(){
    return `This hashtag ${this.name} has ${this.qtyTweets} tweets`
  }
}
const hashtag = new Hashtag("LaunchX", "#launchx", "launchx y la calidad de software",
  500, "Tecnologia", "carlogilmar")
 
 console.log("Nombre del repo:" + hashtag.name)
 console.log("Issues totales: " + hashtag.getTrend())
 console.log(hashtag.getGeneralInfo())