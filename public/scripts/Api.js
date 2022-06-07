/**
 * Класс для взаимодействия с API
 */
import { Album } from "./Album.js";
var Api = /** @class */ (function () {
    function Api() {
        this._apiKey = '2aa06ad13a0062bcd0603f3bf23ac56d';
    }
    /**
    * Получение тегов
    * @returns {Promise<any>} - Промис с массивом тегов
    */
    Api.prototype.getTags = function () {
        return fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=' + this._apiKey + '&format=json&limit=5')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) { return data.tags.tag.map(function (ob) { return String(ob.name); }); });
    };
    /**
    * Получение альбомов
    * @returns {Promise<any>} - Промис с массивом альбомов
    */
    Api.prototype.getAlbumByTag = function (tag) {
        return fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=' + tag + '&api_key=' + this._apiKey + '&format=json&limit=5')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) { return data.albums.album.map(function (ob) { return new Album(ob.name, ob.image[2]['#text']); }); });
    };
    return Api;
}());
export { Api };
