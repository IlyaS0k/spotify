import { Album } from "./Album.js";
import { AlbumList } from "./AlbumList.js";
import { Api } from "./Api.js";

let api = new Api();
//скрипт отрисовывающий разделы с альбомами
api.getTags()
.then((data:string[])=>{data.forEach(function(item, i, list){
  let tag = item;
  let albumList = new AlbumList(tag, []);
  api.getAlbumByTag(tag).then((data:Album[])=>{ 
   data.forEach(function(item,i,list){albumList.list.push(item)}); 
   return albumList;})
  .then((data: AlbumList) => data.render())
})});




