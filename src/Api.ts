/**
 * Класс для взаимодействия с API
 */
import { Album } from "./Album";
import { AlbumList } from "./AlbumList";

export abstract class Api {
  private static _apiKey : string = '2aa06ad13a0062bcd0603f3bf23ac56d'; 
  /**
  * Получение тегов
  * @returns {Promise<any>} - Промис с массивом тегов
  */
     static getTags() : Promise<string[]> {
     return fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key='+this._apiKey+'&format=json&limit=5')
    .then((response) => {
      return response.json();})
    .then
    ((data) => data.tags.tag.map((ob: any) => String(ob.name)));
  }
  /**
  * Получение альбомов
  * @returns {Promise<any>} - Промис с массивом альбомов
  */
    static getAlbumByTag(tag: string) : Promise<Album[]> {
    return fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag='+tag+'&api_key='+this._apiKey+'&format=json&limit=5')
    .then((response) => {
      return response.json();})
      .then
      ((data)=>
          data.albums.album.map((ob: any) => 
              new Album(ob.name, ob.image[2]['#text'])
            )
          );
  }
}
