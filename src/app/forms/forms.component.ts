import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  model:any = {}

  constructor() { }

  ngOnInit() {
  }
  saveQuote(qForm : NgForm) : void{
      console.log(qForm);
    }
}
