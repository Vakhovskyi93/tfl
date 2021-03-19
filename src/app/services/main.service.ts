import { Injectable } from '@angular/core';
import { Photo } from '../shades/photo'
 
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  readonly enterpoint:string = 'https://www.flickr.com/';
  readonly param_api_key:string = '94a3e3f0cdc492c13b4a15302396c7b2';
  private dataSource = new BehaviorSubject<[Photo]>([{id:'',farm:0, title:'', isfamily:0, isfriend:0,ispublic: 0,  owner: '', secret: '', server: '' }])
  newPhoto = this.dataSource.asObservable();

  private favoritedataSource = new BehaviorSubject<[Photo]>([{id:'',farm:0, title:'', isfamily:0, isfriend:0,ispublic: 0,  owner: '', secret: '', server: '',tags:[] }])
  FavoritePhoto = this.favoritedataSource.asObservable();

  constructor() { } 
  searchingRequest(str:string){
    fetch(`${this.enterpoint}services/rest/?method=flickr.photos.search&api_key=${this.param_api_key}&text=${str}&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(commits => {
      this.emitNewPhotos(commits.photos.photo)
      }
    );
  }

  emitNewPhotos(photo:any) {this.dataSource.next(photo)}

  emitFavoritePhotos(photo:any) {this.favoritedataSource.next(photo)}
  setLocalStorage(arr:any){ localStorage.setItem(`Flickr${arr.id}`,JSON.stringify(arr)) }
  getFavoritePhoto(){
    let result:Object[] = [];
    let data = Object.keys(localStorage);
    let values = data.filter( i => i.indexOf('Flickr', 0) == 0);
    values.map( i => {
      let r:any =  localStorage.getItem(i);
      result.push( JSON.parse(r) );
    })
    return this.emitFavoritePhotos(result);
  }
  removeFavoritePhoto(str:string){
    localStorage.removeItem(str);
    this.getFavoritePhoto();

  }
  


}
