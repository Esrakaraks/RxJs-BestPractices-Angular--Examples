import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-example-b',
  templateUrl: './example-b.component.html',
  styleUrls: ['./example-b.component.css']
})
export class ExampleBComponent implements OnInit {

  constructor(public todoservice:ServiceService) { }

  ngOnInit(): void {
  }

}
