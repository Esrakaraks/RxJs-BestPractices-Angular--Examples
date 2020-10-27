import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  myCurrency:string;
  constructor(private todoservice:ServiceService) { }

  ngOnInit(): void {
    this.todoservice.currentCurrency.subscribe(data=>{
      this.myCurrency=data;

    })
  }
  

}
