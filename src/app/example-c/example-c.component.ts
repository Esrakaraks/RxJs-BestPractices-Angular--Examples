import { Component, OnInit } from '@angular/core';
import { defer, from, fromEvent, interval, of, range, timer } from 'rxjs';
import { debounceTime, distinct, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-example-c',
  templateUrl: './example-c.component.html',
  styleUrls: ['./example-c.component.css']
})
export class ExampleCComponent implements OnInit {
input=null;
source=[{id:2,name:"test2",age:"25"},
{id:1,name:"test",age:"25"},
 {id:3,name:"test3",age:"25"}];

SourceArray=["5",6,4,"1",2,"4"];

  constructor() { }

  ngOnInit(): void {
   
  //  OF: Datayı sıralı olarak getirir.
  // const  value=of(this.source);
  // value.subscribe(data=>{
  //     console.log(data);
  //})




//FROM: array olarak dönen değeri index index ayırarak getirir.
  //  const  value=from("5,4,3");
  //  value.subscribe(data=>{
  //    console.log("data",data);
  // })
    


// DEFER : Subscribe olduğumuz anda aldığımız datadır.Genelikle  tarihlerde kullanılır.
// const sourceDate=of(new Date())
// sourceDate.subscribe(data=>{
//   console.log(data);
// })



//İNTERVAL ::Belirlediğimiz dataları istediğimiz sürede getirmesidir.Settimeout gibi.

// const test=interval(2000);
// test.subscribe(data=>{
//   console.log(data);
// })



//TİMER  : Datayı istediğimiz süre sonra 1 kere getirir.fakat 2. paramaetre belirleersek 2.paramtre süre aralıkları ile olarak setimeout gibi çalışmaya başlar.

// const test=timer(2000,1000);
// test.subscribe(data=>{
//   console.log(data);
  
// })


// DEBOUNCETİME : SERVİSTEN  GELEN DATALARI  İSTEDİĞİMİZ SÜRE SONUNDA SUBSCRİBE EDER.(EVENTLERDE GENELLİKLE KULLANILIR.)
// const searchbox=document.getElementById('search');
//  const keyup=fromEvent(searchbox,'keyup');

// keyup.pipe(debounceTime(1000)).subscribe(data=>{
//   console.log(data);
  
// })



//DİSTİNCT : AYNI DATALARDAN BİRDEN FAZLA VARSA TEKE İNDİRİR.

// const data=of("1","test","2","test",2,"1","test","2");
// data.pipe(distinct()).subscribe(data=>{
//   console.log(data);
  
// })



//ThrottleTime : Servisten gelen  dataları istediğimiz süre kadar tuttar ve atlama yaparak  istediğimiz o süredeki dataları atlayarak getirir.
// const source=interval(1000);

// source.pipe(throttleTime(5000)).subscribe(data=>{
//   console.log(data);
  
// })


//map 
const testData=from([{id:1,name:"name1",age:30},
{id:2,name:"name2",age:35},
{id:3,name:"name3",age:40},])
testData.pipe(map(x=>x.id)).subscribe(data=>{
  console.log(data);
  
})

 }


}
