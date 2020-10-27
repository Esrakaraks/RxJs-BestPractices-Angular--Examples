import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  //take= isteğe göre data  getirir.
  //mergemap=  observablelları birleştirmek için kullanlır.Daha sonra geriye bir observable döner.Datalar single geliyor.
  getTodoList() {
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos").pipe(mergeMap(x => from(x)),
     take(10),
      map(x => `${x.title}`));
  }

  //delete = istenilen propertyleri siler.
  getTodoList2() {
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos").pipe(mergeMap(x => from(x)), 
   map(x =>{
      delete x["completed"];
      return x; }
    ));

  }

  postUsersWithSearch(searchText){
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(mergeMap(x=>from(x)),
    filter(x=>x.name.toLowerCase().includes(searchText.toLowerCase())),
    map(x=>x.name))
  }
//BehaviorSubject : ilk anda data verir.Ve eşzamanlı olarak diğer componentlerde datayı güncel tutar.
//Subject : ilk anda data veremez.
  currentCurrency=new BehaviorSubject("TL");
  setCurrency(value){
    this.currentCurrency.next(value)

  }
}
