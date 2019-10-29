import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Martin Luther King, Jr.', 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy', 'admin', new Date(1939,9,23)),
   new Quote(2, 'Edward Young', 'Procastination is the thief of time','admin', new Date(2017,9,24)),
   new Quote(3, 'General Colin Powell', 'There is no secret way to success. It is the result of preparation, hardwork, and learning from failure', 'admin', new Date(1959,9,25)),
    new Quote(4, 'Maya Angelou','If you are always trying to be normal you will never know how amazing you can be', 'admin', new Date(2013,9,26)),
  ];
  showDetails: boolean;
  showQuote: any;

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  get sortQuotes() {
    return this.quotes.sort((a,b) =>{
return(b.upVote) as any - (a.downVote) as any;
    });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    
  }


  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
    }
  }
}



  ngOnInit() {
}

}