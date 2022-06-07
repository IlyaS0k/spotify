import { AlbumList } from "./AlbumList.js";
import { Api } from "./Api.js";
var api = new Api();
//скрипт отрисовывающий разделы с альбомами
api.getTags()
    .then(function (data) {
    data.forEach(function (item, i, list) {
        var tag = item;
        api.getAlbumByTag(tag).then(function (data) {
            var albumList = new AlbumList(tag, data);
            return albumList;
        })
            .then(function (data) { return data.render(); });
    });
});
