/**
 * класс для массива альбомов
 */
import { Album } from "./Album.js";
export class AlbumList{
 private _title: string;
 private _list: Album[];
   /**
     * @constructor
     * @param _title - название альбома
     * @param _list - набор карточек в контейнере
     */
  getTitle(){
    return this._title;
  }
  getList(){
    return this._list;
  }

  constructor(title: string, list: Album[])
  {
    this._title = title;
    this._list = list;
  }
  // /**
  //    * Отрисовка контейнера
  //    * @returns { HTMLElement} - верстка раздела
  //    */
  // render(): HTMLElement {
  //   let main_field = document.getElementsByClassName('main-field')[0];
  //   main_field.setAttribute('class', 'main-field');
  //   let main_field_title = document.createElement('div');
  //   main_field_title.setAttribute('class', 'main-field-title');
  //   let big_item = document.createElement('div');
  //   big_item.setAttribute('class', 'big_item');
  //   this._list.forEach(function(item, i, list) {
  //     big_item.appendChild(item.render());
  //   });
  //   main_field_title.innerText = this._title;
  //   main_field_title.appendChild(big_item);
  //   main_field.appendChild(main_field_title);
  //   return main_field_title;
  // }
}
