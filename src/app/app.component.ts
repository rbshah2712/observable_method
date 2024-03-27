import { Component, OnInit } from '@angular/core';
import { Photos } from './classes/photos';
import { Observable, first, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'observable_method';

  lstStaticData :Photos[] = [
    {albumId: 1,id: 1,title:"Test Data Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 2,title:"Test Data Record2",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 3,title:"Test Data Record3",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 4,title:"Test Data Record4",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},


    {albumId: 2,id: 1,title:"Test Album Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 2,title:"Test Album Record2",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 3,title:"Test Album Record3",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 4,title:"Test Album Record4",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},

    {albumId: 3,id: 1,title:"Test New Album Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},


  ];

//Creating observable using constructors
 /* myobservable = new Observable((observer)=>{
    console.log("Observable Starts");
    setTimeout(()=>{observer.next("1")},1000)
    setTimeout(()=>{observer.next("2")},2000)
    setTimeout(()=>{observer.next("3")},3000)
    setTimeout(()=>{observer.error(new Error("something went wrong"))},3000)
    setTimeout(()=>{observer.next("4")},4000)
    setTimeout(()=>{observer.next("5")},5000)
    setTimeout(()=>{observer.complete()},3000)

  });*/


  myobservable = Observable.create((observer: { next: (arg0: string) => void; }) => {
    setTimeout(()=>{observer.next("A")},1000)
    setTimeout(()=>{observer.next("B")},2000)
    setTimeout(()=>{observer.next("C")},3000)
    setTimeout(()=>{observer.next("D")},4000)
    setTimeout(()=>{observer.next("E")},5000)

  });

  array1 = [1,2,3,6,7];
  array2 = ['A','B','C'];

 myobservable1 = of(this.array1,this.array2,20,'Ruchi',88);

  myobservable2 = from(this.array1); //it takes only 1 argument and also of iterable type

  
  ngOnInit(){
    this.OnAlbumSelected(2);
    this.myobservable.subscribe((val: any) => {
      console.log('Using Not first operator');
      console.log(val);
    },(error: { message: any; }) => {
      alert(error.message);
    },() => alert('observable has 1st time completed emitting all values'));

    this.myobservable1.pipe(first()).subscribe((val: any) => {
      console.log('Using first operator');
      console.log(val);
    },(error: { message: any; }) => {
      alert(error.message);
    },() => alert('observable has 2nd time completed emitting all values'));


  }

  OnAlbumSelected(selectedAlbumId:number):void{
    
  this.lstStaticData = this.lstStaticData.filter(m=>m.albumId == selectedAlbumId);
  }


  

}
