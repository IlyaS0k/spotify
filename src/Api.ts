/**
 * Класс для взаимодействия с API
 */
import { Album } from "./Album.js";

export class Api {
  api_key : string = '2aa06ad13a0062bcd0603f3bf23ac56d'; 
  /**
  * Получение тегов
  * @returns {Promise<any>} - Промис с массивом тегов
  */
  getTags() {
    
     return fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key='+this.api_key+'&format=json&limit=5')
    .then((response) => {
      return response.json();})
    .then
    ((data) => data.tags.tag.map((ob: any) => String(ob.name)))
    .then((data)=>{return data;});
  }
  /**
  * Получение альбомов
  * @returns {Promise<any>} - Промис с массивом альбомов
  */
  getAlbumByTag(tag: string) {
    return fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag='+tag+'&api_key='+this.api_key+'&format=json&limit=5')
    .then((response) => {
      return response.json();})
      .then
      ((data)=>data.albums.album.map((ob: any) => new Album(ob.name, ob.image[2]['#text'])))
      .then
      ((data)=>{return data});
  }
}
