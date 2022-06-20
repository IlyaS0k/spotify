import {AlbumList} from './AlbumList'
import {Album} from './Album'
import React, { useState, useEffect } from 'react'
import { AlbumCard } from './AlbumCard';

export function AlbumContainer(props:{albumTitle: string, albumList: Album[], promise: Promise<AlbumList>})
{ 
  const [albums, setAlbums] = useState(props.albumList);
  const [tag, setTag] = useState(props.albumTitle);
  props.promise.then((data)=>{
  setAlbums(data.getList());
  setTag(data.getTitle());
  })
  
  return <div>
   <div className='main-field-title'>{tag}</div>
   <div className='big_item'>
   {albums.slice(0,5).map(data => <AlbumCard key={data.getUrl()} album={data}/>)}
   </div>
  </div> 
}