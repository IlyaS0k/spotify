var AlbumList = /** @class */ (function () {
    function AlbumList(title, list) {
        this._title = title;
        this._list = list;
    }
    /**
      * @constructor
      * @param _title - название альбома
      * @param _list - набор карточек в контейнере
      */
    AlbumList.prototype.getTitle = function () {
        return this._title;
    };
    AlbumList.prototype.getList = function () {
        return this._list;
    };
    return AlbumList;
}());
export { AlbumList };
