var Api = /** @class */ (function () {
    function Api() {
    }
    /**
    * Получение тегов
    * @returns {Promise<any>} - Промис с массивом тегов
    */
    Api.getTags = function () {
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
    Api.getAlbumByTag = function (tag) {
        return fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=' + tag + '&api_key=' + this._apiKey + '&format=json&limit=5')
            .then(function (response) {
            return response.json();
        });
    };
    Api._apiKey = '2aa06ad13a0062bcd0603f3bf23ac56d';
    return Api;
}());
export { Api };
