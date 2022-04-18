/*
Twitter
trending_topic
*/

const trendingTopic = {
  title: "LaunchX",
  hashtag:"#launchx",
  description: "launchx y la calidad de software",
  qtyTweets: 50000,
  trend: "Tecnologia",
  rank: 1,
  getTrendAndRank: function(){
    return this.trend + this.rank
  },
  getGeneralInfo: function(){
    return `This trending ${this.title} has ${this.qtyTweets} tweets`
  }
 }
 
 console.log("Nombre del trending:" + trendingTopic.title)
 console.log("Trend: " + trendingTopic.trend)
 console.log(trendingTopic.getGeneralInfo())