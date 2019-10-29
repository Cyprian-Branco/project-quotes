import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {


  newQuote = new Quote(0, "", "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }


  constructor() { }

  ngOnInit() {
  }

}