var AlbumList = /** @class */ (function () {
    /**
      * @constructor
      * @param _title - название альбома
      * @param _list - набор карточек в контейнере
      */
    function AlbumList(title, list) {
        this._title = title;
        this._list = list;
    }
    /**
       * Отрисовка контейнера
       * @returns { HTMLElement} - верстка раздела
       */
    AlbumList.prototype.render = function () {
        var main_field = document.getElementsByClassName('main-field')[0];
        main_field.setAttribute('class', 'main-field');
        var main_field_title = document.createElement('div');
        main_field_title.setAttribute('class', 'main-field-title');
        var big_item = document.createElement('div');
        big_item.setAttribute('class', 'big_item');
        this._list.forEach(function (item, i, list) {
            big_item.appendChild(item.render());
        });
        main_field_title.innerText = this._title;
        main_field_title.appendChild(big_item);
        main_field.appendChild(main_field_title);
        return main_field_title;
    };
    return AlbumList;
}());
export { AlbumList };
