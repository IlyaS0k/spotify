import {Album} from './Album.js'
import React from 'react'

export function AlbumCard(props:{album: Album})
{

   return <div className='item'>
   <img src={props.album.getUrl()} width='180' height='180' alt='не удалось загрузить'></img>
   <div className='item_playlist'>{props.album.getTitle()}</div>
   </div> 
}