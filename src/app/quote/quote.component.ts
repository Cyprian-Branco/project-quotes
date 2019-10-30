import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Richard Feynman', 'For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.', 'John', new Date(1939,9,23)),
   new Quote(2, 'Albert Eisntein', 'nsanity: doing the same thing over and over again and expecting different results.' ,'Alex', new Date(2017,9,24)),
   
  ];
  showDetails: boolean;
  showQuote: any;

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
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