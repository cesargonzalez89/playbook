/*
Twitter
trending_topic
*/

class TrendingTopic{
  constructor(title, hashtag, description, qtyTweets,
  trend, rank){
    this.title = title,
    this.hashtag = hashtag,
    this.description = description,
    this.qtyTweets = qtyTweets,
    this.trend = trend,
    this.rank = rank
  }

  getTrendAndRank(){
    return this.trend + this.rank
  }

  getGeneralInfo(){
    return `This trending ${this.title} has ${this.qtyTweets} tweets`
  }
}

const trendingTopic = new TrendingTopic("LaunchX", "#launchx",
  "launchx y la calidad de software", 50000, "Tecnologia", 1)
 
 console.log("Nombre del trending:" + trendingTopic.title)
 console.log("Trend: " + trendingTopic.trend)
 console.log(trendingTopic.getGeneralInfo())