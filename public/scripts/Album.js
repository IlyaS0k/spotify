/**
 * Класс для взаимодействия с API
 */
var Album = /** @class */ (function () {
    function Album(title, imgUrl) {
        this.title = title;
        this.imgUrl = imgUrl;
    }
    /**
      * @constructor
      * @param title - название альбома
      * @param imgUrl - url картинки
      */
    /**
    * Отрисовка альбома
    * @returns {HTMLElement} верстка альбома
    */
    Album.prototype.render = function () {
        var div = document.createElement('div');
        div.setAttribute('class', 'item');
        var img = document.createElement('img');
        img.setAttribute('src', this.imgUrl);
        img.setAttribute('width', '180');
        img.setAttribute('height', '160');
        img.setAttribute('alt', 'Не удалось загрузить');
        var div_desc = document.createElement('div');
        div_desc.setAttribute('class', 'item_description');
        var div_title = document.createElement('div');
        div_title.setAttribute('class', 'item_playlist');
        div_title.innerText = this.title;
        div.appendChild(img);
        div.appendChild(div_title);
        return div;
    };
    return Album;
}());
export { Album };
