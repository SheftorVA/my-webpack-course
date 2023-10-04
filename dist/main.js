/*! For license information please see main.js.LICENSE.txt */
(function(){var __webpack_modules__={"./babel.js":function(){eval("async function start() {\n  return await Promise.resolve('Async is working');\n}\nstart().then(console.log);\nclass Util {\n  static id = Date.now();\n}\nconsole.log('Util id: ', Util.id);\n\n//# sourceURL=webpack:///./babel.js?")},"./models/Post.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Post; }\n/* harmony export */ });\nclass Post {\n  constructor(title, img) {\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n  }\n  toString() {\n    return JSON.stringify({\n      title: this.title,\n      date: this.date.toJSON(),\n      img: this.img\n    }, null, 2);\n  }\n  get upperCaseTitle() {\n    return this.title.toUpperCase();\n  }\n}\n\n//# sourceURL=webpack:///./models/Post.js?')},"./index.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Post */ "./models/Post.js");\n/* harmony import */ var _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/webpack-logo */ "./assets/webpack-logo.png");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./babel */ "./babel.js");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");\n/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/less.less */ "./styles/less.less");\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/scss.scss */ "./styles/scss.scss");\n\n\n// import json from \'./assets/json\';\n// import xml from \'./assets/data.xml\';\n// import csv from \'./assets/data.csv\';\n\n\n\n\n\n\n\nconst post = new _models_Post__WEBPACK_IMPORTED_MODULE_1__["default"](\'Webpack Post Title\', _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_2__);\njquery__WEBPACK_IMPORTED_MODULE_0__(\'pre\').addClass(\'code\').html(post.toString());\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {\n    class: "conteiner"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", null, "Webpack Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {\n    class: "logo"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("pre", {\n    class: "code"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {\n    class: "box"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", null, "Less")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {\n    class: "card"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", null, "Sass")));\n};\n(0,react_dom__WEBPACK_IMPORTED_MODULE_4__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(App, null), document.getElementById(\'app\'));\n// console.log(\'Post to String:\', post.toString());\n// console.log(\'JSON:\', json);\n// console.log(\'XML:\', xml);\n// console.log(\'CSV:\', csv);\n\n//# sourceURL=webpack:///./index.jsx?')},"./styles/less.less":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/less.less?")},"./styles/scss.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/scss.scss?")},"./styles/styles.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?")},"./assets/webpack-logo.png":function(module,__unused_webpack_exports,__webpack_require__){"use strict";eval('module.exports = __webpack_require__.p + "47692505d122dbcae490.png";\n\n//# sourceURL=webpack:///./assets/webpack-logo.png?')}},__webpack_module_cache__={},deferred;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={id:_,loaded:!1,exports:{}};return __webpack_modules__[_].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(_,e,r,t){if(!e){var n=1/0;for(o=0;o<deferred.length;o++){e=deferred[o][0],r=deferred[o][1],t=deferred[o][2];for(var s=!0,a=0;a<e.length;a++)(!1&t||n>=t)&&Object.keys(__webpack_require__.O).every((function(_){return __webpack_require__.O[_](e[a])}))?e.splice(a--,1):(s=!1,t<n&&(n=t));if(s){deferred.splice(o--,1);var c=r();void 0!==c&&(_=c)}}return _}t=t||0;for(var o=deferred.length;o>0&&deferred[o-1][2]>t;o--)deferred[o]=deferred[o-1];deferred[o]=[e,r,t]},__webpack_require__.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=function(_,e){for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},__webpack_require__.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},__webpack_require__.nmd=function(_){return _.paths=[],_.children||(_.children=[]),_},function(){var _;__webpack_require__.g.importScripts&&(_=__webpack_require__.g.location+"");var e=__webpack_require__.g.document;if(!_&&e&&(e.currentScript&&(_=e.currentScript.src),!_)){var r=e.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&!_;)_=r[t--].src}if(!_)throw new Error("Automatic publicPath is not supported in this browser");_=_.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=_}(),function(){var _={main:0};__webpack_require__.O.j=function(e){return 0===_[e]};var e=function(e,r){var t,n,s=r[0],a=r[1],c=r[2],o=0;if(s.some((function(e){return 0!==_[e]}))){for(t in a)__webpack_require__.o(a,t)&&(__webpack_require__.m[t]=a[t]);if(c)var i=c(__webpack_require__)}for(e&&e(r);o<s.length;o++)n=s[o],__webpack_require__.o(_,n)&&_[n]&&_[n][0](),_[n]=0;return __webpack_require__.O(i)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_react-dom_index_js"],(function(){return __webpack_require__("./index.jsx")}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();