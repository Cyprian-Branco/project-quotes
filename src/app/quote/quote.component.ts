import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes('Watch finding Nemo', 'Find an online version and watch merlin find his son', 'John'),
    new Quotes('Buy Cookies','I have to buy cookies for the parrot','Michael'),
    new Quotes('Get new Phone Case','Diana has her birthday coming up soon', 'Mathew'),
    new Quotes('Get Dog Food','Pupper likes expensive snacks', 'Mathew'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
