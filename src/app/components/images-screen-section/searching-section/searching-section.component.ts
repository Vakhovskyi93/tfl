import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MainService } from '../../../services/main.service'
import {  Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-searching-section',
  templateUrl: './searching-section.component.html',
  styleUrls: ['./searching-section.component.css']
})
export class SearchingSectionComponent implements OnInit {
  dataList= [] as any;
  pageSize = this.dataList.slice(0, 6);
  
  @ViewChild('formInputSearch') form:any;
  userQuestion = new Subject<string>();
  search:string = ''
   
  
  constructor(
    public server: MainService,
  ) { 
    this.userQuestion.pipe(
      debounceTime(1500),
      distinctUntilChanged())
      .subscribe(value => {
        value ? this.server.searchingRequest(value) : null;
      });
  }
  ngOnInit(): void {
     this.server.newPhoto.subscribe((data) => { 
       this.dataList = data;
       this.pageSize = this.dataList.slice(0, 6);
      
     })
   
  }
  OnPageChange(event: PageEvent){ // PAgination controls

    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = event.pageSize + startIndex;
    endIndex > this.dataList.length ? endIndex = this.dataList.length : null;
    this.pageSize = this.dataList.slice(startIndex, endIndex);
   
  }
  
  AddToFavorite(arr:any, e:any ){
    let str = e.path[2].children[2].lastChild.value;
    this.dataList.find((i:any)=>i.id == arr.id? i.tags = []: null);
    
    if(str) {
      let TagsList:string[]= [];
      str.split(',').map((i:string)=> TagsList.push(i.trim()));
      arr.tags =  TagsList;
      this.dataList.find((i:any) => i.id == arr.id? i.tags.concat(arr.tags) : null);
      this.server.setLocalStorage(arr);
    }else{
        this.server.setLocalStorage(arr);

      }
    }
    
    removeFavorite(item:any, e: Event){
      this.dataList.find((i:any)=>i.id == item.id? delete i.tags : null);
      this.server.removeFavoritePhoto(`Flickr${item.id}`);
    }
   


}
