export class Quote {

    showDetails:boolean ;
      upVote: any;
      downVote: any;
    
      constructor(
        public id: number,
        public name: string,
        public details: string,
        public submitter: string,
        public completeDate: Date) {
          this.showDetails=false
    }
    }