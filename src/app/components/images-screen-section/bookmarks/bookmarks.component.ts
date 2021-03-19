import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MainService } from '../../../services/main.service'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  data =[] as any;
  pageSize = this.data.slice(0, 6)
  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.getFavoritePhoto();
    this.service.FavoritePhoto.subscribe(data => {
      this.data = data;
      this.pageSize = this.data.slice(0, 6);
    })
  }
  OnPageChange(event: PageEvent){ // PAgination controls

    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = event.pageSize + startIndex;
    endIndex > this.data.length ? endIndex = this.data.length : null;
    this.pageSize = this.data.slice(startIndex, endIndex); 
  }
  delete(item:string){
    this.service.removeFavoritePhoto(`Flickr${item}`);
  }

}
