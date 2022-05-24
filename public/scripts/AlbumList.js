var AlbumList = /** @class */ (function () {
    /**
      * @constructor
      * @param title - название альбома
      * @param list - набор карточек в контейнере
      */
    function AlbumList(title, list) {
        this.title = title;
        this.list = list;
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
        this.list.forEach(function (item, i, list) {
            big_item.appendChild(item.render());
        });
        main_field_title.innerText = this.title;
        main_field_title.appendChild(big_item);
        main_field.appendChild(main_field_title);
        return main_field_title;
    };
    return AlbumList;
}());
export { AlbumList };
