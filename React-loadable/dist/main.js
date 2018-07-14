(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(1));n(106),t.default=function(e){var t=u.default.createElement("div",{className:"spinner"},u.default.createElement("div",{className:"rect1"}),u.default.createElement("div",{className:"rect2"}),u.default.createElement("div",{className:"rect3"}),u.default.createElement("div",{className:"rect4"}),u.default.createElement("div",{className:"rect5"}));return e.error?u.default.createElement("div",null,"Error! ",u.default.createElement("button",{onClick:e.retry},"Retry")):e.timedOut?u.default.createElement("div",null,"Taking a long time... ",u.default.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?t:null}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLanding=void 0;var u=d(n(76)),a=d(n(75)),r=d(n(127)),l=n(49);function d(e){return e&&e.__esModule?e:{default:e}}t.fetchLanding=function(){return function(){var e=(0,a.default)(u.default.mark(function e(t){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.default.get("https://jsonplaceholder.typicode.com/posts");case 2:n=e.sent,t({type:l.GET_LANDING_DATA,payload:n.data});case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(55)),a=n(93),r=l(n(107));function l(e){return e&&e.__esModule?e:{default:e}}var d=(0,u.default)({loader:function(){return n.e(3).then(n.t.bind(null,92,7))},modules:["./Landing/Landing"],webpack:function(){return[92]},loading:r.default,delay:300,timeout:1e4}),o=(0,u.default)({loader:function(){return n.e(2).then(n.t.bind(null,91,7))},modules:["./Contact/Contact"],webpack:function(){return[91]},loading:r.default,delay:300,timeout:1e4}),c=[{path:"/",component:d,exact:!0,loadData:function(e){return(0,e.dispatch)((0,a.fetchLanding)())}},{path:"/about",component:(0,u.default)({loader:function(){return n.e(1).then(n.t.bind(null,90,7))},modules:["./About/About"],webpack:function(){return[90]},loading:r.default,delay:300,timeout:1e4})},{path:"/contact",component:o}];t.default=c},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.children}},132:function(e,t,n){},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(31);n(132),t.default=function(){return u.default.createElement("div",{className:"nav"},u.default.createElement(a.Link,{to:"/"},"Landing"),u.default.createElement(a.Link,{to:"/about"},"About"),u.default.createElement(a.Link,{to:"/contact"},"Contact"),u.default.createElement(a.Link,{to:"/hello"},"Hello"))}},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=c(n(56)),a=c(n(1)),r=n(31),l=c(n(133)),d=c(n(130)),o=c(n(129));function c(e){return e&&e.__esModule?e:{default:e}}n(104),t.default=function(){return a.default.createElement(d.default,null,a.default.createElement(l.default,null),a.default.createElement("div",{className:"content"},a.default.createElement(r.Switch,null,o.default.map(function(e){return a.default.createElement(r.Route,(0,u.default)({},e,{key:e.path}))}))))}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(88)),a=s(n(87)),r=s(n(86)),l=s(n(85)),d=s(n(84)),o=n(1),c=s(o),f=n(31),i=s(n(138));function s(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement(f.BrowserRouter,null,c.default.createElement(i.default,null))}}]),t}(o.Component);t.default=_},193:function(e,t,n){"use strict";var u=s(n(76)),a=s(n(75)),r=s(n(1)),l=s(n(77)),d=s(n(166)),o=n(102),c=s(n(55)),f=n(89),i=s(n(99));function s(e){return e&&e.__esModule?e:{default:e}}n(95);var _=(0,i.default)(window.INITIAL_STATE);!function(){var e=(0,a.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.preloadReady();case 2:l.default.hydrate(r.default.createElement(f.Provider,{store:_},r.default.createElement(o.AppContainer,null,r.default.createElement(t,null))),document.getElementById("root"));case 3:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()(d.default)},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GET_LANDING_DATA="GET_LANDING_DATA",t.SET_LOADING="SET_LOADING"},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(128);Object.defineProperty(t,"fetchLanding",{enumerable:!0,get:function(){return u.fetchLanding}})},95:function(e,t,n){},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(56)),a=n(49),r={loading:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case a.GET_LANDING_DATA:return(0,u.default)({},r,{data:t.payload});default:return e}}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),a=function(e){return e&&e.__esModule?e:{default:e}}(n(97));t.default=(0,u.combineReducers)({landing:a.default})},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=d(n(36)),a=n(28),r=d(n(98)),l=d(n(96));function d(e){return e&&e.__esModule?e:{default:e}}var o=("object"===("undefined"==typeof window?"undefined":(0,u.default)(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):a.compose)((0,a.applyMiddleware)(l.default));t.default=function(e){return(0,a.createStore)(r.default,e,o)}}},[[193,0,5]]]);