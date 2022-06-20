var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Api } from './Api';
import { AlbumContainer } from './AlbumContainer';
import { AlbumList } from './AlbumList';
import { Album } from './Album';
function App() {
    var _a = useState([]), containers = _a[0], setContainers = _a[1];
    useEffect(function () {
        Api.getTags().then(function (topTags) { return Promise.all(topTags.map(function (tag) { return Api.getAlbumByTag(tag).then(function (data) {
            return data.albums.album.map(function (ob) {
                return new Album(ob.name, ob.image[2]['#text']);
            });
        }).then(function (albums) {
            return new AlbumList(tag, albums);
        }); })).then(function (data) { return setContainers(data); }); });
    }, []);
    return _jsxs("div", __assign({ className: "content" }, { children: [_jsx("div", __assign({ className: "left-nav_menu" }, { children: _jsxs("div", __assign({ className: "left-nav_menu-a" }, { children: ["Spotify", _jsx("div", __assign({ className: "left-menu_small-a" }, { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), void 0), _jsx("div", __assign({ className: "left-menu_small-a" }, { children: "\u041F\u043E\u0438\u0441\u043A" }), void 0), _jsx("div", __assign({ className: "left-menu_small-a" }, { children: "\u041C\u043E\u044F \u043C\u0435\u0434\u0438\u0430\u0442\u0435\u043A\u0430" }), void 0), _jsx("div", __assign({ className: "left-menu_small-a" }, { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442" }), void 0), _jsx("div", __assign({ className: "left-menu_small-a" }, { children: "\u041B\u044E\u0431\u0438\u043C\u044B\u0435 \u0442\u0440\u0435\u043A\u0438" }), void 0)] }), void 0) }), void 0), _jsxs("div", __assign({ className: "right_contnent" }, { children: [_jsxs("div", __assign({ className: "top-nav" }, { children: [_jsx("div", __assign({ className: "top-nav_bigbutton" }, { children: _jsx("div", __assign({ className: "top-nav_bigbutton-a" }, { children: "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0430\u0440\u0438\u0444" }), void 0) }), void 0), _jsx("div", __assign({ className: "top-nav_user" }, { children: _jsxs("div", __assign({ className: "top-nav_user-a" }, { children: [_jsx("img", { src: "images/userimg.png", width: "35", height: "35", className: "round" }, void 0), "User"] }), void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: "main-field" }, { children: containers.map(function (container) { return _jsx(AlbumContainer, { albumTitle: container.getTitle(), albumList: container.getList(), promise: Api.getAlbumByTag(container.getTitle()).then(function (data) {
                                return data.albums.album.map(function (ob) {
                                    return new Album(ob.name, ob.image[2]['#text']);
                                });
                            }).
                                then(function (data) { return new AlbumList(container.getTitle(), data); }) }, void 0); }) }), void 0)] }), void 0)] }), void 0);
}
export default App;
