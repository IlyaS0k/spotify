import React, { useState, useEffect } from 'react';
import {Api} from './Api';
import {AlbumContainer} from './AlbumContainer';
import {AlbumList} from './AlbumList'
import {Album} from './Album'


function App() {
  const [containers, setContainers] = useState([] as AlbumList[]);
  useEffect(()=>{Api.getTags().then(topTags=>Promise.all(topTags.map(tag=>Api.getAlbumByTag(tag).then
    ((data)=>
        data.albums.album.map((ob: any) => 
            new Album(ob.name, ob.image[2]['#text'])
          )
        ).then(albums => {
    return new AlbumList(tag, albums);
  }))
  ).then(data=>setContainers(data)))},[])
  return <div className="content">
          <div className="left-nav_menu">

                <div className="left-nav_menu-a">Spotify
                <div className="left-menu_small-a">Главная</div>
          
                <div className="left-menu_small-a">Поиск</div>
          
                <div className="left-menu_small-a">Моя медиатека</div>
           
                <div className="left-menu_small-a">Создать плейлист</div>
        
                <div className="left-menu_small-a">Любимые треки</div>
                </div>
        </div>
      <div className="right_contnent">
        <div className="top-nav">
          <div className="top-nav_bigbutton">
            <div className="top-nav_bigbutton-a">Сменить тариф</div>
        </div>
        <div className="top-nav_user">
          <div className="top-nav_user-a">
          <img src="images/userimg.png" width="35" height="35" className="round"></img>
          User
        </div>
      </div>
        </div>
        <div className="main-field">
        {
          containers.map(container => <AlbumContainer key={container.getTitle()}
          albumTitle={container.getTitle()} 
          albumList={container.getList()} 
          promise={Api.getAlbumByTag(container.getTitle()).then
            ((data)=>
                data.albums.album.map((ob: any) => 
                    new Album(ob.name, ob.image[2]['#text'])
                  )
                ).
            then(data=>{return new AlbumList(container.getTitle(),data)}
            )}/>)
        }
        </div>
        </div>
      </div>
      
}

export default App;
