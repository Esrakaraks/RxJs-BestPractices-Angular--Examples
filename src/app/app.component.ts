import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, timer,of,defer, from, fromEvent, iif } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter,find, map, mergeMap} from 'rxjs/operators'
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  currency:string[]=["TL","DOLAR"]
  search=new FormControl(" ")
  selectCurrency=new FormControl("TL")
  constructor(private todoServices:ServiceService){}
  ngAfterViewInit(): void {
  
  }
ngOnInit(){
   //this.todoList();
   //this.todoList2();
  // this.searchControl();
   this.selectValues()


  }
  todoList(){
    this.todoServices.getTodoList().subscribe(data=>{
      console.log("data",data);
      
    })
  }
  todoList2(){
    this.todoServices.getTodoList2().subscribe(data=>{
      console.log("data2",data);
      
    })
  }
//debounceTime : belirtilen süre sonrasında  subscribe olur.
//distinctUntilChanged : bu metoda gelen data eğer akıştaki bir önceki data ile aynı değere sahipse dataya subscribe olmaz.
//iif : koşul sağlar.Koşula göre datanın  subscribe olmasını sağlar.
  searchControl(){
    this.search.valueChanges.pipe(debounceTime(500),map(x=>x.trim()),
    distinctUntilChanged(),
    mergeMap(val=>iif(()=>val.length>1,of(val))),mergeMap(val=>this.todoServices.postUsersWithSearch(val))).subscribe(data=>{
      console.log("data",data);
  })
  }
  selectValues(){
    this.selectCurrency.valueChanges.subscribe(data=>{
      this.todoServices.setCurrency(data);
      
    })
  }

}
