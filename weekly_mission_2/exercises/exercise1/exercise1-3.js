const pullRequest = {
  title: "mi primer PR",
  branchName: "main",
  dateCreated: "10/04/2022",
  status: "created",
  repositoryNameAssociated: "mi primer practica",
  getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This pull request ${this.title} was created since ${this.dateCreated}`
    }
   }
   
   console.log("Nombre del pull request: " + pullRequest.title)
   console.log(pullRequest.getTitleAndAutor())