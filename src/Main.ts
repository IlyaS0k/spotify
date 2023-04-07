import { Album } from "./Album.js";
import { AlbumList } from "./AlbumList.js";
import { Api } from "./Api.js";

let api = new Api();
//скрипт отрисовывающий разделы с альбомами
api.getTags()
.then((data:string[])=>{data.forEach(function(item, i, list){
  let tag = item;
  api.getAlbumByTag(tag).then((data:Album[])=>{ 
  let albumList = new AlbumList(tag, data);
  return albumList;})
  .then((data: AlbumList) => data.render())
})});




