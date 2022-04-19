class PullRequest{
  constructor(title, branchName, dateCreated, status
    ,repositoryNameAssociated){
      this.title = title,
      this.branchName = branchName,
      this.dateCreated = dateCreated,
      this.status = status,
      this.repositoryNameAssociated = repositoryNameAssociated
  }

  getStatus(){
    return this.status
  }

  getTitleAndAutor(){
    return `This pull request ${this.title} was created since ${this.dateCreated}`
  }
}

const pullRequest = new PullRequest("mi primer PR", "main",
  "10/04/2022", "created", "mi primer practica")
   
console.log("Nombre del pull request: " + pullRequest.title)
console.log(pullRequest.getTitleAndAutor())