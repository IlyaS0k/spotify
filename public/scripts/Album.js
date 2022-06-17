/**
 * Класс альбомов
 */
var Album = /** @class */ (function () {
    function Album(title, imgUrl) {
        this._title = title;
        this._imgUrl = imgUrl;
    }
    //геттеры для полей
    Album.prototype.getTitle = function () {
        return this._title;
    };
    Album.prototype.getUrl = function () {
        return this._imgUrl;
    };
    return Album;
}());
export { Album };
