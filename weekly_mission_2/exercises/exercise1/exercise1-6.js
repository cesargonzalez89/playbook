/*
Twitter
hashtag
*/

const hashtag = {
  name: "LaunchX",
  hashtag:"#launchx",
  description: "launchx y la calidad de software",
  qtyTweets: 500,
  trend: "Tecnologia",
  author: "carlogilmar",
  getTrend: function(){
    return this.trend
  },
  getGeneralInfo: function(){
    return `This hashtag ${this.name} has ${this.qtyTweets} tweets`
  }
}
 
 console.log("Nombre del repo:" + hashtag.name)
 console.log("Issues totales: " + hashtag.getTrend())
 console.log(hashtag.getGeneralInfo())