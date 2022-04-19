class Issue{
  constructor(title, repositoryNameAssociated, status,
  numberOfComments, labels, author, dateCreated, lastUpdated){
    this.title = title,
    this.repositoryNameAssociated = repositoryNameAssociated,
    this.status = status,
    this.numberOfComments = numberOfComments,
    this.labels = labels,
    this.author = author,
    this.dateCreated = dateCreated,
    this.lastUpdated = lastUpdated
  }

  getTitleAndAuthor(){
    return this.title + this.author
  }

  getGeneralInfo(){
    return `This issue ${this.title} was created by ${this.author}`
  }

}

const issue = new Issue("Issue 1", "carlogilmar", "created",
  100, "label1", "CGR", "10/10/2012", "10/04/2022")
   
   console.log("Nombre del issue: " + issue.title)
   console.log("Comments totales: " + issue.numberOfComments)
   console.log(issue.getGeneralInfo())