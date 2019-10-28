import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Quote } from '@angular/compiler/src/expression_parser/ast';
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

@Output() postQuote = new EventEmitter()
quotePublisher:string
quoteTxt:string
quoteAuthor:string
createdQuote:any

submitQuote(){
  this.createdQuote = new Quotes(this.quotePublisher,this.quoteTxt, this.quoteAuthor)
  
}
  constructor() { }

  ngOnInit() {
  }

}
