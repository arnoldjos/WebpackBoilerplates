(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,n){},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(72)),a=n(57),r={loading:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case a.GET_LANDING_DATA:return(0,u.default)({},r,{data:t.payload});default:return e}}},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(30),a=function(e){return e&&e.__esModule?e:{default:e}}(n(105));t.default=(0,u.combineReducers)({landing:a.default})},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(46)),a=n(30),r=l(n(106)),o=l(n(104));function l(e){return e&&e.__esModule?e:{default:e}}var c=("object"===("undefined"==typeof window?"undefined":(0,u.default)(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):a.compose)((0,a.applyMiddleware)(o.default));t.default=function(e){return(0,a.createStore)(r.default,e,c)}},112:function(e,t,n){var u={"./About":34,"./About.js":34,"./Contact":33,"./Contact.js":33,"./Landing":32,"./Landing.js":32,"./Routes":19,"./Routes.js":19};function a(e){var t=r(e);if(!n.m[t]){var u=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw u.code="MODULE_NOT_FOUND",u}return n(t)}function r(e){var t=u[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(u)},a.resolve=r,a.id=112,e.exports=a},113:function(e,t,n){var u={"./About":[34,2],"./About.js":[34,2],"./Contact":[33,1],"./Contact.js":[33,1],"./Landing":[32,0],"./Landing.js":[32,0],"./Routes":[19],"./Routes.js":[19]};function a(e){var t=u[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(u)},a.id=113,e.exports=a},115:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(1));n(117),t.default=function(){return u.default.createElement("div",{className:"spinner"},u.default.createElement("div",{className:"rect1"}),u.default.createElement("div",{className:"rect2"}),u.default.createElement("div",{className:"rect3"}),u.default.createElement("div",{className:"rect4"}),u.default.createElement("div",{className:"rect5"}))}},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLanding=void 0;var u=l(n(141)),a=l(n(138)),r=l(n(137)),o=n(57);function l(e){return e&&e.__esModule?e:{default:e}}t.fetchLanding=function(){return function(){var e=(0,a.default)(u.default.mark(function e(t){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.default.get("https://jsonplaceholder.typicode.com/posts");case 2:n=e.sent,t({type:o.GET_LANDING_DATA,payload:n.data});case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()}},144:function(e,t,n){},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(36);n(144),t.default=function(){return u.default.createElement("div",{className:"nav"},u.default.createElement(a.Link,{to:"/"},"Landing"),u.default.createElement(a.Link,{to:"/about"},"About"),u.default.createElement(a.Link,{to:"/contact"},"Contact"),u.default.createElement(a.Link,{to:"/hello"},"Hello"))}},165:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var u=p(n(72)),a=p(n(71)),r=p(n(149)),o=p(n(148)),l=p(n(1)),c=n(36),d=p(n(64)),f=p(n(145)),i=p(n(97)),s=p(n(19)),_=p(n(118));function p(e){return e&&e.__esModule?e:{default:e}}n(115);var v=(0,d.default)(function(t){return(0,o.default)({id:"../../pages/",file:"D:/MyProjects/Apps/Webpack-Course/Universal-components/src/components/Layout/Layout.js",load:function(){return a.default.all([n(113)("./"+t.page)]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"../../pages/"+t.page)},resolve:function(){return n(112).resolve("./"+t.page)},chunkName:function(){return"pages/"+t.page}})},{loading:_.default,minDelay:500});t.default=function(){return l.default.createElement(i.default,null,l.default.createElement(f.default,null),l.default.createElement("div",{className:"content"},l.default.createElement(c.Switch,null,s.default.map(function(e){return l.default.createElement(c.Route,(0,u.default)({},e,{key:e.path}),l.default.createElement(v,{page:e.page}))}))))}}).call(this,"/")},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(96),a=[{path:"/",page:"Landing",exact:!0,loadData:function(){return(0,u.fetchLanding)()}},{path:"/about",exact:!0,page:"About"},{path:"/contact",exact:!0,page:"Contact"}];t.default=a},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(94)),a=s(n(93)),r=s(n(92)),o=s(n(91)),l=s(n(90)),c=n(1),d=s(c),f=n(36),i=s(n(165));function s(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return d.default.createElement(f.BrowserRouter,null,d.default.createElement(i.default,null))}}]),t}(c.Component);t.default=_},202:function(e,t,n){"use strict";var u=d(n(1)),a=d(n(53)),r=d(n(201)),o=n(111),l=(d(n(109)),n(95)),c=d(n(107));function d(e){return e&&e.__esModule?e:{default:e}}n(103);var f=(0,c.default)(window.INITIAL_STATE);!function(e){a.default.hydrate(u.default.createElement(l.Provider,{store:f},u.default.createElement(o.AppContainer,null,u.default.createElement(e,null))),document.getElementById("root"))}(r.default)},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_LANDING_DATA="GET_LANDING_DATA",t.SET_LOADING="SET_LOADING"},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(142);Object.defineProperty(t,"fetchLanding",{enumerable:!0,get:function(){return u.fetchLanding}})},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.children}}},[[202,3,5]]]);