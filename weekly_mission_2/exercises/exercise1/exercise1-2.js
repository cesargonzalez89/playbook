const issue = {
  title: "Issue 1",
  repositoryNameAssociated: "carlogilmar",
  status: "created",
  numberOfComments: 100,
  labels: "label1",
  author: "CGR",
  dateCreated: "10/10/2012",
  lastUpdated: "10/04/2022",
  getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del issue: " + issue.title)
   console.log("Comments totales: " + issue.numberOfComments)
   console.log(issue.getGeneralInfo())