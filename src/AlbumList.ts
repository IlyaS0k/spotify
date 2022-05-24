/**
 * класс для массива альбомов
 */
import { Album } from "./Album.js";
export class AlbumList{
  title: string;
  list: Album[];
   /**
     * @constructor
     * @param title - название альбома
     * @param list - набор карточек в контейнере
     */
  constructor(title: string, list: Album[])
  {
    this.title = title;
    this.list = list;
  }
  /**
     * Отрисовка контейнера
     * @returns { HTMLElement} - верстка раздела
     */
  public render(): HTMLElement {
    let main_field = document.getElementsByClassName('main-field')[0];
    main_field.setAttribute('class', 'main-field');
    let main_field_title = document.createElement('div');
    main_field_title.setAttribute('class', 'main-field-title');
    let big_item = document.createElement('div');
    big_item.setAttribute('class', 'big_item');
    this.list.forEach(function(item, i, list) {
      big_item.appendChild(item.render());
    });
    main_field_title.innerText = this.title;
    main_field_title.appendChild(big_item);
    main_field.appendChild(main_field_title);
    return main_field_title;
  }
}
